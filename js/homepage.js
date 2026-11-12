/* =========================================================
   INTERACTIVE KNOWLEDGE LEXICON
   Homepage Interaction Script — POC Migration Edition

   Purpose:
   Controls homepage search, concept results, subject filters,
   mobile navigation, footer year and page-refresh behaviour.

   Repository:
   ikl-reusable-architecture-poc

   Important:
   Concept links point to generated HTML pages, not Markdown
   source files. The POC base path is read from the homepage
   body element, which is populated by Jekyll.
   ========================================================= */


/* =========================================================
   1. CONCEPT DATA AND CONFIGURATION
   ========================================================= */

// Read the POC base path supplied by Jekyll in index.html.
const POC_BASE_URL =
  (document.body.dataset.baseurl || "").replace(/\/$/, "");

// Build a link to a generated concept HTML page.
function getConceptUrl(slug) {
  return `${POC_BASE_URL}/concepts/${slug}.html`;
}

// Homepage concept collection.
// Only completed concept pages are marked as available.
const concepts = [
  {
    name: "Ping",
    slug: "ping",
    subject: "Computer Networking",
    description:
      "A network diagnostic utility used to test whether a destination responds.",
    status: "Ready in POC",
    fileAvailable: true
  },
  {
    name: "Process",
    slug: "process",
    subject: "Operating Systems",
    description:
      "A program in execution, together with its current state and managed resources.",
    status: "Ready in POC",
    fileAvailable: true
  },
  {
    name: "Threads",
    slug: "threads",
    subject: "Operating Systems",
    description:
      "Units of execution that operate within a process.",
    status: "In development",
    fileAvailable: false
  },
  {
    name: "Virtual Memory",
    slug: "virtual-memory",
    subject: "Operating Systems",
    description:
      "A memory-management approach that gives programs a virtual address space.",
    status: "Planned",
    fileAvailable: false
  },
  {
    name: "Paging",
    slug: "paging",
    subject: "Operating Systems",
    description:
      "A memory-management technique that divides memory into fixed-size blocks.",
    status: "Planned",
    fileAvailable: false
  },
  {
    name: "API",
    slug: "api",
    subject: "Software Development",
    description:
      "A defined way for software components to communicate.",
    status: "Planned",
    fileAvailable: false
  },
  {
    name: "Encryption",
    slug: "encryption",
    subject: "Cybersecurity",
    description:
      "A method of transforming information so it can only be read with the right key.",
    status: "Planned",
    fileAvailable: false
  }
];


/* =========================================================
   2. HOMEPAGE ELEMENT REFERENCES
   ========================================================= */

// Search elements.
const form = document.getElementById("conceptSearchForm");
const input = document.getElementById("conceptSearch");
const results = document.getElementById("searchResults");

// Navigation elements.
const nav = document.getElementById("primaryNav");
const menu = document.getElementById("menuToggle");


/* =========================================================
   3. CONCEPT SEARCH AND RESULTS
   ========================================================= */

// Find and display concepts matching the visitor's search.
function renderResults(query) {
  const term = query.trim().toLowerCase();

  results.replaceChildren();

  // Display a helpful message if the search is empty.
  if (!term) {
    results.innerHTML =
      '<p class="no-results">Enter a concept or subject to begin exploring.</p>';
    return;
  }

  // Search concept names, subjects, descriptions and statuses.
  const matches = concepts.filter(concept =>
    [
      concept.name,
      concept.subject,
      concept.description,
      concept.status
    ].some(value => value.toLowerCase().includes(term))
  );

  // Display the no-results message when nothing matches.
  if (!matches.length) {
    results.innerHTML =
      '<p class="no-results no-match">No matching concept found yet. Try another word or subject.</p>';
    return;
  }

  // Create a result card for every matching concept.
  matches.forEach(concept => {
    const card = document.createElement("article");
    card.className = "result-card";

    const title = document.createElement("h3");
    title.textContent = concept.name;

    const description = document.createElement("p");
    description.textContent =
      `${concept.subject} — ${concept.description}`;

    card.append(title, description);

    // Link to the generated HTML page when available.
    if (concept.fileAvailable) {
      const link = document.createElement("a");

      link.href = getConceptUrl(concept.slug);
      link.textContent = "Open concept →";

      card.append(link);
    } else {
      // Clearly identify concepts that are not yet available.
      const status = document.createElement("span");
      status.className = "result-status";
      status.textContent = concept.status;

      card.append(status);
    }

    results.append(card);
  });
}


/* =========================================================
   4. SEARCH FORM
   ========================================================= */

// Handle searches submitted using the Search button or keyboard.
if (form && input && results) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    renderResults(input.value);

    // Clear the search field after displaying the results.
    input.value = "";
  });
}


/* =========================================================
   5. POPULAR SEARCH BUTTONS
   ========================================================= */

// Allow visitors to select a suggested search keyword.
if (input && results) {
  document.querySelectorAll("[data-search]").forEach(button => {
    button.addEventListener("click", () => {
      input.value = button.dataset.search;

      renderResults(input.value);

      input.focus();
    });
  });
}


/* =========================================================
   6. SUBJECT CATEGORY FILTERS
   ========================================================= */

// Display concepts belonging to the selected subject.
if (input && results) {
  document.querySelectorAll("[data-subject]").forEach(card => {
    card.addEventListener("click", () => {
      input.value = card.dataset.subject;

      renderResults(input.value);
    });
  });
}


/* =========================================================
   7. MOBILE NAVIGATION
   ========================================================= */

// Open and close the compact navigation menu.
if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");

    menu.setAttribute("aria-expanded", String(open));

    menu.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );
  });

  // Close the compact menu after a navigation link is selected.
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");

      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open navigation");
    });
  });
}


/* =========================================================
   8. FOOTER — CURRENT YEAR
   ========================================================= */

// Automatically display the current year in the footer.
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   9. PAGE REFRESH RETURN TO TOP
   ========================================================= */

// Temporary browser-session marker for detecting a page reload.
const refreshMarker = "iklHomepageRefresh";

// Record that the page is being unloaded.
window.addEventListener("pagehide", () => {
  try {
    sessionStorage.setItem(refreshMarker, "true");
  } catch (error) {
    // Continue normally if browser storage is unavailable.
  }
});

// Check whether the previous visit ended with an unload.
let wasPageRefreshed = false;

try {
  wasPageRefreshed =
    sessionStorage.getItem(refreshMarker) === "true";

  sessionStorage.removeItem(refreshMarker);

} catch (error) {
  // Continue normally if browser storage is unavailable.
}

// Apply the correction only when the marker is detected.
if (wasPageRefreshed) {

  // Prevent automatic browser scroll restoration.
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // Remove URL fragments such as #about and #pathways.
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );

  // Temporarily disable smooth scrolling.
  const pageRoot = document.documentElement;
  const originalScrollBehavior = pageRoot.style.scrollBehavior;

  pageRoot.style.scrollBehavior = "auto";

  // Return the visitor to the homepage top.
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };

  // Apply the correction at several stages.
  window.addEventListener("pageshow", () => {
    returnToTop();

    window.requestAnimationFrame(returnToTop);

    window.setTimeout(returnToTop, 250);
    window.setTimeout(returnToTop, 750);
    window.setTimeout(returnToTop, 1200);

    // Restore the original scrolling style afterwards.
    window.setTimeout(() => {
      pageRoot.style.scrollBehavior = originalScrollBehavior;
    }, 1500);

  }, { once: true });

  // Also handle the page load event.
  window.addEventListener("load", returnToTop, { once: true });
}

// =========================================================
// END OF SECTION 9
// =========================================================
