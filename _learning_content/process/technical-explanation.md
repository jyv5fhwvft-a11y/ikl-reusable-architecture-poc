---
content_block_id: IKL-OS-002-CB-05
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-05
section_number: 5
section_title: Technical Explanation through Quick Revision
block_type: html-section
order: 5
---
<section id="technical-explanation" class="concept-section">

    <!-- BLOCK 5.1: SECTION HEADING -->

    <h2>5. Technical Explanation</h2>

    <!-- BLOCK 5.2: INTRODUCTION -->

    <h3>5.1 What Happens Inside a Process?</h3>

    <p>
        So far, we have understood that a process is
        an executing instance of a program.
        Now let's examine how the operating system
        represents, tracks, and manages that process
        internally.
    </p>

    <p>
        A process is more than the program instructions
        currently being executed. It also has an
        execution state, memory space, resources,
        and management information.
    </p>

    <p>
        The operating system maintains information
        about each process so that it can schedule
        execution, manage resources, and resume
        execution when necessary.
    </p>

    <p>
        A process can contain one or more threads.
        Each thread represents an individual path
        of execution within that process.
    </p>

    <!-- BLOCK 5.3: PROCESS CONTROL BLOCK -->

    <h3>5.2 Process Control Block (PCB)</h3>

    <p>
        A <strong>Process Control Block (PCB)</strong>
        is an operating-system data structure that
        stores important management information
        about a process.
    </p>

    <p>
        Think of the PCB as the operating system's
        management record for a particular process.
        It helps the operating system identify the
        process, track its resources, and manage
        its overall execution.
    </p>

    <p>
        A process may contain one or more threads.
        The operating system therefore needs to
        maintain information about both the process
        and its individual threads.
    </p>

    <p>
        The PCB contains process-level management
        information. Thread-specific information,
        such as the saved program counter and CPU
        register values, is commonly maintained in
        separate thread-management structures or
        related kernel data structures.
    </p>

    <p>
        The exact organisation depends on the
        operating system. Some systems combine
        certain information into larger management
        structures, while others organise it separately.
    </p>

    <div class="concept-note">

        <h4>Important Technical Distinction</h4>

        <p>
            The PCB is not the program itself,
            its memory contents, or the CPU.
        </p>

        <p>
            It is operating-system information
            maintained to manage a process. It may
            also contain references to other structures
            that help the operating system manage
            the process's threads and resources.
        </p>

    </div>

    <!-- BLOCK 5.4: PCB INFORMATION -->

    <h3>5.3 What Information Does a PCB Contain?</h3>

    <p>
        A PCB and its associated operating-system
        management structures can contain several
        categories of information. The following
        are common teaching categories used to
        understand their responsibilities.
    </p>

    <ul>

        <li>
            <strong>Process identification:</strong>
            Information such as the Process ID (PID)
            used to identify the process.
        </li>

        <li>
            <strong>Process state:</strong>
            Information about the process's lifecycle,
            such as whether it is being created,
            executing, waiting, or terminated.
            In multithreaded systems, individual
            threads also have their own scheduling states.
        </li>

        <li>
            <strong>Thread management:</strong>
            Information or references associated
            with the threads belonging to the process.
        </li>

        <li>
            <strong>CPU scheduling information:</strong>
            Information such as scheduling priority
            and relationships with scheduling queues.
            Scheduling information may be maintained
            separately for individual threads.
        </li>

        <li>
            <strong>Memory management information:</strong>
            Information used to manage the process's
            address space, such as page-table references
            or related memory-management data.
        </li>

        <li>
            <strong>Input/output and file information:</strong>
            Information about resources associated
            with the process, such as open files
            and allocated I/O resources.
        </li>

        <li>
            <strong>Accounting information:</strong>
            Information such as CPU time consumed
            and other resource-usage records.
        </li>

    </ul>

    <div class="concept-note">

        <h4>Where Are the Program Counter and CPU Registers Stored?</h4>

        <p>
            The program counter and CPU register values
            are part of a thread's execution context.
        </p>

        <p>
            When a thread is switched out, the operating
            system preserves the necessary processor state
            in thread-specific management information
            or related kernel structures.
        </p>

        <p>
            Some introductory operating-system models
            include these values in the PCB because
            they describe a process's execution.
            However, in modern multithreaded systems,
            treating them as thread-specific is more accurate.
        </p>

        <p>
            The exact organisation differs between
            operating systems.
        </p>

    </div>

    <!-- BLOCK 5.5: PROCESS IDENTIFICATION -->

    <h3>5.4 Process ID (PID)</h3>

    <p>
        A <strong>Process ID (PID)</strong> is a
        numerical identifier assigned to a process
        by the operating system.
    </p>

    <p>
        The operating system uses the PID to
        distinguish one process from another
        while managing running processes.
    </p>

    <p>
        For example, a system may have processes
        running for a web browser, a music player,
        and a file manager. Each process can have
        its own PID.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">

            <h4>Process A</h4>

            <p>
                PID: 1204
            </p>

            <p>
                Example: Web browser process.
            </p>

        </div>

        <div class="comparison-item">

            <h4>Process B</h4>

            <p>
                PID: 2380
            </p>

            <p>
                Example: Music player process.
            </p>

        </div>

        <div class="comparison-item">

            <h4>Process C</h4>

            <p>
                PID: 3516
            </p>

            <p>
                Example: File manager process.
            </p>

        </div>

    </div>

    <div class="concept-note">

        <h4>Remember</h4>

        <p>
            A PID identifies a process. It is not
            the process's memory address, program
            instructions, or execution state.
        </p>

        <p>
            PIDs may be reused by the operating
            system after a process terminates.
        </p>

    </div>

    <!-- BLOCK 5.6: PROGRAM COUNTER -->

    <h3>5.5 Program Counter (PC)</h3>

    <p>
        The <strong>Program Counter (PC)</strong>
        is a processor register that holds the
        address of the next instruction to execute
        for the currently running thread.
    </p>

    <p>
        It helps the processor know where to
        continue executing instructions.
    </p>

    <p>
        Imagine a program containing thousands
        of instructions. A thread executes
        instructions as part of that program's
        execution. Its program counter identifies
        the next instruction address in its
        execution flow.
    </p>

    <p>
        A process can contain multiple threads.
        Each thread has its own program-counter
        value representing its individual
        execution progress.
    </p>

    <p>
        When a thread is interrupted or switched
        out, the operating system preserves its
        program-counter value as part of that
        thread's execution context. When the
        thread runs again, the appropriate value
        is restored so execution can continue.
    </p>

    <div class="concept-note">

        <h4>Bookmark Analogy</h4>

        <p>
            The program counter is similar to a
            bookmark that identifies where you
            should continue reading a book.
        </p>

        <p>
            Imagine three people reading different
            chapters of the same book. Each person
            needs their own bookmark to remember
            where they stopped.
        </p>

        <p>
            Similarly, threads belonging to one
            process can execute different instructions
            and therefore need separate program-counter
            values.
        </p>

        <p>
            The bookmark is only an analogy.
            Technically, the program counter stores
            an instruction address, not a physical
            bookmark or a page number.
        </p>

    </div>

    <!-- BLOCK 5.7: CPU REGISTERS -->

    <h3>5.6 CPU Registers</h3>

    <p>
        <strong>CPU registers</strong> are small,
        high-speed storage locations inside the
        processor. They hold values that the
        processor needs while executing instructions.
    </p>

    <p>
        A thread's execution may depend on
        several register values, including
        data values, addresses, and processor
        status information.
    </p>

    <p>
        Although the processor has a physical
        set of registers, each thread needs its
        own saved register state so that it can
        resume execution correctly.
    </p>

    <p>
        When a thread is running, its current
        values occupy the processor registers.
        During a context switch, the operating
        system preserves the relevant register
        values for the outgoing thread and
        restores the saved values required
        by the incoming thread.
    </p>

    <ul>

        <li>
            <strong>General-purpose registers:</strong>
            Hold temporary data, addresses,
            and intermediate results.
        </li>

        <li>
            <strong>Program counter:</strong>
            Identifies the next instruction address.
        </li>

        <li>
            <strong>Stack pointer:</strong>
            Identifies the current position of
            the thread's active stack.
        </li>

        <li>
            <strong>Processor status information:</strong>
            Records condition and control information
            used by the processor.
        </li>

    </ul>

    <div class="concept-note">

        <h4>Important Distinction</h4>

        <p>
            Threads do not each have a separate
            physical CPU register set.
        </p>

        <p>
            Instead, the processor uses its physical
            registers for whichever thread is
            currently executing. The operating
            system saves and restores the relevant
            values when switching between threads.
        </p>

        <p>
            This is how multiple threads can preserve
            their individual execution progress
            while sharing the processor.
        </p>

    </div>

    <!-- BLOCK 5.8: PROCESS EXECUTION CONTEXT -->

    <h3>5.7 What Is a Process Execution Context?</h3>

    <p>
        An <strong>execution context</strong>
        is the information needed to describe
        the current execution state of a thread
        and allow its execution to continue correctly.
    </p>

    <p>
        For a thread, this includes relevant
        processor state, such as:
    </p>

    <ul>

        <li>Program counter.</li>
        <li>CPU register values.</li>
        <li>Stack pointer.</li>
        <li>Processor status information.</li>

    </ul>

    <p>
        The operating system also maintains
        other information needed to manage
        the thread and its relationship with
        the process.
    </p>

    <p>
        A process can contain multiple threads.
        Each thread has its own execution context,
        while the threads generally share the
        process's address space and other
        process-level resources.
    </p>

    <h4>What Happens During a Context Switch?</h4>

    <p>
        When the operating system switches the
        CPU from one thread to another, it must
        preserve the outgoing thread's necessary
        execution state and restore the incoming
        thread's saved state.
    </p>

    <p>
        This allows the incoming thread to
        continue from its own previous
        execution point.
    </p>

    <p>
        A context switch can happen in two
        important situations:
    </p>

    <ul>

        <li>
            <strong>Between threads of the same process:</strong>
            The CPU switches execution from one
            thread to another, while both threads
            continue using the same process
            address space.
        </li>

        <li>
            <strong>Between threads of different processes:</strong>
            The CPU switches execution to a thread
            belonging to another process. This may
            also involve changing the active
            address space and associated
            memory-management context.
        </li>

    </ul>

    <h4>Why Is Execution Context Important?</h4>

    <ul>

        <li>It allows a thread to resume correctly.</li>
        <li>It preserves individual execution progress.</li>
        <li>It supports switching between threads.</li>
        <li>It allows multiple threads to share CPU time.</li>
        <li>It helps the operating system coordinate processor use.</li>

    </ul>

    <div class="concept-note">

        <h4>Technical Distinction</h4>

        <p>
            A process and a thread are not the
            same thing.
        </p>

        <p>
            The process provides the resource-owning
            environment. The thread provides an
            individual path of execution within
            that environment.
        </p>

        <p>
            The execution context primarily
            describes the thread's current
            processor state, rather than a single
            shared set of CPU register values
            for the entire process.
        </p>

    </div>

    <!-- BLOCK 5.9: PROCESS ADDRESS SPACE -->

    <h3>5.8 Process Address Space</h3>

    <p>
        A process also has an associated
        <strong>address space</strong>.
        This is the range of memory addresses
        that the process can use, subject to
        the operating system's memory protection
        and management rules.
    </p>

    <p>
        In modern operating systems, a process
        commonly uses a virtual address space.
        Virtual addresses are translated by
        the system's memory-management hardware
        and operating-system mechanisms into
        locations in physical memory.
    </p>

    <p>
        This arrangement helps provide memory
        protection and gives each process
        its own organised view of memory.
    </p>

    <p>
        Threads belonging to the same process
        generally share that process's address
        space. This allows them to access shared
        program code and process data.
    </p>

    <div class="concept-note">

        <h4>Important Distinction</h4>

        <p>
            Threads in the same process generally
            share the process's address space,
            but each thread has its own execution
            context and its own stack.
        </p>

        <p>
            Shared memory does not mean that
            every part of a thread's execution
            state is shared with other threads.
        </p>

    </div>

    <!-- BLOCK 5.10: MEMORY REGIONS -->

    <h3>5.9 Common Regions of a Process Address Space</h3>

    <p>
        A typical process address space can
        contain several logical regions.
        Their exact arrangement depends on
        the operating system, architecture,
        and program.
    </p>

    <ul>

        <li>
            <strong>Text / Code segment:</strong>
            Contains the program's executable
            instructions.
        </li>

        <li>
            <strong>Data segment:</strong>
            Contains global and static variables
            that have been initialised.
        </li>

        <li>
            <strong>BSS segment:</strong>
            Contains global and static variables
            that are uninitialised or initially
            zero-initialised.
        </li>

        <li>
            <strong>Heap:</strong>
            Provides memory used for dynamic
            allocation while the program runs.
        </li>

        <li>
            <strong>Stack:</strong>
            Supports function calls, local
            variables, return information,
            and other call-related data.
        </li>

    </ul>

    <!-- ==================================================
         PROCESS MEMORY MAP EXPLORER
         ================================================== -->

    <div class="memory-explorer" data-memory-explorer>

        <div class="memory-explorer-header">

            <h4>Explore the Process Memory Map</h4>

            <p>
                Select a memory region to discover what it
                contains, why it exists, and how it is used
                by a running process.
            </p>

        </div>

        <div class="memory-explorer-layout">

            <!-- MEMORY MAP VISUAL -->

            <div class="memory-map-visual">

                <p class="memory-map-label">
                    Simplified Virtual Address Space
                </p>

                <div class="memory-address-label">
                    Higher Addresses
                </div>

                <div class="memory-region-buttons">

                    <button type="button"
                            class="memory-region-button"
                            data-memory-region="stack"
                            aria-pressed="false">
                        <strong>STACK</strong>
                        <span>Function calls and local data</span>
                    </button>

                    <button type="button"
                            class="memory-region-button"
                            data-memory-region="heap"
                            aria-pressed="false">
                        <strong>HEAP</strong>
                        <span>Dynamic memory allocation</span>
                    </button>

                    <button type="button"
                            class="memory-region-button"
                            data-memory-region="bss"
                            aria-pressed="false">
                        <strong>BSS</strong>
                        <span>Uninitialised global and static data</span>
                    </button>

                    <button type="button"
                            class="memory-region-button"
                            data-memory-region="data"
                            aria-pressed="false">
                        <strong>DATA</strong>
                        <span>Initialised global and static data</span>
                    </button>

                    <button type="button"
                            class="memory-region-button"
                            data-memory-region="code"
                            aria-pressed="true">
                        <strong>CODE / TEXT</strong>
                        <span>Executable program instructions</span>
                    </button>

                </div>

                <div class="memory-address-label">
                    Lower Addresses
                </div>

                <p class="memory-map-disclaimer">
                    Illustrative layout only. Actual virtual
                    address-space arrangements vary by system.
                </p>

            </div>

            <!-- SELECTED REGION EXPLANATION -->

            <div class="memory-region-information"
                 aria-live="polite">

                <p class="memory-selection-label">
                    SELECTED MEMORY REGION
                </p>

                <h4 data-memory-title>
                    Code / Text Segment
                </h4>

                <p data-memory-description>
                    This region contains the executable
                    instructions of a program. The CPU fetches
                    and executes these instructions as the
                    program runs.
                </p>

                <div class="memory-example-panel">

                    <h5>Practical Example</h5>

                    <p data-memory-example>
                        Example: Instructions that tell a
                        program how to calculate a total
                        or display a message.
                    </p>

                </div>

                <div class="memory-technical-panel">

                    <h5>Technical Detail</h5>

                    <p data-memory-technical>
                        The code segment is commonly mapped
                        with read and execute permissions.
                        Its exact arrangement depends on the
                        operating system and executable format.
                    </p>

                </div>

                <!-- THREAD STACK COMPARISON -->

                <div class="memory-thread-panel"
                     data-memory-thread-panel
                     hidden>

                    <h5>Compare Thread Stacks</h5>

                    <p>
                        Both threads belong to the same
                        process, but each normally has
                        its own stack.
                    </p>

                    <div class="memory-thread-buttons">

                        <button type="button"
                                data-memory-thread="a"
                                aria-pressed="true">
                            Thread A
                        </button>

                        <button type="button"
                                data-memory-thread="b"
                                aria-pressed="false">
                            Thread B
                        </button>

                    </div>

                </div>

            </div>

        </div>

        <div class="memory-explorer-takeaway">

            <strong>Key takeaway:</strong>

            A process has an organised virtual address
            space. Its threads generally share that
            address space, but each thread maintains
            its own execution stack.

        </div>

    </div>

    <!-- END PROCESS MEMORY MAP EXPLORER -->

    <div class="concept-note">

        <h4>Important Memory Concept</h4>

        <p>
            The heap and stack are different
            memory regions with different
            purposes.
        </p>

        <p>
            The heap is commonly used for
            dynamically allocated memory.
            The stack supports function-call
            execution and related local data.
        </p>

        <p>
            Each thread generally has its own
            stack, while threads belonging to
            the same process share the process's
            heap and other shared address-space
            regions.
        </p>

        <p>
            These are logical regions of a
            process's address space. They
            should not be confused with separate
            physical memory chips.
        </p>

    </div>

    <!-- BLOCK 5.11: PROCESS MEMORY SUMMARY -->

    <h3>5.10 Understanding the Process Memory Layout</h3>

    <p>
        The following is a simplified conceptual
        view of common regions in a process's
        virtual address space. It is not a
        universal physical memory arrangement.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">

            <h4>Higher Address Region</h4>

            <p>
                Stack
            </p>

            <p>
                Function calls and local data.
            </p>

        </div>

        <div class="comparison-item">

            <h4>Dynamic Memory Region</h4>

            <p>
                Heap
            </p>

            <p>
                Dynamically allocated memory.
            </p>

        </div>

        <div class="comparison-item">

            <h4>Initialised Data Region</h4>

            <p>
                Data
            </p>

            <p>
                Initialised global and static variables.
            </p>

        </div>

        <div class="comparison-item">

            <h4>Uninitialised Data Region</h4>

            <p>
                BSS
            </p>

            <p>
                Uninitialised or zero-initialised
                global and static variables.
            </p>

        </div>

        <div class="comparison-item">

            <h4>Code Region</h4>

            <p>
                Text / Code
            </p>

            <p>
                Executable program instructions.
            </p>

        </div>

    </div>

    <p>
        The arrangement above is a teaching
        representation. Actual address-space
        layouts can differ, and additional
        regions such as shared libraries,
        memory-mapped files, and other mappings
        may also be present.
    </p>

    <!-- BLOCK 5.12: HOW THE PCB AND ADDRESS SPACE RELATE -->

    <h3>5.11 How Do the PCB and Process Memory Work Together?</h3>

    <p>
        The PCB and the process address space
        serve different but related purposes.
    </p>

    <ul>

        <li>
            The PCB contains operating-system
            management information about the process.
        </li>

        <li>
            The process address space provides
            the process with its organised view
            of memory.
        </li>

        <li>
            Memory-management information helps
            the operating system and hardware
            manage and protect that address space.
        </li>

        <li>
            Thread-management information
            preserves the execution state needed
            to resume individual threads.
        </li>

        <li>
            Threads belonging to the same process
            generally share the process's address
            space and process-level resources.
        </li>

    </ul>

    <p>
        Together, these mechanisms allow the
        operating system to manage a process
        and its threads as they execute, wait,
        resume, and eventually terminate.
    </p>

    <div class="concept-note">

        <h4>Technical Summary</h4>

        <p>
            A process is an executing instance
            of a program with an associated
            address space, execution state,
            and operating-system-managed resources.
        </p>

        <p>
            The PCB stores process-level management
            information. The PID identifies the
            process. Each thread has its own
            execution context, including its
            program counter and saved CPU registers.
            The process address space organises
            the memory available to the process
            and is generally shared by its threads.
        </p>

    </div>

    <!-- BLOCK 5.13: SECTION LEARNING OUTCOME -->

    <h3>5.12 What You Should Understand</h3>

    <p>
        By the end of this section, you should
        be able to:
    </p>

    <ul>

        <li>
            Explain the purpose of a Process
            Control Block (PCB).
        </li>

        <li>
            Identify the role of a Process ID (PID).
        </li>

        <li>
            Explain what the program counter
            and CPU registers do.
        </li>

        <li>
            Describe the execution context
            of an individual thread.
        </li>

        <li>
            Explain the relationship between
            a process and its threads.
        </li>

        <li>
            Recognise the common regions of
            a process's virtual address space.
        </li>

        <li>
            Explain how the PCB, thread-management
            information, and process address space
            work together.
        </li>

    </ul>

</section>

<!-- END SECTION 5: TECHNICAL EXPLANATION -->


<section id="components-architecture" class="concept-section">

    <!-- BLOCK 6.1: SECTION INTRODUCTION -->

    <h2>6. Components and Architecture</h2>

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
                Process ID
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="state"
                    aria-pressed="false">
                Process State
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="program-counter"
                    aria-pressed="false">
                Program Counter
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="cpu-registers"
                    aria-pressed="false">
                CPU Registers
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="scheduling"
                    aria-pressed="false">
                Scheduling Information
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="memory"
                    aria-pressed="false">
                Memory Information
            </button>

            <button type="button"
                    class="component-explorer-button"
                    data-component-key="io-accounting"
                    aria-pressed="false">
                I/O and Accounting
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

<section id="working-mechanism" class="concept-section">

    <h2>7. How Does a Process Work? The Complete Working Mechanism</h2>

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

</section>

<!-- END SECTION 7 -->



