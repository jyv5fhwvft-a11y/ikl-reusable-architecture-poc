"""
IKL Reusable Architecture — Proof of Concept
Data and content validator

Checks:
1. Concept JSON records
2. Required fields and learning objectives
3. Unique identifiers
4. Markdown content front matter
5. Concept-to-content references
"""

import json
import re
import sys
from pathlib import Path


# Find the repository root from this script's location.
ROOT = Path(__file__).resolve().parents[1]

CONCEPTS_DIR = ROOT / "_data" / "concepts"
CONTENT_DIR = ROOT / "_learning_content"

REQUIRED_CONCEPT_FIELDS = [
    "id",
    "slug",
    "title",
    "subject",
    "topic",
    "description",
    "learning_levels",
    "learning_objectives",
    "content_blocks",
    "related_concepts",
]

REQUIRED_CONTENT_FIELDS = [
    "content_block_id",
    "concept_id",
    "section_id",
    "section_number",
    "section_title",
    "block_type",
    "order",
]

ALLOWED_LEVELS = {
    "first-grader",
    "beginner",
    "undergraduate",
    "expert",
}

errors = []
warnings = []
registered_ids = {}


def report_error(message):
    """Record a validation error."""
    errors.append(message)
    print(f"ERROR: {message}")


def report_warning(message):
    """Record a validation warning."""
    warnings.append(message)
    print(f"WARNING: {message}")


def register_id(identifier, description):
    """Check that an identifier is present and unique."""
    if not isinstance(identifier, str) or not identifier.strip():
        report_error(f"{description} has an empty or invalid ID.")
        return

    if identifier in registered_ids:
        report_error(
            f"Duplicate ID '{identifier}' found in "
            f"{description} and {registered_ids[identifier]}."
        )
    else:
        registered_ids[identifier] = description


def check_string(value, description):
    """Check that a value is a non-empty string."""
    if not isinstance(value, str) or not value.strip():
        report_error(f"{description} must be a non-empty string.")


def check_string_list(value, description):
    """Check that a value is a list of non-empty strings."""
    if not isinstance(value, list) or not value:
        report_error(f"{description} must be a non-empty list.")
        return False

    valid = True

    for item in value:
        if not isinstance(item, str) or not item.strip():
            report_error(
                f"{description} contains an empty or invalid item."
            )
            valid = False

    return valid


def read_front_matter(file_path):
    """
    Read simple key-value YAML front matter.

    Handles:
    - UTF-8 files with or without a byte-order mark (BOM).
    - Windows, Unix and Mac line endings.
    - Whitespace surrounding the front matter markers.

    This supports the scalar metadata fields used
    by the current IKL Markdown content files.
    """
    try:
        content = file_path.read_text(encoding="utf-8-sig")

    except (OSError, UnicodeError) as error:
        report_error(f"Cannot read {file_path}: {error}")
        return None

    lines = content.splitlines()

    if not lines or lines[0].strip() != "---":
        first_line = repr(lines[0]) if lines else "<empty file>"

        report_error(
            f"{file_path} has no opening front matter marker. "
            f"First line read by validator: {first_line}"
        )
        return None

    try:
        closing_index = lines.index("---", 1)

    except ValueError:
        report_error(
            f"{file_path} has no closing front matter marker."
        )
        return None

    metadata = {}

    for line_number, line in enumerate(
        lines[1:closing_index], start=2
    ):
        if not line.strip() or line.lstrip().startswith("#"):
            continue

        match = re.match(
            r"^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*?)\s*$",
            line
        )

        if not match:
            report_error(
                f"{file_path}, line {line_number}: "
                "unsupported front matter entry."
            )
            continue

        key, value = match.groups()

        if key in metadata:
            report_error(
                f"{file_path} contains duplicate metadata key '{key}'."
            )
            continue

        metadata[key] = value.strip().strip("\"'")

    return metadata


def validate_concept_file(file_path):
    """Validate one concept JSON record."""
    print(f"\nChecking concept: {file_path.name}")

    try:
        concept = json.loads(
            file_path.read_text(encoding="utf-8")
        )

    except (OSError, json.JSONDecodeError) as error:
        report_error(
            f"Cannot read valid JSON from {file_path}: {error}"
        )
        return None

    if not isinstance(concept, dict):
        report_error(
            f"{file_path} must contain a JSON object."
        )
        return None

    for field in REQUIRED_CONCEPT_FIELDS:
        if field not in concept:
            report_error(
                f"{file_path} is missing required field '{field}'."
            )

    if any(
        field not in concept
        for field in REQUIRED_CONCEPT_FIELDS
    ):
        return None

    register_id(concept["id"], file_path.name)

    for field in [
        "slug",
        "title",
        "subject",
        "topic",
        "description",
    ]:
        check_string(
            concept[field],
            f"{file_path.name}: {field}"
        )

    slug = concept["slug"]

    if isinstance(slug, str):
        if not re.fullmatch(r"[a-z0-9-]+", slug):
            report_error(
                f"{file_path.name}: slug must contain only "
                "lowercase letters, numbers and hyphens."
            )

        if file_path.stem != slug:
            report_error(
                f"{file_path.name}: filename must match "
                f"slug '{slug}'."
            )

    levels_valid = check_string_list(
        concept["learning_levels"],
        f"{file_path.name}: learning_levels"
    )

    if levels_valid:
        for level in concept["learning_levels"]:
            if level not in ALLOWED_LEVELS:
                report_error(
                    f"{file_path.name}: unknown learning "
                    f"level '{level}'."
                )

    objectives = concept["learning_objectives"]

    if not isinstance(objectives, list) or not objectives:
        report_error(
            f"{file_path.name}: learning_objectives "
            "must be a non-empty list."
        )

    else:
        for number, objective in enumerate(
            objectives, start=1
        ):
            if not isinstance(objective, dict):
                report_error(
                    f"{file_path.name}: objective {number} "
                    "must be an object."
                )
                continue

            if "id" not in objective or "text" not in objective:
                report_error(
                    f"{file_path.name}: objective {number} "
                    "needs both id and text."
                )
                continue

            register_id(
                objective["id"],
                f"{file_path.name}, objective {number}"
            )

            check_string(
                objective["text"],
                f"{file_path.name}, objective {number}: text"
            )

    check_string_list(
        concept["content_blocks"],
        f"{file_path.name}: content_blocks"
    )

    if isinstance(concept["content_blocks"], list):
        valid_references = [
            item
            for item in concept["content_blocks"]
            if isinstance(item, str)
        ]

        if len(valid_references) != len(set(valid_references)):
            report_error(
                f"{file_path.name}: content_blocks "
                "contains duplicate references."
            )

    check_string_list(
        concept["related_concepts"],
        f"{file_path.name}: related_concepts"
    )

    return concept


