---
content_block_id: IKL-OS-002-CB-06
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-06
section_number: 6
section_title: Components and Architecture
block_type: html-section
order: 6
---

<section id="components-architecture"
         class="concept-section"
         aria-labelledby="components-architecture-heading">

    <span id="ikl-learn-how-it-works"
          class="ikl-learning-anchor"
          aria-hidden="true"></span>

    <h2 id="components-architecture-heading">
        6. Components and Architecture
    </h2>

    <!-- BLOCK 6.1: SECTION INTRODUCTION -->

    <p>
        A process is more than a program running on a computer.
        The operating system must maintain information about it
        so that it can identify the process, manage its execution,
        and coordinate its use of resources.
    </p>

    <p>
        In this section, we will explore the main information
        associated with a process, how its threads work, and
        how the operating system manages them.
    </p>

    <div class="concept-note">
        <h4>Central Concept: Process Control Block (PCB)</h4>
        <p>
            A <strong>Process Control Block (PCB)</strong> is a
            conceptual operating-system data structure containing
            information used to manage a particular process.
        </p>
        <p>
            Think of it as the operating system's management
            record for that process. In real operating systems,
            this information may be distributed across several
            related kernel data structures.
        </p>
    </div>

    <!-- BLOCK 6.2: WHY PROCESS MANAGEMENT INFORMATION IS NEEDED -->

    <h3>6.1 Why Does the Operating System Need Process Information?</h3>

    <p>
        Imagine a computer running a web browser, a music player,
        and a file manager at the same time.
    </p>

    <p>
        The operating system must distinguish these processes
        and keep track of their execution, CPU requirements,
        memory information, and associated resources.
    </p>

    <p>
        Without this management information, the operating system
        would have difficulty coordinating the execution of
        different programs.
    </p>

    <h4>Process-management information helps the operating system:</h4>

    <ul>
        <li>Identify individual processes.</li>
        <li>Track their current states.</li>
        <li>Preserve execution information.</li>
        <li>Manage CPU scheduling.</li>
        <li>Keep track of memory-management information.</li>
        <li>Coordinate input/output and other resources.</li>
    </ul>

    <!-- BLOCK 6.3: INTERACTIVE COMPONENT EXPLORER -->

    <h3>6.2 Explore the Information Associated with a Process</h3>

    <p>
        The following interactive explorer introduces seven
        learning categories of process-management information.
    </p>

    <p>
        Select a component to learn what it represents and
        how the operating system uses it.
    </p>

    <div class="concept-note">
        <h4>Important Technical Note</h4>
        <p>
            These seven categories are an educational way of
            organising the subject. They do not represent a
            universal physical layout inside every operating
            system's PCB.
        </p>
        <p>
            Some information is associated with the process,
            while other information is maintained separately
            for individual threads or in related kernel structures.
        </p>
    </div>

    <!-- BLOCK 6.3.1: COMPONENT SELECTION CONTROLS -->

    <div id="process-component-explorer"
         class="component-explorer"
         aria-label="Interactive Process Control Block component explorer">

        <div class="component-explorer-controls">

            <button type="button"
                    class="component-explorer-button is-selected"
                    data-component-key="pid"
                    aria-pressed="true">
                01. Process ID (PID)
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="state"
                    aria-pressed="false">
                02. Process State
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="program-counter"
                    aria-pressed="false">
                03. Program Counter
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="cpu-registers"
                    aria-pressed="false">
                04. CPU Registers
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="scheduling"
                    aria-pressed="false">
                05. Scheduling Information
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="memory"
                    aria-pressed="false">
                06. Memory Management
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="io-accounting"
                    aria-pressed="false">
                07. I/O and Accounting
            </button>

        </div>

        <!-- BLOCK 6.3.2: COMPONENT INFORMATION DISPLAY -->

        <div class="component-explorer-display"
             aria-live="polite">

            <p data-explorer-label
               class="component-explorer-label">
                Component 01
            </p>

            <h3 data-explorer-title>
                Process ID (PID)
            </h3>

            <p data-explorer-description>
                The Process ID is a number the operating system
                uses to identify a particular process.
            </p>

            <div data-explorer-details
                 class="component-explorer-details">

                <ul>
                    <li>Each active process has an identifier.</li>
                    <li>The operating system uses the PID to distinguish processes.</li>
                    <li>System tools can display a process using its PID.</li>
                    <li>A PID may be reused after a process terminates.</li>
                </ul>

            </div>

            <p data-explorer-status
               class="component-explorer-status"
               role="status">
                Process ID (PID) selected.
            </p>

        </div>

    </div>

    <!-- BLOCK 6.4: PROCESS AND THREAD RELATIONSHIP -->

    <h3>6.3 How Are Processes and Threads Related?</h3>

    <p>
        A process provides the environment and resources in
        which its threads operate. A thread is an individual
        path of execution within a process.
    </p>

    <p>
        A process can contain one thread or multiple threads.
        When multiple threads belong to the same process,
        they generally share the process's address space
        and many process-level resources.
    </p>

    <p>
        However, each thread has its own execution context.
        This includes its own program counter, saved CPU
        register values, and stack.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>Process-level resources</h4>
            <ul>
                <li>Process identity</li>
                <li>Address space</li>
                <li>Code and data</li>
                <li>Open files and resources</li>
            </ul>
        </div>

        <div class="comparison-item">
            <h4>Thread-level information</h4>
            <ul>
                <li>Thread identity</li>
                <li>Program counter</li>
                <li>Saved CPU register values</li>
                <li>Separate execution stack</li>
            </ul>
        </div>

    </div>

    <div class="concept-note">
        <h4>Important: The CPU Schedules Threads</h4>
        <p>
            Modern operating systems generally schedule
            individual threads for execution. A process
            provides the environment in which those
            threads operate.
        </p>
    </div>

    <!-- BLOCK 6.5: INTERACTIVE THREAD SIMULATION -->

    <h3>6.4 Interactive Simulation: Two Threads, One Process</h3>

    <p>
        Let's see how two threads can belong to one process
        while maintaining separate execution contexts.
    </p>

    <p>
        Imagine one process containing two threads:
        <strong>Thread A</strong> and <strong>Thread B</strong>.
        Both share the same process address space, but each
        has its own saved program counter and register value.
    </p>

    <div id="thread-simulation"
         class="concept-note"
         aria-label="Two threads, one process interactive simulation">

        <h4>Simulation: Process 2048</h4>

        <p>
            This simplified model uses one simulated CPU.
            Initially, Thread A is running and Thread B is ready.
        </p>

        <!-- PROCESS IDENTITY -->

        <div class="concept-identity-card">

            <p><strong>Process ID:</strong> 2048</p>

            <p><strong>Shared process address space:</strong>
                <span>Shared by Thread A and Thread B</span>
            </p>

        </div>

        <!-- THREAD STATUS -->

        <div class="concept-comparison">

            <div class="comparison-item"
                 id="thread-a-panel">

                <h4>Thread A</h4>

                <p>
                    <strong>Thread state:</strong>
                    <span id="thread-a-state">Running</span>
                </p>

                <p>
                    <strong>Saved program counter:</strong>
                    <output id="thread-a-pc">120</output>
                </p>

                <p>
                    <strong>Saved register R1:</strong>
                    <output id="thread-a-register">25</output>
                </p>

            </div>

            <div class="comparison-item"
                 id="thread-b-panel">

                <h4>Thread B</h4>

                <p>
                    <strong>Thread state:</strong>
                    <span id="thread-b-state">Ready</span>
                </p>

                <p>
                    <strong>Saved program counter:</strong>
                    <output id="thread-b-pc">450</output>
                </p>

                <p>
                    <strong>Saved register R1:</strong>
                    <output id="thread-b-register">80</output>
                </p>

            </div>

        </div>

        <!-- SIMULATED CPU -->

        <div class="concept-comparison">

            <div class="comparison-item">

                <h4>One Simulated CPU</h4>

                <p>
                    <strong>Currently running:</strong>
                    <output id="cpu-running-thread">Thread A</output>
                </p>

                <p>
                    <strong>Active program counter:</strong>
                    <output id="cpu-active-pc">120</output>
                </p>

                <p>
                    <strong>Active register R1:</strong>
                    <output id="cpu-active-register">25</output>
                </p>

            </div>

        </div>

        <!-- LEARNER CONTROLS -->

        <h4>Try the Simulation</h4>

        <p>
            First examine each thread. Then switch the thread
            running on the simulated CPU.
        </p>

        <div class="component-explorer-controls">

            <button type="button"
                    id="examine-thread-a">
                Examine Thread A
            </button>

            <button type="button"
                    id="examine-thread-b">
                Examine Thread B
            </button>

            <button type="button"
                    id="switch-thread">
                Switch Thread
            </button>

            <button type="button"
                    id="reset-thread-simulation">
                Reset Simulation
            </button>

        </div>

        <!-- LEARNER FEEDBACK -->

        <p id="thread-simulation-message"
           role="status"
           aria-live="polite">
            Thread A is currently running. Thread B is ready.
            Both threads share Process 2048's address space.
        </p>

        <div class="concept-note">

            <h4>What Happens During a Thread Switch?</h4>

            <ol>
                <li>
                    The operating system saves the outgoing
                    thread's execution context.
                </li>
                <li>
                    It restores the incoming thread's saved
                    execution context.
                </li>
                <li>
                    The incoming thread continues from its
                    own saved execution point.
                </li>
            </ol>

            <p>
                Notice that the process address space remains
                shared. Switching threads does not create
                a new process.
            </p>

        </div>

        <div class="concept-note">

            <h4>What This Simulation Simplifies</h4>

            <p>
                This is a teaching model of two runnable threads
                sharing one simulated CPU. It does not model
                real-time scheduling, interrupts, blocking,
                memory writes, or multiple CPU cores.
            </p>

            <p>
                The active CPU register values are shown
                separately from each thread's saved values.
                This distinction helps explain how a thread's
                execution context can be saved and restored.
            </p>

        </div>

    </div>

    <!-- BLOCK 6.6: HOW THE INFORMATION WORKS TOGETHER -->

    <h3>6.5 How Do These Components Work Together?</h3>

    <p>
        The operating system uses different kinds of information
        together to manage processes and their threads.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>Identity and State</h4>
            <p>
                The PID identifies a process. Its state describes
                its current execution situation. Individual
                threads also have their own identifiers and states.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Execution Context</h4>
            <p>
                Each thread has its own execution context,
                including a program counter and saved
                processor register values.
            </p>
        </div>

        <div class="comparison-item">
            <h4>CPU Scheduling</h4>
            <p>
                Scheduling information helps the operating
                system decide which eligible thread should
                receive CPU time.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Memory Management</h4>
            <p>
                Memory-management structures help manage
                the process address space, memory mappings,
                and protection.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Input/Output and Accounting</h4>
            <p>
                These records help track associated resources,
                input/output activity, and resource usage.
            </p>
        </div>

    </div>

    <!-- BLOCK 6.7: PCB VERSUS PROCESS MEMORY -->

    <h3>6.6 Is the PCB the Same as the Process's Memory?</h3>

    <p>
        No. The PCB, the process address space, and the CPU
        are three different things.
    </p>

    <ul>

        <li>
            <strong>PCB:</strong>
            A conceptual representation of operating-system
            management information about a process.
        </li>

        <li>
            <strong>Process address space:</strong>
            The organised virtual memory space associated
            with a process.
        </li>

        <li>
            <strong>CPU registers:</strong>
            Hardware storage locations inside the processor.
        </li>

        <li>
            <strong>Saved thread context:</strong>
            Information preserved so an individual thread
            can resume execution later.
        </li>

    </ul>

    <div class="concept-note">

        <h4>Important Technical Distinction</h4>

        <p>
            The PCB is not the process's entire memory,
            and it is not the CPU itself.
        </p>

        <p>
            Some process-management information may refer
            to other structures or resources. This does
            not mean that all those structures are
            physically stored inside one PCB.
        </p>

        <p>
            Similarly, scheduling and execution-context
            information is often maintained at the
            individual thread level.
        </p>

    </div>

    <!-- BLOCK 6.8: SECTION SUMMARY -->

    <h3>6.7 Section Summary</h3>

    <p>
        The operating system maintains information about
        processes and their threads so that it can identify
        them, manage their execution, and coordinate their
        use of computer resources.
    </p>

    <p>
        The Process Control Block is a useful conceptual
        model for understanding process-management
        information. Threads belonging to the same process
        generally share its address space, while maintaining
        separate execution contexts.
    </p>

    <!-- BLOCK 6.9: LEARNING OUTCOMES -->

    <div class="concept-note">

        <h4>What You Should Understand</h4>

        <ul>
            <li>What a Process Control Block represents.</li>
            <li>Why the operating system maintains process information.</li>
            <li>The purpose of the seven process-management categories.</li>
            <li>The difference between process-level and thread-level information.</li>
            <li>How threads share a process address space.</li>
            <li>Why each thread needs its own execution context.</li>
            <li>What happens during a thread context switch.</li>
            <li>The difference between a PCB and a process address space.</li>
        </ul>

    </div>

</section>

<!-- ================================================== -->
<!-- END SECTION 6                                     -->
<!-- ================================================== -->
