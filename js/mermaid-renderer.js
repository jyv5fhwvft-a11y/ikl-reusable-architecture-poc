/*
 * IKL Reusable Mermaid Renderer
 * Concept: Threads (IKL-OS-003)
 *
 * Purpose:
 * Detect literal Mermaid Markdown fences in generated HTML,
 * convert them into code blocks, and render visual diagrams.
 */

(function () {
  "use strict";

  const MERMAID_CDN =
    "https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid.min.js";

  const FALLBACK_MESSAGE =
    "The diagram could not be rendered. " +
    "The original Mermaid source is available above.";

  function convertMermaidFences() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const textNodes = [];

    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.includes("```mermaid")) {
        textNodes.push(walker.currentNode);
      }
    }

    const fencePattern =
      /```mermaid(?:[ \t]+[^\r\n]*)?[ \t]*\r?\n([\s\S]*?)\r?\n```/g;

    textNodes.forEach(function (textNode) {
      const originalText = textNode.nodeValue;
      const fragment = document.createDocumentFragment();

      let lastIndex = 0;
      let match;
      let found = false;

      fencePattern.lastIndex = 0;

      while ((match = fencePattern.exec(originalText)) !== null) {
        found = true;

        if (match.index > lastIndex) {
          fragment.appendChild(
            document.createTextNode(
              originalText.slice(lastIndex, match.index)
            )
          );
        }

        const pre = document.createElement("pre");
        const code = document.createElement("code");

        code.className = "language-mermaid";
        code.textContent = match[1].trim();

        pre.appendChild(code);
        fragment.appendChild(pre);

        lastIndex = fencePattern.lastIndex;
      }

      if (!found) {
        return;
      }

      if (lastIndex < originalText.length) {
        fragment.appendChild(
          document.createTextNode(
            originalText.slice(lastIndex)
          )
        );
      }

      textNode.parentNode.replaceChild(fragment, textNode);
    });
  }

  function findMermaidBlocks() {
    return Array.from(
      document.querySelectorAll("code.language-mermaid")
    );
  }

  function loadMermaid() {
    return new Promise(function (resolve, reject) {
      if (window.mermaid) {
        resolve(window.mermaid);
        return;
      }

      const script = document.createElement("script");

      script.src = MERMAID_CDN;
      script.async = true;

      script.onload = function () {
        if (window.mermaid) {
          resolve(window.mermaid);
        } else {
          reject(new Error("Mermaid library was not available."));
        }
      };

      script.onerror = function () {
        reject(new Error("Unable to load Mermaid."));
      };

      document.head.appendChild(script);
    });
  }

  function showFallback(block) {
    const message = document.createElement("p");

    message.className = "mermaid-render-error";
    message.textContent = FALLBACK_MESSAGE;
    message.setAttribute("role", "status");

    const target = block.closest("pre") || block;

    target.insertAdjacentElement("afterend", message);
  }

  async function renderDiagrams(mermaid) {
    const blocks = findMermaidBlocks();

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "default"
    });

    for (let index = 0; index < blocks.length; index += 1) {
      const block = blocks[index];

      if (!document.body.contains(block)) {
        continue;
      }

      const source = block.textContent.trim();
      const target = block.closest("pre") || block;

      if (!source) {
        continue;
      }

      try {
        const diagramId = "ikl-mermaid-" + (index + 1);

        const result = await mermaid.render(
          diagramId,
          source
        );

        const diagram = document.createElement("div");

        diagram.className = "mermaid-diagram";
        diagram.setAttribute("role", "img");
        diagram.setAttribute(
          "aria-label",
          "Educational diagram " + (index + 1)
        );

        diagram.innerHTML = result.svg;

        target.replaceWith(diagram);

      } catch (error) {
        console.error(
          "IKL Mermaid rendering error:",
          error
        );

        showFallback(block);
      }
    }
  }

  async function initialiseMermaidRenderer() {
    convertMermaidFences();

    const blocks = findMermaidBlocks();

    if (blocks.length === 0) {
      console.warn("IKL: No Mermaid diagrams were found.");
      return;
    }

    try {
      const mermaid = await loadMermaid();

      await renderDiagrams(mermaid);

    } catch (error) {
      console.error(
        "IKL Mermaid library loading error:",
        error
      );

      blocks.forEach(function (block) {
        if (document.body.contains(block)) {
          showFallback(block);
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialiseMermaidRenderer
    );
  } else {
    initialiseMermaidRenderer();
  }

})();
