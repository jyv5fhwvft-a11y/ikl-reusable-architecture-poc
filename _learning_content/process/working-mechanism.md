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
        A process does not simply appear and immediately use the CPU.
        During its lifetime, it passes through different stages.
        The operating system manages these stages and coordinates
        access to resources such as CPU time, memory and input/output.
    </p>

    <p>
        In this section, we will follow a process from its creation
        through execution and waiting, until its termination.
    </p>

    <div class="s7-intro-journey">
        <div class="s7-journey-step">
            <span>01</span><strong>Created</strong>
        </div>
        <span class="s7-journey-arrow">→</span>
        <div class="s7-journey-step">
            <span>02</span><strong>Ready</strong>
        </div>
        <span class="s7-journey-arrow">→</span>
        <div class="s7-journey-step">
            <span>03</span><strong>Running</strong>
        </div>
        <span class="s7-journey-arrow">→</span>
        <div class="s7-journey-step">
            <span>04</span><strong>Waiting / Ready</strong>
        </div>
        <span class="s7-journey-arrow">→</span>
        <div class="s7-journey-step">
            <span>05</span><strong>Terminated</strong>
        </div>
    </div>

    <div class="s7-callout s7-callout-info">
        <strong>One important distinction</strong>
        The five-state process model is a simplified teaching model.
        Modern operating systems generally schedule individual threads
        for CPU execution. We will first learn the traditional process
        lifecycle, then connect it to the process-and-thread relationship.
    </div>

    <!-- BLOCK 7.1 — INTRODUCTION -->

    <h3>7.1 Understanding the Process Lifecycle</h3>

    <p>
        The <strong>process lifecycle</strong> describes the stages
        a process passes through while it exists in an operating system.
        A process may be newly created, ready to execute, running,
        waiting for an event, or terminated.
    </p>

    <p>
        Imagine opening a web browser. The operating system must
        create the necessary process or processes, prepare their
        execution environments, manage their access to CPU time,
        handle waiting periods, and eventually clean up when they end.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">LIFECYCLE OVERVIEW</span>
            <h4>One process, several stages</h4>
        </div>
        <div class="s7-lifecycle-track">
            <div class="s7-state s7-new">
                <span class="s7-state-icon">01</span>
                <strong>New</strong>
                <small>Being created</small>
            </div>
            <div class="s7-state s7-ready">
                <span class="s7-state-icon">02</span>
                <strong>Ready</strong>
                <small>CPU time needed</small>
            </div>
            <div class="s7-state s7-running">
                <span class="s7-state-icon">03</span>
                <strong>Running</strong>
                <small>Executing</small>
            </div>
            <div class="s7-state s7-waiting">
                <span class="s7-state-icon">04</span>
                <strong>Waiting</strong>
                <small>Event needed</small>
            </div>
            <div class="s7-state s7-terminated">
                <span class="s7-state-icon">05</span>
                <strong>Terminated</strong>
                <small>Execution ended</small>
            </div>
        </div>
        <p class="s7-caption">
            Simplified overview. A process may move between Ready,
            Running and Waiting more than once before termination.
        </p>
    </div>

    <div class="s7-callout s7-callout-info">
        <strong>Important idea</strong>
        A process changes its state as different events occur.
        The operating system manages these changes and determines
        when its executable threads can receive CPU time.
    </div>

    <!-- BLOCK 7.2 — FIVE STATES -->

    <h3>7.2 The Five Basic States of a Process</h3>

    <p>
        A commonly taught operating-system model describes a process
        using five basic states.
    </p>

    <div class="s7-state-grid">
        <div class="s7-state-card s7-new-card">
            <span class="s7-state-label">STATE 01</span>
            <h4>New</h4>
            <p>The operating system is creating the process and preparing its management information and resources.</p>
        </div>
        <div class="s7-state-card s7-ready-card">
            <span class="s7-state-label">STATE 02</span>
            <h4>Ready</h4>
            <p>The process is prepared to execute. In the simplified model, it is waiting for CPU time.</p>
        </div>
        <div class="s7-state-card s7-running-card">
            <span class="s7-state-label">STATE 03</span>
            <h4>Running</h4>
            <p>The process is actively executing instructions on a CPU.</p>
        </div>
        <div class="s7-state-card s7-waiting-card">
            <span class="s7-state-label">STATE 04</span>
            <h4>Waiting / Blocked</h4>
            <p>The process is waiting for an event or operation to complete.</p>
        </div>
        <div class="s7-state-card s7-terminated-card">
            <span class="s7-state-label">STATE 05</span>
            <h4>Terminated</h4>
            <p>The process has finished or has been stopped.</p>
        </div>
    </div>

    <div class="s7-callout s7-callout-warning">
        <strong>Remember the difference</strong>
        Ready means able to execute but waiting for CPU time.
        Waiting means unable to continue until a required event
        or operation is completed.
    </div>

    <p>
        These five states provide a useful way to understand process
        behaviour. Real operating systems may track more detailed
        states, and individual threads may have their own execution states.
    </p>

    <!-- BLOCK 7.3 — PROCESS CREATION -->

    <h3>7.3 Stage 1: Process Creation</h3>

    <p>
        A process begins its lifetime when the operating system
        creates it. This may happen because a user opens an application,
        the operating system starts a service, or another process
        requests a new process.
    </p>

    <p>
        For example, when you open a web browser, the operating system
        receives a request to start the application.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">PROCESS CREATION</span>
            <h4>From application request to prepared process</h4>
        </div>
        <div class="s7-vertical-flow">
            <div class="s7-flow-step">
                <span class="s7-flow-icon">01</span>
                <div><strong>User or system request</strong><small>An application needs to start.</small></div>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-flow-step">
                <span class="s7-flow-icon">02</span>
                <div><strong>Operating system setup</strong><small>The OS establishes the execution environment.</small></div>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-flow-step">
                <span class="s7-flow-icon">03</span>
                <div><strong>Process identity and resources</strong><small>A PID and required management information are established.</small></div>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-flow-step s7-flow-success">
                <span class="s7-flow-icon">04</span>
                <div><strong>Prepared for execution</strong><small>Runnable work can become eligible for scheduling.</small></div>
            </div>
        </div>
    </div>

    <p>
        During process creation, the operating system performs
        the necessary setup. Depending on the operating system
        and application, this may include:
    </p>

    <ul>
        <li>Establishing the process's execution environment.</li>
        <li>Setting up its virtual address space.</li>
        <li>Creating process-management information.</li>
        <li>Assigning a process identifier (PID).</li>
        <li>Preparing required resources and execution threads.</li>
    </ul>

    <p>
        Once the required preparation has been completed, the process
        may become Ready and its runnable threads can be considered
        for CPU scheduling.
    </p>

    <div class="s7-callout s7-callout-info">
        <strong>Key point</strong>
        A program stored on a storage device is not automatically
        a running process. The operating system must create a process
        and prepare its execution environment before its instructions
        can execute.
    </div>

    <!-- BLOCK 7.4 — READY STATE -->

    <h3>7.4 Stage 2: Entering the Ready State</h3>

    <p>
        In the simplified five-state model, a Ready process is prepared
        to execute but is waiting for CPU time. It is not currently
        executing on the CPU.
    </p>

    <p>
        The operating system keeps track of work that is ready to run.
        Traditionally, this is explained using a <strong>ready queue</strong>.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">READY QUEUE</span>
            <h4>Runnable work waiting for CPU time</h4>
        </div>
        <div class="s7-queue">
            <div class="s7-queue-item"><span>A</span><div><strong>Browser thread</strong><small>Ready to execute</small></div><b>01</b></div>
            <div class="s7-queue-item"><span>B</span><div><strong>Music player thread</strong><small>Ready to execute</small></div><b>02</b></div>
            <div class="s7-queue-item"><span>C</span><div><strong>File manager thread</strong><small>Ready to execute</small></div><b>03</b></div>
        </div>
        <div class="s7-queue-output">
            <span>Scheduler selects runnable work</span>
            <span class="s7-queue-arrow">→</span>
            <strong>CPU</strong>
        </div>
        <p class="s7-caption">
            Illustrative queue. Actual scheduling order depends on
            the operating system's scheduling policy.
        </p>
    </div>

    <p>Imagine three applications that have work ready to execute:</p>

    <ul>
        <li>Process A: A web browser.</li>
        <li>Process B: A music player.</li>
        <li>Process C: A file manager.</li>
    </ul>

    <p>
        Their runnable threads may compete for CPU time.
        The scheduler selects which runnable thread should execute next.
    </p>

    <div class="s7-callout s7-callout-info">
        <strong>Important distinction</strong>
        Ready means waiting for CPU execution. It does not mean waiting
        for a disk operation, network response, or user input.
        In modern systems, the ready-to-run scheduling decision
        generally applies to threads.
    </div>

    <!-- BLOCK 7.5 — SCHEDULING AND DISPATCH -->

    <h3>7.5 Stage 3: CPU Scheduling and Dispatch</h3>

    <p>
        When CPU execution time becomes available, the operating system
        must decide which runnable thread should execute next.
    </p>

    <p>
        The <strong>CPU scheduler</strong> makes this selection
        according to the scheduling policy being used.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">TWO DIFFERENT RESPONSIBILITIES</span>
            <h4>Scheduler vs Dispatcher</h4>
        </div>
        <div class="s7-role-grid">
            <div class="s7-role-card s7-scheduler-card">
                <span class="s7-role-icon">01</span>
                <span class="s7-role-action">SELECT</span>
                <h4>CPU Scheduler</h4>
                <p>Chooses which runnable thread should execute next.</p>
                <div class="s7-role-question">"Who should run?"</div>
            </div>
            <div class="s7-role-card s7-dispatcher-card">
                <span class="s7-role-icon">02</span>
                <span class="s7-role-action">TRANSFER</span>
                <h4>Dispatcher</h4>
                <p>Carries out the transfer of CPU control to the selected thread.</p>
                <div class="s7-role-question">"Give it CPU control."</div>
            </div>
        </div>
        <div class="s7-mini-flow">
            <span>Ready threads</span><b>→</b>
            <span>Scheduler selects</span><b>→</b>
            <span>Dispatcher transfers</span><b>→</b>
            <span class="s7-mini-flow-result">CPU executes</span>
        </div>
    </div>

    <p>
        After a runnable thread has been selected, the
        <strong>dispatcher</strong> carries out the steps needed
        to give it control of the CPU. These steps can include
        restoring its execution context and transferring control
        to the appropriate instruction.
    </p>

    <div class="s7-callout s7-callout-info">
        <strong>Remember</strong>
        The scheduler selects. The dispatcher transfers CPU control.
        These are related but different responsibilities.
    </div>

    <p>
        In the traditional five-state process model, the transition
        is represented as Ready to Running. In a modern system,
        the selected thread executes on behalf of its process.
    </p>

  