def validate_content_file(
    file_path,
    concept,
    content_records
):
    """Validate one Markdown educational content file."""
    print(
        f"Checking content: {file_path.relative_to(ROOT)}"
    )

    metadata = read_front_matter(file_path)

    if metadata is None:
        return

    for field in REQUIRED_CONTENT_FIELDS:
        if field not in metadata:
            report_error(
                f"{file_path}: missing front matter "
                f"field '{field}'."
            )

    if any(
        field not in metadata
        for field in REQUIRED_CONTENT_FIELDS
    ):
        return

    register_id(
        metadata["content_block_id"],
        str(file_path.relative_to(ROOT))
    )

    if metadata["concept_id"] != concept["id"]:
        report_error(
            f"{file_path}: concept_id does not match "
            f"the concept record '{concept['id']}'."
        )

    if not metadata["section_number"].isdigit():
        report_error(
            f"{file_path}: section_number must be "
            "a whole number."
        )

    if not metadata["order"].isdigit():
        report_error(
            f"{file_path}: order must be a whole number."
        )

    for field in [
        "content_block_id",
        "section_id",
        "section_title",
        "block_type",
    ]:
        check_string(
            metadata[field],
            f"{file_path}: {field}"
        )

    content_records[metadata["content_block_id"]] = {
        "concept_id": metadata["concept_id"],
        "file": file_path,
    }


def validate_content_references(concepts, content_records):
    """
    Check that each referenced content block exists
    and belongs to the correct concept.
    """
    for concept in concepts:
        content_blocks = concept["content_blocks"]

        if not isinstance(content_blocks, list):
            continue

        for content_id in content_blocks:
            if not isinstance(content_id, str):
                continue

            if content_id not in content_records:
                report_error(
                    f"Concept '{concept['slug']}' references "
                    f"missing content block '{content_id}'."
                )
                continue

            record = content_records[content_id]

            if record["concept_id"] != concept["id"]:
                report_error(
                    f"Content block '{content_id}' is linked "
                    "to the wrong concept."
                )


def main():
    """Run all validation checks."""
    print("IKL — Reusable Architecture Validator")
    print("-------------------------------------")

    if not CONCEPTS_DIR.is_dir():
        report_error(
            "Concept data folder was not found."
        )
        return 1

    concept_files = sorted(
        CONCEPTS_DIR.glob("*.json")
    )

    if not concept_files:
        report_error(
            "No concept JSON files were found."
        )
        return 1

    concepts = []
    seen_slugs = {}

    for file_path in concept_files:
        concept = validate_concept_file(file_path)

        if concept is not None:
            slug = concept["slug"]

            if isinstance(slug, str):
                if slug in seen_slugs:
                    report_error(
                        f"Duplicate concept slug '{slug}'."
                    )
                else:
                    seen_slugs[slug] = file_path.name

            concepts.append(concept)

    content_records = {}

    for concept in concepts:
        slug = concept["slug"]

        if not isinstance(slug, str):
            continue

        if not re.fullmatch(r"[a-z0-9-]+", slug):
            continue

        concept_content_dir = CONTENT_DIR / slug

        if not concept_content_dir.is_dir():
            report_error(
                f"Content folder for concept "
                f"'{slug}' was not found."
            )
            continue

        content_files = sorted(
            concept_content_dir.glob("*.md")
        )

        if not content_files:
            report_error(
                f"No Markdown content files found "
                f"for concept '{slug}'."
            )
            continue

        for file_path in content_files:
            validate_content_file(
                file_path,
                concept,
                content_records
            )

    validate_content_references(
        concepts,
        content_records
    )

    # Final report
    print("\n-------------------------------------")
    print("VALIDATION SUMMARY")
    print("-------------------------------------")
    print(f"Concept records checked: {len(concepts)}")
    print(f"Content blocks found: {len(content_records)}")
    print(f"Warnings: {len(warnings)}")
    print(f"Errors: {len(errors)}")

    if errors:
        print("\nValidation FAILED.")
        return 1

    print("\nValidation PASSED.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
