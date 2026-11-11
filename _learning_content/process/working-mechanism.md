---
content_block_id: IKL-OS-002-CB-07
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-07
section_number: 7
section_title: Working Mechanism
block_type: html-section
order: 7
---
<section id="working-mechanism" class="concept-section" aria-labelledby="working-mechanism-heading">

    <h2 id="working-mechanism-heading">
        7. How Does a Process Work? The Complete Working Mechanism
    </h2>

    <p>
        A process moves through a lifecycle managed by the operating system:
        creation, scheduling, execution, waiting for events, and termination.
    </p>

    <!-- Lifecycle visual card -->
    <div class="s7-visual-card">
        <h3>Process Lifecycle</h3>
        <div class="s7-lifecycle-track">
            <div class="s7-state">New</div>
            <div class="s7-state">Ready</div>
            <div class="s7-state">Running</div>
            <div class="s7-state">Waiting</div>
            <div class="s7-state">Terminated</div>
        </div>
    </div>

    <!-- Ready queue visual card -->
    <div class="s7-visual-card">
        <h3>Ready Queue and CPU Scheduling</h3>
        <div class="s7-queue">
            <div class="s7-queue-item">Browser</div>
            <div class="s7-queue-item">Music Player</div>
            <div class="s7-queue-item">File Manager</div>
            <div class="s7-queue-output">CPU</div>
        </div>
    </div>

    <!-- Context switch visual card -->
    <div class="s7-visual-card">
        <h3>Context Switch</h3>
        <div class="s7-switch-flow">
            <div class="s7-switch-thread">Thread A (Running)</div>
            <div class="s7-switch-action">Save context</div>
            <div class="s7-switch-action">Restore context</div>
            <div class="s7-switch-thread">Thread B (Running)</div>
        </div>
    </div>

    <!-- Waiting to Ready visual card -->
    <div class="s7-visual-card">
        <h3>Waiting to Ready</h3>
        <div class="s7-resume-flow">
            <div class="s7-resume-state">Waiting</div>
            <div class="s7-resume-event">Event completes</div>
            <div class="s7-resume-state">Ready</div>
            <div class="s7-resume-state">Running</div>
        </div>
    </div>

    <!-- Termination visual card -->
    <div class="s7-visual-card">
        <h3>Process Termination</h3>
        <div class="s7-termination-grid">
            <div>Execution ends</div>
            <div>Status is recorded</div>
            <div>Resources are released</div>
            <div>Cleanup is completed</div>
        </div>
        <div class="s7-termination-result">Terminated</div>
    </div>

    <div class="concept-note">
        <p>
            <strong>Key idea:</strong> Context switches allow the OS to pause one
            process (or thread) and resume another, creating the illusion of
            concurrent execution on a single CPU.
        </p>
    </div>

</section>