<!-- BLOCK 7.6 — PROCESS EXECUTION AND CONTEXT SWITCHING -->

<h3>7.6 Stage 4: Process Execution</h3>

<p>
    In the traditional model, a process is described as Running
    when it is executing instructions on a CPU.
    More precisely, a thread belonging to that process is
    executing on the CPU.
</p>

<div class="s7-visual-card">
    <div class="s7-visual-heading">
        <span class="s7-visual-number">INSIDE EXECUTION</span>
        <h4>What happens when a thread runs?</h4>
    </div>

    <div class="s7-execution-flow">
        <div class="s7-execution-source">
            <span class="s7-large-icon">01</span>
            <strong>Program instructions</strong>
            <small>Instructions belonging to the executing thread</small>
        </div>

        <span class="s7-down-arrow">↓</span>

        <div class="s7-execution-cpu">
            <span class="s7-large-icon">02</span>
            <strong>CPU executes instructions</strong>
            <small>Uses active registers and execution context</small>
        </div>

        <span class="s7-down-arrow">↓</span>

        <div class="s7-execution-outcomes">
            <div class="s7-outcome-card">
                <span>03A</span>
                <strong>Memory operations</strong>
                <small>Read or change data</small>
            </div>

            <div class="s7-outcome-card">
                <span>03B</span>
                <strong>I/O requests</strong>
                <small>Storage, network or input</small>
            </div>
        </div>
    </div>

    <p class="s7-caption">
        Simplified teaching flow. Actual instruction execution
        involves CPU architecture, memory systems and operating-system services.
    </p>
