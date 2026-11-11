---
content_block_id: IKL-OS-002-CB-04
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-04
section_number: 4
section_title: Beginner Explanation
block_type: html-section
order: 4
---
<section id="beginner-explanation" class="concept-section" aria-labelledby="process-section-4-heading">

    <h2 id="process-section-4-heading">4. Beginner Explanation</h2>

    <!-- BLOCK 4.1: INTRODUCTION -->

    <h3>4.1 What Actually Happens When You Open an Application?</h3>

    <p>
        Imagine tapping the Calculator application on your
        computer or tablet. You expect the Calculator window
        to appear and allow you to perform calculations.
    </p>

    <p>
        Behind that simple action, the operating system
        performs several jobs. It starts the application,
        establishes an environment in which it can operate,
        manages its resources, and coordinates its execution.
    </p>

    <p>
        The operating system represents a running instance
        of the application as a <strong>process</strong>.
    </p>

    <div class="concept-note">
        <h4>The Important Idea</h4>
        <p>
            Opening an application is not simply displaying
            a window. It involves creating or activating
            the work environment that allows the application
            to operate.
        </p>
    </div>


    <!-- BLOCK 4.2: PROCESS CREATION -->

    <h3>4.2 How Does the Operating System Create a Process?</h3>

    <p>
        Let's follow a simplified example of what can happen
        when you request an application to open.
    </p>

    <ol>
        <li>
            <strong>You request an application.</strong>
            <p>
                You tap or click an application icon,
                such as Calculator.
            </p>
        </li>

        <li>
            <strong>The operating system receives the request.</strong>
            <p>
                The operating system handles the request
                and begins the appropriate application-starting
                procedure.
            </p>
        </li>

        <li>
            <strong>The operating system prepares the process.</strong>
            <p>
                It establishes an execution environment,
                creates the necessary management information,
                and arranges the memory and resources needed
                by the application.
            </p>
        </li>

        <li>
            <strong>A thread becomes ready to execute.</strong>
            <p>
                The process contains at least one thread
                of execution. A runnable thread can enter
                the Ready state and wait for an opportunity
                to receive CPU time.
            </p>
        </li>

        <li>
            <strong>A thread receives CPU time.</strong>
            <p>
                The scheduler selects a runnable thread.
                The CPU can then execute the instructions
                belonging to that thread.
            </p>
        </li>
    </ol>

    <div class="concept-note">
        <h4>A Small Technical Detail</h4>
        <p>
            This is a simplified learning sequence.
            Actual application-starting procedures differ
            between operating systems. Some applications
            may reuse an existing process or use additional
            processes internally.
        </p>
    </div>


    <!-- BLOCK 4.3: PROCESS RESOURCES -->

    <h3>4.3 What Does a Process Need to Operate?</h3>

    <p>
        A process needs an environment and access to
        computer resources. The operating system manages
        and coordinates these resources.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>CPU</h4>
            <p>
                Executes instructions belonging to
                the process's runnable threads.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Memory</h4>
            <p>
                Holds program instructions, data,
                and other information needed
                during execution.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Operating-System Information</h4>
            <p>
                Tracks the process's identity,
                resources, address space, and
                management information.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Input and Output</h4>
            <p>
                Allows the application to interact
                with files, devices, and other
                system services.
            </p>
        </div>

    </div>

    <div class="concept-note">
        <h4>Important: Process and Thread Are Different</h4>

        <p>
            A process provides the environment and resources
            in which its threads operate.
        </p>

        <p>
            A process can contain one or more threads.
            Threads are the execution paths whose instructions
            are carried out by the CPU.
        </p>

        <p>
            This means that the CPU scheduler normally
            selects runnable threads, rather than treating
            an entire process as one indivisible unit of execution.
        </p>
    </div>


    <!-- BLOCK 4.4: PROCESS STATES -->

    <h3>4.4 Understanding the Five Basic Process States</h3>

    <p>
        A process does not use the CPU continuously
        from the moment it starts until it finishes.
        During its lifetime, it can move through
        different states.
    </p>

    <p>
        A common introductory operating-systems model
        describes five basic process states.
    </p>

    <ul>
        <li>
            <strong>New:</strong>
            The operating system is creating and
            preparing the process.
        </li>

        <li>
            <strong>Ready:</strong>
            The process has work that can proceed.
            Its runnable thread is waiting for CPU time.
        </li>

        <li>
            <strong>Running:</strong>
            A thread belonging to the process is
            currently executing instructions on a CPU.
        </li>

        <li>
            <strong>Waiting / Blocked:</strong>
            A thread belonging to the process is
            waiting for an event or operation to finish,
            such as an input/output operation.
        </li>

        <li>
            <strong>Terminated:</strong>
            The process has finished execution or
            has been terminated.
        </li>
    </ul>

    <h4>Visualising the Five Basic States</h4>

    <figure class="process-concept-visual">

        <div class="process-visual-scroll"
             role="region"
             aria-label="Scrollable five-state process diagram"
             tabindex="0">

            <svg viewBox="0 0 900 390"
                 width="900"
                 height="390"
                 role="img"
                 aria-labelledby="beginner-states-title beginner-states-desc"
                 xmlns="http://www.w3.org/2000/svg">

                <title id="beginner-states-title">
                    Five basic process states and their transitions
                </title>

                <desc id="beginner-states-desc">
                    New moves to Ready, Ready moves to Running,
                    Running can move to Ready, Waiting or Terminated,
                    and Waiting returns to Ready when its event completes.
                </desc>

                <rect x="25" y="145" width="145" height="65"
                      rx="12" fill="#E0F2FE"
                      stroke="#2563EB" stroke-width="2"/>

                <text x="97" y="184"
                      text-anchor="middle" font-size="19"
                      font-weight="700" fill="#102A43">
                    NEW
                </text>

                <rect x="225" y="145" width="145" height="65"
                      rx="12" fill="#CCFBF1"
                      stroke="#0D9488" stroke-width="2"/>

                <text x="297" y="184"
                      text-anchor="middle" font-size="19"
                      font-weight="700" fill="#102A43">
                    READY
                </text>

                <rect x="425" y="145" width="145" height="65"
                      rx="12" fill="#FEF3C7"
                      stroke="#F59E0B" stroke-width="2"/>

                <text x="497" y="184"
                      text-anchor="middle" font-size="19"
                      font-weight="700" fill="#102A43">
                    RUNNING
                </text>

                <rect x="700" y="55" width="170" height="65"
                      rx="12" fill="#F1F5F9"
                      stroke="#64748B" stroke-width="2"/>

                <text x="785" y="94"
                      text-anchor="middle" font-size="18"
                      font-weight="700" fill="#102A43">
                    TERMINATED
                </text>

                <rect x="425" y="285" width="145" height="65"
                      rx="12" fill="#EDE9FE"
                      stroke="#7C3AED" stroke-width="2"/>

                <text x="497" y="324"
                      text-anchor="middle" font-size="18"
                      font-weight="700" fill="#102A43">
                    WAITING
                </text>

                <path d="M170 177 H215 M205 168 L215 177 L205 186"
                      fill="none" stroke="#2563EB"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <path d="M370 177 H415 M405 168 L415 177 L405 186"
                      fill="none" stroke="#2563EB"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <path d="M570 157 L630 110 H690
                         M680 101 L690 110 L680 119"
                      fill="none" stroke="#64748B"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <path d="M497 210 V275 M488 265 L497 275 L506 265"
                      fill="none" stroke="#7C3AED"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <path d="M425 317 H297 V220
                         M288 230 L297 220 L306 230"
                      fill="none" stroke="#7C3AED"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <path d="M497 145 V35 H297 V135
                         M288 125 L297 135 L306 125"
                      fill="none" stroke="#0D9488"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <text x="195" y="160"
                      text-anchor="middle" font-size="12"
                      fill="#475569">
                    Admitted
                </text>

                <text x="395" y="160"
                      text-anchor="middle" font-size="12"
                      fill="#475569">
                    Selected
                </text>

                <text x="640" y="90"
                      text-anchor="middle" font-size="12"
                      fill="#475569">
                    Finished
                </text>

                <text x="520" y="252"
                      text-anchor="start" font-size="12"
                      fill="#7C3AED">
                    Waits for event
                </text>

                <text x="320" y="340"
                      text-anchor="middle" font-size="12"
                      fill="#7C3AED">
                    Event completes
                </text>

                <text x="395" y="25"
                      text-anchor="middle" font-size="12"
                      fill="#0D9488">
                    CPU time ends
                </text>

            </svg>
        </div>

        <figcaption>
            A simplified five-state process model.
            Arrows show common transitions during a process's lifetime.
        </figcaption>

    </figure>

    <div class="concept-note">
        <h4>Important: This Is an Introductory Model</h4>

        <p>
            The five-state model is a simplified way
            to understand process management.
        </p>

        <p>
            In modern operating systems, individual threads
            can have different execution states. A process
            may contain several threads, and those threads
            do not all have to be in the same state.
        </p>

        <p>
            The detailed state models and scheduling
            mechanisms will be studied later.
        </p>
    </div>


    <!-- BLOCK 4.5: READY VERSUS WAITING -->

    <h3>4.5 Ready Versus Waiting: What Is the Difference?</h3>

    <p>
        Both Ready and Waiting / Blocked mean that
        a thread is not currently executing on the CPU.
        However, the reason for not executing is different.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>Ready</h4>

            <p>
                The thread is able to execute, but
                it is waiting for the scheduler
                to give it CPU time.
            </p>

            <p>
                <strong>Reason:</strong> CPU time is not
                currently available to that thread.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Waiting / Blocked</h4>

            <p>
                The thread cannot continue until
                a particular event or operation
                has completed.
            </p>

            <p>
                <strong>Reason:</strong> It is waiting
                for something such as input/output.
            </p>
        </div>

    </div>

    <div class="concept-note">
        <h4>Think About Two Different Situations</h4>

        <p>
            <strong>Situation A:</strong>
            A thread is ready to execute, but another
            thread is currently using the CPU.
        </p>

        <p>
            This thread is <strong>Ready</strong>.
        </p>

        <p>
            <strong>Situation B:</strong>
            A thread requests information from a file
            and must wait until the operation completes.
        </p>

        <p>
            This thread is <strong>Waiting / Blocked</strong>.
        </p>

        <p>
            Remember: Ready means waiting for CPU time.
            Waiting / Blocked means waiting for an event.
        </p>
    </div>


    <!-- BLOCK 4.6: MULTIPLE PROCESSES AND CPU CORES -->

    <h3>4.6 How Can a Computer Run Multiple Processes?</h3>

    <p>
        Imagine opening a web browser, playing music,
        and downloading a file at the same time.
    </p>

    <p>
        These activities may involve several processes
        and threads. The operating system coordinates
        their execution and resource use.
    </p>

    <h4>One CPU Core</h4>

    <p>
        On a simplified single-core system, one thread
        executes on that core at a time. The operating
        system can rapidly switch between runnable
        threads, allowing different activities to make
        progress.
    </p>

    <h4>Multiple CPU Cores</h4>

    <p>
        A multicore processor has more than one CPU core.
        Different cores can execute different threads
        at the same time.
    </p>

    <figure class="process-concept-visual">

        <div class="process-visual-scroll"
             role="region"
             aria-label="Scrollable single-core and multicore comparison"
             tabindex="0">

            <svg viewBox="0 0 900 340"
                 width="900"
                 height="340"
                 role="img"
                 aria-labelledby="core-comparison-title core-comparison-desc"
                 xmlns="http://www.w3.org/2000/svg">

                <title id="core-comparison-title">
                    Single-core and multicore thread execution
                </title>

                <desc id="core-comparison-desc">
                    A single CPU core alternates between Thread A
                    and Thread B. Two CPU cores can execute
                    different threads simultaneously.
                </desc>

                <rect x="20" y="20" width="400" height="295"
                      rx="14" fill="#F8FAFC"
                      stroke="#E2E8F0" stroke-width="2"/>

                <text x="220" y="55"
                      text-anchor="middle" font-size="21"
                      font-weight="700" fill="#102A43">
                    SINGLE CORE
                </text>

                <text x="220" y="82"
                      text-anchor="middle" font-size="14"
                      fill="#475569">
                    One thread at a time
                </text>

                <rect x="55" y="120" width="310" height="65"
                      rx="10" fill="#E0F2FE"
                      stroke="#2563EB" stroke-width="2"/>

                <text x="210" y="148"
                      text-anchor="middle" font-size="16"
                      font-weight="700" fill="#102A43">
                    Thread A
                </text>

                <text x="210" y="169"
                      text-anchor="middle" font-size="13"
                      fill="#475569">
                    Executes
                </text>

                <rect x="55" y="205" width="310" height="65"
                      rx="10" fill="#CCFBF1"
                      stroke="#0D9488" stroke-width="2"/>

                <text x="210" y="233"
                      text-anchor="middle" font-size="16"
                      font-weight="700" fill="#102A43">
                    Thread B
                </text>

                <text x="210" y="254"
                      text-anchor="middle" font-size="13"
                      fill="#475569">
                    Executes later
                </text>

                <text x="220" y="296"
                      text-anchor="middle" font-size="12"
                      fill="#475569">
                    Rapid switching allows both to progress
                </text>

                <rect x="480" y="20" width="400" height="295"
                      rx="14" fill="#F8FAFC"
                      stroke="#E2E8F0" stroke-width="2"/>

                <text x="680" y="55"
                      text-anchor="middle" font-size="21"
                      font-weight="700" fill="#102A43">
                    MULTIPLE CORES
                </text>

                <text x="680" y="82"
                      text-anchor="middle" font-size="14"
                      fill="#475569">
                    Different threads at the same time
                </text>

                <rect x="515" y="120" width="330" height="65"
                      rx="10" fill="#E0F2FE"
                      stroke="#2563EB" stroke-width="2"/>

                <text x="680" y="148"
                      text-anchor="middle" font-size="16"
                      font-weight="700" fill="#102A43">
                    CPU Core 1
                </text>

                <text x="680" y="169"
                      text-anchor="middle" font-size="13"
                      fill="#475569">
                    Executes Thread A
                </text>

                <rect x="515" y="205" width="330" height="65"
                      rx="10" fill="#CCFBF1"
                      stroke="#0D9488" stroke-width="2"/>

                <text x="680" y="233"
                      text-anchor="middle" font-size="16"
                      font-weight="700" fill="#102A43">
                    CPU Core 2
                </text>

                <text x="680" y="254"
                      text-anchor="middle" font-size="13"
                      fill="#475569">
                    Executes Thread B
                </text>

                <text x="680" y="296"
                      text-anchor="middle" font-size="12"
                      fill="#475569">
                    Both cores can work simultaneously
                </text>

            </svg>
        </div>

        <figcaption>
            A simplified comparison of thread execution
            on one CPU core and multiple CPU cores.
        </figcaption>

    </figure>

    <div class="concept-note">
        <h4>Two Important Ideas</h4>

        <p>
            <strong>Concurrency:</strong>
            Multiple activities make progress over time,
            often by taking turns using the CPU.
        </p>

        <p>
            <strong>Parallelism:</strong>
            Multiple threads actually execute at the
            same time on different processing cores.
        </p>
    </div>


    <!-- BLOCK 4.7: CONTEXT SWITCHING -->

    <h3>4.7 What Happens When the CPU Switches Between Threads?</h3>

    <p>
        A CPU does not have to execute one thread
        until its entire process finishes before
        allowing another thread to run.
    </p>

    <p>
        The operating system can arrange for one
        running thread to stop using a CPU core
        and another runnable thread to take its place.
    </p>

    <p>
        This change of execution is called a
        <strong>context switch</strong>.
    </p>

    <h4>How Does a Context Switch Work?</h4>

    <ol>
        <li>
            <strong>One thread is running.</strong>
            <p>
                The CPU is executing instructions
                belonging to Thread A.
            </p>
        </li>

        <li>
            <strong>Its execution context is saved.</strong>
            <p>
                The necessary processor state is saved
                so that Thread A can continue correctly
                when it runs again.
            </p>
        </li>

        <li>
            <strong>Another thread is selected.</strong>
            <p>
                The scheduler selects another runnable
                thread, such as Thread B.
            </p>
        </li>

        <li>
            <strong>The saved context is restored.</strong>
            <p>
                The processor is prepared to continue
                executing Thread B from its saved
                execution context.
            </p>
        </li>
    </ol>

    <figure class="process-concept-visual">

        <div class="process-visual-scroll"
             role="region"
             aria-label="Scrollable context-switch sequence diagram"
             tabindex="0">

            <svg viewBox="0 0 900 260"
                 width="900"
                 height="260"
                 role="img"
                 aria-labelledby="context-switch-title context-switch-desc"
                 xmlns="http://www.w3.org/2000/svg">

                <title id="context-switch-title">
                    Simplified thread context-switch sequence
                </title>

                <desc id="context-switch-desc">
                    Thread A runs, its execution context is saved,
                    Thread B is selected, and Thread B's saved
                    execution context is restored.
                </desc>

                <rect x="20" y="55" width="185" height="115"
                      rx="12" fill="#E0F2FE"
                      stroke="#2563EB" stroke-width="2"/>

                <text x="112" y="92"
                      text-anchor="middle" font-size="18"
                      font-weight="700" fill="#102A43">
                    THREAD A
                </text>

                <text x="112" y="122"
                      text-anchor="middle" font-size="14"
                      fill="#475569">
                    Running
                </text>

                <rect x="245" y="55" width="185" height="115"
                      rx="12" fill="#FEF3C7"
                      stroke="#F59E0B" stroke-width="2"/>

                <text x="337" y="92"
                      text-anchor="middle" font-size="17"
                      font-weight="700" fill="#102A43">
                    SAVE
                </text>

                <text x="337" y="122"
                      text-anchor="middle" font-size="14"
                      fill="#475569">
                    Thread A context
                </text>

                <rect x="470" y="55" width="185" height="115"
                      rx="12" fill="#EDE9FE"
                      stroke="#7C3AED" stroke-width="2"/>

                <text x="562" y="92"
                      text-anchor="middle" font-size="17"
                      font-weight="700" fill="#102A43">
                    SELECT
                </text>

                <text x="562" y="122"
                      text-anchor="middle" font-size="14"
                      fill="#475569">
                    Thread B
                </text>

                <rect x="695" y="55" width="185" height="115"
                      rx="12" fill="#CCFBF1"
                      stroke="#0D9488" stroke-width="2"/>

                <text x="787" y="92"
                      text-anchor="middle" font-size="17"
                      font-weight="700" fill="#102A43">
                    RESTORE
                </text>

                <text x="787" y="122"
                      text-anchor="middle" font-size="14"
                      fill="#475569">
                    Thread B context
                </text>

                <path d="M205 112 H235 M225 103 L235 112 L225 121"
                      fill="none" stroke="#475569"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <path d="M430 112 H460 M450 103 L460 112 L450 121"
                      fill="none" stroke="#475569"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <path d="M655 112 H685 M675 103 L685 112 L675 121"
                      fill="none" stroke="#475569"
                      stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <text x="450" y="215"
                      text-anchor="middle" font-size="14"
                      fill="#475569">
                    The CPU can now continue with Thread B
                </text>

            </svg>
        </div>

        <figcaption>
            A simplified view of saving one thread's execution
            context and restoring another thread's context.
        </figcaption>

    </figure>

    <div class="concept-note">
        <h4>Important: A Context Switch Is Not Always a Process Switch</h4>

        <p>
            A context switch can happen between threads
            belonging to different processes.
        </p>

        <p>
            It can also happen between two threads
            belonging to the same process.
        </p>

        <p>
            The saved execution context belongs to the
            thread being switched out. It can include
            information such as the program counter
            and processor register values.
        </p>
    </div>


    <!-- BLOCK 4.8: PROCESS TERMINATION -->

    <h3>4.8 What Happens When a Process Finishes?</h3>

    <p>
        A process may finish because it has completed
        its work. It may also be stopped or terminated
        by the operating system or another authorised
        part of the system.
    </p>

    <p>
        After termination, the operating system performs
        the necessary cleanup.
    </p>

    <ul>
        <li>
            Records that the process has terminated.
        </li>

        <li>
            Releases memory and other resources
            that are no longer needed.
        </li>

        <li>
            Closes or cleans up associated resources
            as appropriate.
        </li>

        <li>
            Updates process-management information.
        </li>
    </ul>

    <div class="concept-note">
        <h4>Beginner Summary</h4>

        <p>
            A process is an executing instance of a program
            managed by the operating system.
        </p>

        <p>
            The operating system coordinates its resources,
            manages its execution, and handles its termination.
        </p>

        <p>
            During its lifetime, its threads may be ready,
            running, or waiting. The scheduler coordinates
            CPU access, and context switching allows
            different threads to take turns executing.
        </p>
    </div>


    <!-- BLOCK 4.9: SECTION LEARNING OUTCOME -->

    <h3>4.9 What You Should Understand</h3>

    <p>
        After studying this section, you should be able to:
    </p>

    <ul>
        <li>
            Explain what happens when an application is opened.
        </li>

        <li>
            Describe, at a beginner level, how an operating
            system prepares and manages a process.
        </li>

        <li>
            Identify the main resources a process needs.
        </li>

        <li>
            Explain the five basic process states.
        </li>

        <li>
            Distinguish Ready from Waiting / Blocked.
        </li>

        <li>
            Explain the difference between single-core
            and multicore execution.
        </li>

        <li>
            Describe the basic purpose of a context switch.
        </li>

        <li>
            Explain what happens when a process terminates.
        </li>
    </ul>

</section>
