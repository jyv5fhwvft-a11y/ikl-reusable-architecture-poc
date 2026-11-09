
"""
IKL Reusable Architecture — Validator Tests

Runs deliberately invalid test fixtures against a temporary
copy of the repository structure and checks the validator's
results.

The actual repository files are never modified by these tests.
"""

import json
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


# Locate the real repository and its test resources.
REPO_ROOT = Path(__file__).resolve().parents[1]

FIXTURES_DIR = REPO_ROOT / "tests" / "fixtures"
VALIDATOR_FILE = REPO_ROOT / "validation" / "validate.py"


def make_concept(identifier, slug, content_blocks):
    """Create a complete concept record for testing."""

    return {
        "id": identifier,
        "slug": slug,
        "title": slug.replace("-", " ").title(),
        "subject": "IKL Test",
        "topic": "Validator Testing",
        "description": "A temporary concept used to test validation.",
        "learning_levels": [
            "first-grader",
            "beginner",
            "undergraduate",
            "expert"
        ],
        "learning_objectives": [
            {
                "id": f"TEST-{slug}-LO-01",
                "text": "Test the concept validation process."
            }
        ],
        "content_blocks": content_blocks,
        "related_concepts": [
            "Testing"
        ]
    }


def make_content_file(file_path, content_id, concept_id):
    """Create valid Markdown front matter for a test content block."""

    content = f"""---
id: {content_id}
concept_id: {concept_id}
section_id: TEST-SECTION-01
section_number: 1
section_title: Test Section
block_type: definition
order: 1
---

This is temporary test content.
"""

    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(content, encoding="utf-8")


class ValidatorTests(unittest.TestCase):

    def setUp(self):
        """Create an isolated temporary repository for each test."""

        self.temp_directory = tempfile.TemporaryDirectory()
        self.test_root = Path(self.temp_directory.name)

        self.concepts_dir = (
            self.test_root / "_data" / "concepts"
        )

        self.content_dir = (
            self.test_root / "_learning_content"
        )

        self.validation_dir = (
            self.test_root / "validation"
        )

        self.concepts_dir.mkdir(parents=True)
        self.content_dir.mkdir(parents=True)
        self.validation_dir.mkdir(parents=True)

        # Copy the committed validator into the temporary repository.
        shutil.copy2(
            VALIDATOR_FILE,
            self.validation_dir / "validate.py"
        )

    def tearDown(self):
        """Remove temporary test files after each test."""

        self.temp_directory.cleanup()

    def write_concept(self, concept):
        """Write one concept JSON file."""

        file_path = (
            self.concepts_dir / f"{concept['slug']}.json"
        )

        file_path.write_text(
            json.dumps(concept, indent=2),
            encoding="utf-8"
        )

    def run_validator(self):
        """Execute the validator and return its result."""

        return subprocess.run(
            [
                sys.executable,
                str(self.validation_dir / "validate.py")
            ],
            capture_output=True,
            text=True,
            check=False
        )

    def test_duplicate_concept_id(self):
        """The validator must detect duplicate concept IDs."""

        fixture_path = (
            FIXTURES_DIR / "duplicate-id.json"
        )

        fixture = json.loads(
            fixture_path.read_text(encoding="utf-8")
        )

        for record in fixture["records"]:
            slug = record["slug"]

            content_id = (
                f"{record['id']}-{slug}-CB-01"
            )

            concept = make_concept(
                record["id"],
                slug,
                [content_id]
            )

            self.write_concept(concept)

            make_content_file(
                self.content_dir / slug / "definition.md",
                content_id,
                record["id"]
            )

        result = self.run_validator()

        self.assertNotEqual(
            result.returncode,
            0,
            "The validator should reject duplicate concept IDs."
        )

        self.assertIn(
            fixture["expected_error"],
            result.stdout
        )

    def test_missing_content_reference(self):
        """The validator must detect a missing content reference."""

        fixture_path = (
            FIXTURES_DIR / "missing-reference.json"
        )

        fixture = json.loads(
            fixture_path.read_text(encoding="utf-8")
        )

        concept_data = fixture["concept"]

        concept_id = concept_data["id"]
        slug = concept_data["slug"]

        concept = make_concept(
            concept_id,
            slug,
            concept_data["content_blocks"]
        )

        self.write_concept(concept)

        # Create only the content blocks listed as available.
        for content_id in fixture["available_content_blocks"]:
            make_content_file(
                self.content_dir / slug / "definition.md",
                content_id,
                concept_id
            )

        result = self.run_validator()

        self.assertNotEqual(
            result.returncode,
            0,
            "The validator should reject missing content references."
        )

        self.assertIn(
            fixture["expected_error"],
            result.stdout
        )


if __name__ == "__main__":
    unittest.main(verbosity=2)
