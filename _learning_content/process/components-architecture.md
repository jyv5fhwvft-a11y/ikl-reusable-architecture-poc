---
content_block_id: IKL-OS-002-CB-06
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-06
section_number: 6
section_title: Components and Architecture
block_type: html-section
order: 6
---
<section id="components-architecture" class="concept-section" aria-labelledby="components-architecture-heading">
    <span id="ikl-learn-how-it-works"
          class="ikl-learning-anchor"
          aria-hidden="true"></span>

    <h2 id="components-architecture-heading">
        6. Components and Architecture
    </h2>

    <p>
        Explore the main components the operating system uses to manage a process.
    </p>

    <div class="component-explorer" id="process-component-explorer">
        <div class="component-explorer-controls">
            <button type="button" class="component-explorer-button" data-component-key="pid">01. Process ID (PID)</button>
            <button type="button" class="component-explorer-button" data-component-key="state">02. Process State</button>
            <button type="button" class="component-explorer-button" data-component-key="program-counter">03. Program Counter</button>
            <button type="button" class="component-explorer-button" data-component-key="cpu-registers">04. CPU Registers</button>
            <button type="button" class="component-explorer-button" data-component-key="scheduling">05. Scheduling Info</button>
            <button type="button" class="component-explorer-button" data-component-key="memory">06. Memory Management</button>
            <button type="button" class="component-explorer-button" data-component-key="io-accounting">07. I/O and Accounting</button>
        </div>

        <div class="component-explorer-display">
            <p class="component-explorer-label" data-explorer-label>Select a component</p>
            <h3 data-explorer-title>Discover process components</h3>
            <p data-explorer-description>Each component has a different responsibility in process management.</p>
            <div class="component-explorer-details" data-explorer-details></div>
            <p class="component-explorer-status" data-explorer-status aria-live="polite"></p>
        </div>
    </div>

    <h3>Two Threads, One Process</h3>
    <p>
        Threads inside the same process share the process address space,
        but each thread has its own execution context (program counter and registers).
    </p>

    <div id="thread-simulation">
        <div id="thread-a-panel">
            <h4>Thread A</h4>
            <p>State: <span id="thread-a-state">Running</span></p>
            <p>PC: <span id="thread-a-pc">120</span></p>
            <p>R1: <span id="thread-a-register">25</span></p>
        </div>
        <div id="thread-b-panel">
            <h4>Thread B</h4>
            <p>State: <span id="thread-b-state">Ready</span></p>
            <p>PC: <span id="thread-b-pc">450</span></p>
            <p>R1: <span id="thread-b-register">80</span></p>
        </div>
        <div>
            <h4>CPU</h4>
            <p>Running: <span id="cpu-running-thread">Thread A</span></p>
            <p>Active PC: <span id="cpu-active-pc">120</span></p>
            <p>Active R1: <span id="cpu-active-register">25</span></p>
        </div>
        <p id="thread-simulation-message">Thread A is running. Thread B is ready. Both share Process 2048's address space.</p>
        <button type="button" id="examine-thread-a">Examine Thread A</button>
        <button type="button" id="examine-thread-b">Examine Thread B</button>
        <button type="button" id="switch-thread">Switch Thread</button>
        <button type="button" id="reset-thread-simulation">Reset</button>
    </div>

</section>
