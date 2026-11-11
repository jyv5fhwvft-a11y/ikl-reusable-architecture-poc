---
content_block_id: IKL-OS-002-CB-08
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-08
section_number: 8
section_title: Interactive Simulation
block_type: html-section
order: 8
---
<section id="interactive-simulation" class="concept-section" aria-labelledby="process-section-8-heading">

    <h2 id="process-section-8-heading">
        8. Interactive Simulation: Control a Process
    </h2>

    <p>
        Use the controls below to create a process and move it through its states.
        This simulation shows how an operating system manages a process lifecycle.
    </p>

    <div class="process-sim-panel">
        <div class="process-sim-status">
            <div class="process-sim-status-item">
                <span class="process-sim-label">PROCESS STATE</span>
                <strong id="processSimState">New</strong>
                <span>Current lifecycle state</span>
            </div>
            <div class="process-sim-status-item">
                <span class="process-sim-label">CPU</span>
                <strong id="processSimCPU">Available</strong>
                <span>Processor status</span>
            </div>
            <div class="process-sim-status-item">
                <span class="process-sim-label">PROCESS</span>
                <strong>Process A</strong>
                <span>Simulation subject</span>
            </div>
        </div>

        <div class="process-sim-states">
            <div class="process-sim-state" data-state="new"><span>1</span><strong>New</strong></div>
            <div class="process-sim-state" data-state="ready"><span>2</span><strong>Ready</strong></div>
            <div class="process-sim-state" data-state="running"><span>3</span><strong>Running</strong></div>
            <div class="process-sim-state" data-state="waiting"><span>4</span><strong>Waiting</strong></div>
            <div class="process-sim-state" data-state="terminated"><span>5</span><strong>Terminated</strong></div>
        </div>

        <div class="process-sim-explanation">
            <h4 id="processSimHeading">The process has not been created yet.</h4>
            <p id="processSimExplanation">Select Create Process to ask the operating system to create Process A.</p>
        </div>

        <div class="process-sim-controls">
            <button type="button" class="process-sim-button" data-action="create">Create Process</button>
            <button type="button" class="process-sim-button" data-action="dispatch">Dispatch (Ready → Running)</button>
            <button type="button" class="process-sim-button" data-action="request-io">Request I/O</button>
            <button type="button" class="process-sim-button" data-action="complete-io">Complete I/O</button>
            <button type="button" class="process-sim-button" data-action="time-slice">Time Slice Expires</button>
            <button type="button" class="process-sim-button" data-action="terminate">Terminate</button>
            <button type="button" class="process-sim-reset" data-action="reset">Reset Simulation</button>
        </div>

        <h4>Event History</h4>
        <ul class="process-sim-history" id="processSimHistory"></ul>
    </div>

</section>
