---
content_block_id: IKL-OS-002-CB-09
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-09
section_number: 9
section_title: Flowchart and Sequence Diagram
block_type: html-section
order: 9
---
<section id="process-diagrams" class="concept-section">
    <h2>9. Flowchart and Sequence Diagram</h2>

    <p>
        Follow the arrows to understand each state transition.
        Use the Play / Next controls under the diagram to animate the lifecycle.
    </p>

    <div class="process-diagram-scroll">
        <svg class="process-lifecycle-svg" viewBox="0 0 900 350" width="100%" role="img" aria-label="Process lifecycle flowchart">
            <rect x="30" y="65" width="120" height="80" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>
            <text x="90" y="110" text-anchor="middle" fill="#102A43" font-weight="700">New</text>
            <path d="M180 105 H300" stroke="#2563EB" stroke-width="3" fill="none"/>
            <rect x="300" y="65" width="120" height="80" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>
            <text x="360" y="110" text-anchor="middle" fill="#102A43" font-weight="700">Ready</text>
            <path d="M450 105 H570" stroke="#2563EB" stroke-width="3" fill="none"/>
            <rect x="570" y="65" width="120" height="80" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>
            <text x="630" y="110" text-anchor="middle" fill="#102A43" font-weight="700">Running</text>
            <path d="M645 150 V270" stroke="#2563EB" stroke-width="3" fill="none"/>
            <rect x="570" y="270" width="120" height="60" rx="8" fill="#F0FDFA" stroke="#0D9488" stroke-width="2"/>
            <text x="630" y="305" text-anchor="middle" fill="#102A43" font-weight="700">Waiting</text>
            <path d="M570 310 H375 V150" stroke="#2563EB" stroke-width="3" fill="none"/>
            <path d="M645 65 V40 H375 V65" stroke="#F59E0B" stroke-width="2" fill="none"/>
            <path d="M720 105 H750" stroke="#2563EB" stroke-width="3" fill="none"/>
            <rect x="750" y="65" width="120" height="80" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2"/>
            <text x="810" y="110" text-anchor="middle" fill="#102A43" font-weight="700">Terminated</text>
        </svg>
    </div>

    <p>
        <strong>Routes:</strong> Normal path uses Waiting for I/O.
        Alternative path returns Ready when a time slice expires.
    </p>
</section>