</div>

<p>
    During execution, the CPU processes instructions using
    the program's execution environment, memory and current
    execution context.
</p>

<p>The work may include:</p>

<ul>
    <li>Performing calculations.</li>
    <li>Reading or changing data in memory.</li>
    <li>Requesting information from a storage device.</li>
    <li>Communicating over a network.</li>
    <li>Responding to user input.</li>
</ul>

<div class="s7-callout s7-callout-info">
    <strong>Execution is not necessarily continuous</strong>
    Running does not mean a process remains on the CPU continuously
    until it finishes. Its threads may be interrupted, scheduled
    again later, or blocked while waiting for an event.
</div>

<!-- CONTEXT SWITCHING INTERACTIVE SIMULATION -->

<h4>Interactive Simulation: Context Switching</h4>

<p>
    A CPU core executes one thread at a time. When the operating
    system switches the CPU from one thread to another, it must
    preserve the first thread's execution context and restore
    the next thread's saved context.
</p>

<div class="s7-visual-card">

    <div class="s7-visual-heading">
        <span class="s7-visual-number">CONTEXT SWITCH</span>
        <h4>How does the CPU switch from Thread A to Thread B?</h4>
    </div>

    <div class="s7-switch-flow">

        <div class="s7-switch-thread">
            <span class="s7-large-icon">A</span>
            <strong>Thread A</strong>
            <small>Currently executing on the CPU</small>
        </div>

        <span class="s7-down-arrow">↓</span>

        <div class="s7-switch-action">
            <span class="s7-large-icon">01</span>
            <strong>Save Thread A's context</strong>
            <small>
                Preserve its program counter, CPU registers
                and other required execution information.
            </small>
        </div>

        <span class="s7-down-arrow">↓</span>

        <div class="s7-switch-action">
            <span class="s7-large-icon">02</span>
            <strong>Restore Thread B's context</strong>
            <small>
                Load Thread B's previously saved execution
                information so it can continue.
            </small>
        </div>

        <span class="s7-down-arrow">↓</span>

        <div class="s7-switch-thread">
            <span class="s7-large-icon">B</span>
            <strong>Thread B</strong>
            <small>Now executing on the CPU</small>
        </div>

    </div>

    <p class="s7-caption">
        Simplified conceptual model of a context switch.
        The operating system and processor perform additional
        architecture-dependent operations.
    </p>

</div>

<p>
    <strong>Why is this important?</strong>
    Context switching allows the operating system to share CPU
    time between multiple threads. A thread can pause and later
    resume from its saved execution state rather than starting
    again from the beginning.
</p>

    <!-- BLOCK 7.7 — WAITING STATE -->

    <h3>7.7 Stage 5: Entering the Waiting (Blocked) State</h3>

    <p>
        Sometimes a running thread needs something that is not
        immediately available. It may have to wait for an operation
        or event to complete before continuing.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">TWO DIFFERENT KINDS OF WAITING</span>
            <h4>Ready is not the same as Waiting</h4>
        </div>
        <div class="s7-ready-wait-grid">
            <div class="s7-ready-wait-card s7-ready-explainer">
                <span class="s7-condition">READY</span>
                <span class="s7-large-icon">CPU</span>
                <h4>Waiting for CPU time</h4>
                <p>The thread can execute, but the CPU has not been assigned to it yet.</p>
                <strong>Runnable</strong>
            </div>
            <div class="s7-ready-wait-card s7-wait-explainer">
                <span class="s7-condition">WAITING</span>
                <span class="s7-large-icon">⌛</span>
                <h4>Waiting for an event</h4>
                <p>The thread cannot continue until its required operation or event completes.</p>
                <strong>Blocked</strong>
            </div>
        </div>
    </div>

    <p>For example, a thread may need to:</p>

    <ul>
        <li>Read data from a storage device.</li>
        <li>Receive information from a network.</li>
        <li>Wait for a user to press a key.</li>
        <li>Wait for a required event or resource.</li>
    </ul>

    <p>
        While the required operation is pending, the thread cannot
        continue with the instruction that depends on that operation.
        It enters a blocked or waiting state.
    </p>

    <p>
        The operating system can schedule another runnable thread
        instead of leaving the CPU idle.
    </p>

    <div class="s7-callout s7-callout-info">
        <strong>Process and thread connection</strong>
        A process can contain multiple threads. One thread may be
        blocked while another thread belonging to the same process
        remains able to execute. The simple five-state process model
        does not show all these individual thread states.
    </div>

    <!-- BLOCK 7.8 — CONTEXT SWITCHING -->

    <h3>7.8 Stage 6: Context Switching</h3>

    <p>
        A CPU may stop executing one thread and begin executing another.
        This operation is called a <strong>context switch</strong>.
    </p>

    <p>
        Imagine Thread A is executing and the operating system decides
        that Thread B should execute next.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">CONTEXT SWITCH</span>
            <h4>Saving one execution context and restoring another</h4>
        </div>
        <div class="s7-switch-flow">
            <div class="s7-switch-thread s7-thread-a">
                <span>THREAD A</span>
                <strong>Currently executing</strong>
                <small>PC: 120 · R1: 25</small>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-switch-action">
                <strong>Save Thread A's context</strong>
                <small>Preserve its execution information</small>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-switch-action">
                <strong>Restore Thread B's context</strong>
                <small>Load its saved execution information</small>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-switch-thread s7-thread-b">
                <span>THREAD B</span>
                <strong>Now executing</strong>
                <small>PC: 450 · R1: 80</small>
            </div>
        </div>
        <p class="s7-caption">
            Illustrative values only. This example represents a simplified
            switch between two threads.
        </p>
    </div>

    <p>
        The operating system must preserve the execution information
        needed by Thread A so it can resume later. It then restores
        the saved execution context of Thread B.
    </p>

    <p>The simplified steps are:</p>

    <ol>
        <li>Thread A is currently executing.</li>
        <li>The operating system pauses or interrupts its execution.</li>
        <li>The relevant CPU execution context of Thread A is saved.</li>
        <li>The relevant saved context of Thread B is restored.</li>
        <li>Thread B begins or resumes execution.</li>
    </ol>

    <div class="s7-callout s7-callout-warning">
        <strong>Important distinction</strong>
        A context switch is an operating-system operation, not one
        of the five basic process states. A switch may occur between
        threads in the same process or between threads belonging
        to different processes.
    </div>

    <p>
        When a context switch occurs between different processes,
        the operating system may also need to change process-specific
        memory-management context. The exact work depends on the
        operating system and hardware.
    </p>

    <!-- BLOCK 7.9 — RETURNING FROM WAITING -->

    <h3>7.9 Stage 7: Returning from Waiting to Ready</h3>

    <p>
        A blocked thread does not necessarily remain in the Waiting
        state forever. When the event or operation it was waiting
        for is completed, it can become eligible to execute again.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">EVENT COMPLETION</span>
            <h4>How blocked work becomes runnable again</h4>
        </div>
        <div class="s7-resume-flow">
            <div class="s7-resume-state s7-waiting-card">
                <strong>Waiting</strong>
                <small>Waiting for data</small>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-resume-event">
                <strong>Required event completes</strong>
                <small>For example, data arrives from storage</small>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-resume-state s7-ready-card">
                <strong>Ready</strong>
                <small>Eligible for CPU scheduling</small>
            </div>
            <span class="s7-down-arrow">↓</span>
            <div class="s7-resume-state s7-running-card">
                <strong>Running</strong>
                <small>Selected for execution</small>
            </div>
        </div>
    </div>

    <p>The general sequence is:</p>

    <ol>
        <li>The required operation or event is completed.</li>
        <li>The thread leaves the Waiting state.</li>
        <li>The thread becomes Ready.</li>
        <li>The scheduler may select it later.</li>
        <li>The dispatcher gives it CPU control when selected.</li>
    </ol>

    <div class="s7-callout s7-callout-info">
        <strong>Remember</strong>
        Becoming Ready does not mean receiving the CPU immediately.
        The thread must still wait until it is selected for execution.
    </div>

    <!-- BLOCK 7.10 — TERMINATION -->

    <h3>7.10 Stage 8: Process Termination</h3>

    <p>
        A process eventually reaches the end of its lifetime.
        This may happen when it completes its work, when a user
        closes an application, or when the operating system or
        another authorised process stops it.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">PROCESS CLEANUP</span>
            <h4>What happens when a process ends?</h4>
        </div>
        <div class="s7-termination-grid">
            <div><span>01</span><strong>Execution ends</strong><small>Process completes or is stopped</small></div>
            <div><span>02</span><strong>Status recorded</strong><small>Exit information is established</small></div>
            <div><span>03</span><strong>Resources released</strong><small>Memory and other resources are reclaimed</small></div>
            <div><span>04</span><strong>Cleanup completed</strong><small>Management information is cleaned up as appropriate</small></div>
        </div>
        <div class="s7-termination-result">
            <strong>Terminated</strong>
            <small>Process execution has ended</small>
        </div>
    </div>

    <p>
        When a process terminates, the operating system performs
        the necessary cleanup. Depending on the operating system
        and circumstances, this may include:
    </p>

    <ul>
        <li>Recording the process's completion status.</li>
        <li>Releasing resources that are no longer needed.</li>
        <li>Cleaning up process-management information.</li>
        <li>Reclaiming memory and other resources for reuse.</li>
    </ul>

    <p>
        The process then reaches the <strong>Terminated</strong> state.
    </p>

    <div class="s7-callout s7-callout-info">
        <strong>Key point</strong>
        Termination marks the end of the process's execution lifecycle.
        Some operating systems may retain limited termination information
        temporarily while completing cleanup or allowing a parent process
        to collect the exit status.
    </div>

    <!-- BLOCK 7.11 — BROWSER EXAMPLE -->

    <h3>7.11 Putting Everything Together: A Web Browser Example</h3>

    <p>
        Imagine opening a web browser, visiting a website, waiting
        for its content to load, and then closing the browser.
        We can use one simplified process to understand the lifecycle.
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">REAL-WORLD EXAMPLE</span>
            <h4>Following a browser process</h4>
        </div>
        <div class="s7-browser-timeline">
            <div><span>01</span><strong>Open browser</strong><small>Process created</small></div>
            <div><span>02</span><strong>Prepare to run</strong><small>Ready for CPU time</small></div>
            <div><span>03</span><strong>Load instructions</strong><small>Thread executes</small></div>
            <div><span>04</span><strong>Request website</strong><small>May wait for network data</small></div>
            <div><span>05</span><strong>Continue work</strong><small>Ready, then running</small></div>
            <div><span>06</span><strong>Close and finish</strong><small>Process terminates</small></div>
        </div>
    </div>

    <ol>
        <li>
            <strong>New:</strong>
            You open the browser, and the operating system creates
            a process with the required execution environment.
        </li>
        <li>
            <strong>Ready:</strong>
            Its runnable work becomes eligible for CPU scheduling.
        </li>
        <li>
            <strong>Running:</strong>
            A thread belonging to the process executes browser instructions.
        </li>
        <li>
            <strong>Waiting:</strong>
            A thread may block while waiting for a network response
            or another required operation.
        </li>
        <li>
            <strong>Ready again:</strong>
            When the required event completes, the thread can become
            eligible for CPU time again.
        </li>
        <li>
            <strong>Running again:</strong>
            The scheduler may select the thread so it can continue.
        </li>
        <li>
            <strong>Terminated:</strong>
            When the process ends, the operating system performs
            the necessary cleanup.
        </li>
    </ol>

    <div class="s7-callout s7-callout-warning">
        <strong>A note about real browsers</strong>
        Modern browsers commonly use multiple processes and threads
        for different tasks. Closing a browser window does not always
        terminate every browser process immediately. This example
        follows one simplified process to teach the basic lifecycle.
    </div>

    <!-- BLOCK 7.12 — STATE TRANSITIONS -->

    <h3>7.12 Understanding the Main State Transitions</h3>

    <p>
        A process changes states when particular events occur.
        The main transitions in the traditional five-state model are:
    </p>

    <div class="s7-visual-card">
        <div class="s7-visual-heading">
            <span class="s7-visual-number">FIVE-STATE TRANSITION MODEL</span>
            <h4>How the states connect</h4>
        </div>
        <div class="s7-transition-diagram">
            <div class="s7-transition-row">
                <div class="s7-transition-state s7-new">New</div>
                <span class="s7-transition-arrow">→</span>
                <div class="s7-transition-state s7-ready">Ready</div>
                <span class="s7-transition-label">Preparation complete</span>
            </div>
            <div class="s7-transition-row">
                <div class="s7-transition-state s7-ready">Ready</div>
                <span class="s7-transition-arrow">→</span>
                <div class="s7-transition-state s7-running">Running</div>
                <span class="s7-transition-label">Selected and dispatched</span>
            </div>
            <div class="s7-transition-row">
                <div class="s7-transition-state s7-running">Running</div>
                <span class="s7-transition-arrow">→</span>
                <div class="s7-transition-state s7-ready">Ready</div>
                <span class="s7-transition-label">Preemption / time slice ends</span>
            </div>
            <div class="s7-transition-row">
                <div class="s7-transition-state s7-running">Running</div>
                <span class="s7-transition-arrow">→</span>
                <div class="s7-transition-state s7-waiting">Waiting</div>
                <span class="s7-transition-label">Must wait for event</span>
            </div>
            <div class="s7-transition-row">
                <div class="s7-transition-state s7-waiting">Waiting</div>
                <span class="s7-transition-arrow">→</span>
                <div class="s7-transition-state s7-ready">Ready</div>
                <span class="s7-transition-label">Event completed</span>
            </div>
            <div class="s7-transition-row">
                <div class="s7-transition-state s7-running">Running</div>
                <span class="s7-transition-arrow">→</span>
                <div class="s7-transition-state s7-terminated">Terminated</div>
                <span class="s7-transition-label">Execution ends</span>
            </div>
        </div>
        <p class="s7-caption">
            Each row represents one possible transition. The diagram
            is a teaching layout, not a time sequence.
        </p>
    </div>

    <ul>
        <li>
            <strong>New → Ready:</strong>
            The operating system has completed the necessary preparation
            for the process to become eligible for execution.
        </li>
        <li>
            <strong>Ready → Running:</strong>
            The scheduler selects runnable work and the dispatcher
            transfers CPU control to it.
        </li>
        <li>
            <strong>Running → Ready:</strong>
            The executing work is moved off the CPU, for example
            when its time slice expires or it is preempted.
        </li>
        <li>
            <strong>Running → Waiting:</strong>
            The executing thread must wait for an event or operation.
        </li>
        <li>
            <strong>Waiting → Ready:</strong>
            The event or operation the thread was waiting for
            has completed.
        </li>
        <li>
            <strong>Running → Terminated:</strong>
            The process completes or is stopped.
        </li>
    </ul>

    <div class="s7-callout s7-callout-warning">
        <strong>Model limitation</strong>
        These transitions describe the simplified five-state process
        model. Actual operating systems may use additional states,
        and modern scheduling decisions generally apply to threads.
        A process containing multiple threads may therefore have
        a more complex execution situation than this model shows.
    </div>

    <!-- BLOCK 7.13 — SUMMARY -->

    <h3>7.13 Section Summary</h3>

    <p>
        A process moves through a managed lifecycle. The operating
        system creates it, prepares its execution environment,
        manages its runnable work, handles waiting periods,
        and performs cleanup when it terminates.
    </p>

    <div class="s7-summary-strip">
        <div><span>01</span><strong>New</strong></div>
        <div><span>02</span><strong>Ready</strong></div>
        <div><span>03</span><strong>Running</strong></div>
        <div><span>04</span><strong>Waiting</strong></div>
        <div><span>05</span><strong>Terminated</strong></div>
    </div>

    <p>
        CPU scheduling determines which runnable thread should execute.
        Context switching allows the CPU to move between execution
        contexts. When a waiting event completes, a blocked thread
        can become Ready and compete for CPU time again.
    </p>

    <div class="s7-callout s7-callout-success">
        <strong>The big idea</strong>
        The operating system coordinates when work can execute,
        when it must wait, and when its resources can be reclaimed.
    </div>

    <!-- BLOCK 7.14 — LEARNING OUTCOMES -->

    <h3>7.14 What You Should Now Understand</h3>

    <p>After studying this section, you should be able to:</p>

    <div class="s7-outcomes-list">
        <div><span>✓</span> Identify the five basic states in the process lifecycle model.</div>
        <div><span>✓</span> Explain how a process is created.</div>
        <div><span>✓</span> Distinguish between Ready and Waiting.</div>
        <div><span>✓</span> Explain the roles of the CPU scheduler and dispatcher.</div>
        <div><span>✓</span> Describe what happens during execution.</div>
        <div><span>✓</span> Explain why context switching is necessary.</div>
        <div><span>✓</span> Describe how blocked work becomes Ready again.</div>
        <div><span>✓</span> Explain how a process reaches termination.</div>
        <div><span>✓</span> Trace a process through its basic lifecycle.</div>
        <div><span>✓</span> Explain why modern operating systems also track thread states.</div>
    </div>



    <div class="concept-note">
        <p>
            <strong>Key idea:</strong> Context switches allow the OS to pause one
            process (or thread) and resume another, creating the illusion of
            concurrent execution on a single CPU.
        </p>
    </div>

</section>
