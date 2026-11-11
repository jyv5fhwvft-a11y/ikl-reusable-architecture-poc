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

<section id="interactive-simulation"
         class="concept-section"
         aria-labelledby="process-sim-title">

    <h2 id="process-sim-title">
        8. Interactive Simulation: Control a Process
    </h2>

    <p>
        You have learned how a process moves through its five basic
        states. Now it is your turn to act as the operating system
        and control a process through its lifecycle.
    </p>

    <p>
        You will create a process, give it CPU time, manage an
        input/output waiting period, and eventually finish its execution.
    </p>

    <div class="concept-note">
        <h4>Your Mission</h4>
        <p>
            Control Process A — a simulated web browser.
            Choose actions, observe state transitions, and understand
            why the operating system makes each change.
        </p>
    </div>

    <!-- 8.1 INTRODUCTION -->

    <h3>8.1 Meet Your Process</h3>

    <p>
        Your example process is called
        <strong>Process A — Web Browser</strong>.
        The simulation begins at the New state. When you select
        Create Process, the operating system completes the
        creation and preparation represented by the New → Ready
        transition.
    </p>

    <p>
        The simulation uses one example process and one simulated CPU.
        It is a simplified model designed to make each transition visible.
    </p>

    <!-- 8.2 INTERACTIVE SIMULATION -->

    <h3>8.2 Process Lifecycle Control Centre</h3>

    <div class="process-sim-panel"
         aria-label="Interactive process lifecycle simulation">

        <!-- PROCESS STATUS -->

        <div class="process-sim-status">

            <div class="process-sim-status-item">
                <span class="process-sim-label">PROCESS</span>
                <strong>Process A</strong>
                <span>Web Browser</span>
            </div>

            <div class="process-sim-status-item">
                <span class="process-sim-label">CURRENT STATE</span>
                <strong id="processSimState">New</strong>
            </div>

            <div class="process-sim-status-item">
                <span class="process-sim-label">CPU STATUS</span>
                <strong id="processSimCPU">Available</strong>
            </div>

        </div>

        <!-- FIVE PROCESS STATES -->

        <h4>Five-State Process Lifecycle</h4>

        <p>
            The highlighted card shows the process's current state.
            Watch it change as you use the controls.
        </p>

        <div class="process-sim-states"
             role="list"
             aria-label="Five process lifecycle states">

            <div class="process-sim-state active"
                 data-state="new"
                 role="listitem">
                <span>1</span>
                <strong>New</strong>
            </div>

            <div class="process-sim-state"
                 data-state="ready"
                 role="listitem">
                <span>2</span>
                <strong>Ready</strong>
            </div>

            <div class="process-sim-state"
                 data-state="running"
                 role="listitem">
                <span>3</span>
                <strong>Running</strong>
            </div>

            <div class="process-sim-state"
                 data-state="waiting"
                 role="listitem">
                <span>4</span>
                <strong>Waiting</strong>
            </div>

            <div class="process-sim-state"
                 data-state="terminated"
                 role="listitem">
                <span>5</span>
                <strong>Terminated</strong>
            </div>

        </div>

        <!-- LIVE EXPLANATION -->

        <div class="process-sim-explanation"
             aria-live="polite"
             aria-atomic="true">

            <h4 id="processSimHeading">
                The process has not been created yet.
            </h4>

            <p id="processSimExplanation">
                Select Create Process to ask the operating system
                to create Process A.
            </p>

        </div>

        <!-- LEARNER CONTROLS -->

        <h4>Control the Process</h4>

        <p>
            Select an action to move Process A through its lifecycle.
            Only actions valid for its current state will be available.
        </p>

        <div class="process-sim-controls"
             role="group"
             aria-label="Process lifecycle controls">

            <button type="button"
                    class="process-sim-button"
                    data-action="create">
                Create Process
            </button>

            <button type="button"
                    class="process-sim-button"
                    data-action="dispatch"
                    disabled>
                Dispatch to CPU
            </button>

            <button type="button"
                    class="process-sim-button"
                    data-action="request-io"
                    disabled>
                Request I/O
            </button>

            <button type="button"
                    class="process-sim-button"
                    data-action="complete-io"
                    disabled>
                Complete I/O
            </button>

            <button type="button"
                    class="process-sim-button"
                    data-action="time-slice"
                    disabled>
                Time Slice Expires
            </button>

            <button type="button"
                    class="process-sim-button"
                    data-action="terminate"
                    disabled>
                Finish Execution
            </button>

            <button type="button"
                    class="process-sim-reset"
                    data-action="reset">
                Reset Simulation
            </button>

        </div>

        <!-- EVENT HISTORY -->

        <h4>Process Event History</h4>

        <p>
            Every action is recorded below. Follow the history to see
            the sequence of state transitions.
        </p>

        <ol id="processSimHistory"
            class="process-sim-history"
            aria-live="polite"
            aria-relevant="additions">

            <li>
                Simulation ready. Process A has not yet been created.
            </li>

        </ol>

    </div>

    <!-- 8.3 GUIDED LEARNING CHALLENGE -->

    <h3>8.3 Your First Challenge: Complete the Lifecycle</h3>

    <p>
        Try to move Process A through this complete example.
        Select each action in the correct order.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>Challenge A — I/O Operation</h4>

            <ol>
                <li>Create Process</li>
                <li>Dispatch to CPU</li>
                <li>Request I/O</li>
                <li>Complete I/O</li>
                <li>Dispatch to CPU again</li>
                <li>Finish Execution</li>
            </ol>

            <p>
                <strong>Learning goal:</strong>
                Observe how a process enters Waiting and returns
                to Ready after its I/O operation completes.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Challenge B — Time Slice Expires</h4>

            <ol>
                <li>Create Process</li>
                <li>Dispatch to CPU</li>
                <li>Time Slice Expires</li>
                <li>Dispatch to CPU again</li>
                <li>Finish Execution</li>
            </ol>

            <p>
                <strong>Learning goal:</strong>
                Observe how a running process returns to Ready
                when its allocated CPU time slice expires.
            </p>
        </div>

    </div>

    <!-- 8.4 UNDERSTANDING THE TRANSITIONS -->

    <h3>8.4 What Should You Observe?</h3>

    <ul>
        <li>
            <strong>New → Ready:</strong>
            The operating system creates and prepares the process.
        </li>

        <li>
            <strong>Ready → Running:</strong>
            The scheduler selects the process and the dispatcher
            gives it CPU control.
        </li>

        <li>
            <strong>Running → Waiting:</strong>
            The process requests an I/O operation and must wait
            for the required event.
        </li>

        <li>
            <strong>Waiting → Ready:</strong>
            The I/O operation completes, making the process
            eligible for CPU scheduling again.
        </li>

        <li>
            <strong>Running → Ready:</strong>
            The CPU time slice expires, allowing another eligible
            process or thread to be scheduled.
        </li>

        <li>
            <strong>Running → Terminated:</strong>
            The process finishes its execution.
        </li>
    </ul>

    <div class="concept-note">
        <h4>The Most Important Distinction</h4>

        <p>
            A process returning from Waiting does not immediately
            become Running. It first enters Ready because it must
            wait for the scheduler to select it and the dispatcher
            to give it CPU time.
        </p>
    </div>

    <!-- 8.5 THINK LIKE AN OPERATING SYSTEM -->

    <h3>8.5 Think Like an Operating System</h3>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>Question 1</h4>
            <p>
                Why should a process waiting for I/O leave the CPU
                instead of continuing to occupy it?
            </p>
        </div>

        <div class="comparison-item">
            <h4>Question 2</h4>
            <p>
                Why does a process returning from Waiting enter
                Ready instead of immediately entering Running?
            </p>
        </div>

        <div class="comparison-item">
            <h4>Question 3</h4>
            <p>
                What happens to the CPU when the running process's
                time slice expires?
            </p>
        </div>

    </div>

    <!-- 8.6 MODEL LIMITATIONS -->

    <h3>8.6 Important Simulation Limitations</h3>

    <p>
        This simulation uses a simplified five-state teaching model.
        It represents one process and one simulated CPU at a time.
    </p>

    <ul>
        <li>
            Real operating systems manage many processes and threads.
        </li>

        <li>
            Modern operating systems generally schedule threads
            for CPU execution.
        </li>

        <li>
            When this simulation shows the CPU as Available,
            it means Process A is not using it. Other runnable work
            could use that CPU.
        </li>

        <li>
            Real operating systems use additional scheduling rules,
            events, interrupts and process-management mechanisms.
        </li>

    </ul>

    <div class="concept-note">
        <h4>Final Takeaway</h4>

        <p>
            A process does not control the CPU whenever it wants.
            The operating system coordinates its execution,
            manages its waiting periods, and determines when
            it can receive CPU time again.
        </p>

        <p>
            <strong>
                You have now experienced the process lifecycle
                from the operating system's point of view.
            </strong>
        </p>
    </div>

</section>

<!-- END SECTION 8 -->

<section id="process-diagrams"
         class="concept-section"
         aria-labelledby="process-diagrams-heading">

    <h2 id="process-diagrams-heading">
        9. Flowchart and Sequence Diagram
    </h2>

    <p>
        You have learned the five process states and controlled
        a process through its lifecycle. Now let's connect these
        ideas using two visual diagrams.
    </p>

    <p>
        The flowchart explains how a process moves between states.
        The sequence diagram explains how operating-system
        components coordinate those movements over time.
    </p>

    <!-- =====================================================
         9.1 PROCESS LIFECYCLE FLOWCHART
         ===================================================== -->

    <h3>9.1 Process Lifecycle Flowchart</h3>

    <p>
        This flowchart represents the journey of a process
        from creation to termination.
    </p>

    <div class="process-diagram-card">

        <h4>How a Process Moves Through Its Five States</h4>

        <p class="process-diagram-caption">
            Follow the arrows to understand each state transition.
        </p>

        <div class="process-diagram-scroll">

            <svg
                class="process-lifecycle-svg"
                viewBox="0 0 900 540"
                role="img"
                aria-labelledby="lifecycleTitle lifecycleDescription"
                xmlns="http://www.w3.org/2000/svg">

                <title id="lifecycleTitle">
                    Five-state process lifecycle flowchart
                </title>

                <desc id="lifecycleDescription">
                    A process moves from New to Ready, from Ready
                    to Running, and from Running to Terminated.
                    A running process can move to Waiting after
                    requesting I/O or return to Ready when its
                    CPU time slice expires. A waiting process
                    returns to Ready after I/O completion.
                </desc>

                <defs>

                    <marker
                        id="processArrowBlue"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="5"
                        orient="auto">
                        <path
                            d="M0,0 L10,5 L0,10 Z"
                            fill="#2563EB"/>
                    </marker>

                    <marker
                        id="processArrowTeal"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="5"
                        orient="auto">
                        <path
                            d="M0,0 L10,5 L0,10 Z"
                            fill="#0D9488"/>
                    </marker>

                    <marker
                        id="processArrowOrange"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="5"
                        orient="auto">
                        <path
                            d="M0,0 L10,5 L0,10 Z"
                            fill="#D97706"/>
                    </marker>

                </defs>

                <!-- NEW TO READY -->

                <path
                    d="M180 105 H300"
                    fill="none"
                    stroke="#2563EB"
                    stroke-width="3"
                    marker-end="url(#processArrowBlue)"/>

                <text
                    x="240"
                    y="87"
                    text-anchor="middle"
                    class="diagram-arrow-label">
                    Admitted
                </text>

                <!-- READY TO RUNNING -->

                <path
                    d="M450 105 H570"
                    fill="none"
                    stroke="#2563EB"
                    stroke-width="3"
                    marker-end="url(#processArrowBlue)"/>

                <text
                    x="510"
                    y="87"
                    text-anchor="middle"
                    class="diagram-arrow-label">
                    Dispatch
                </text>

                <!-- RUNNING TO WAITING -->

                <path
                    d="M645 150 V270"
                    fill="none"
                    stroke="#2563EB"
                    stroke-width="3"
                    marker-end="url(#processArrowBlue)"/>

                <text
                    x="660"
                    y="215"
                    class="diagram-arrow-label">
                    I/O request
                </text>

                <!-- WAITING TO READY -->

                <path
                    d="M570 310 H375 V150"
                    fill="none"
                    stroke="#2563EB"
                    stroke-width="3"
                    marker-end="url(#processArrowBlue)"/>

                <text
                    x="465"
                    y="295"
                    text-anchor="middle"
                    class="diagram-arrow-label">
                    I/O complete
                </text>

                <!-- RUNNING TO READY: TIME SLICE -->

                <path
                    d="M645 65 V40 H375 V65"
                    fill="none"
                    stroke="#0D9488"
                    stroke-width="3"
                    stroke-dasharray="7 5"
                    marker-end="url(#processArrowTeal)"/>

                <text
                    x="510"
                    y="27"
                    text-anchor="middle"
                    class="diagram-arrow-label">
                    Time slice expires
                </text>

                <!-- RUNNING TO TERMINATED -->

                <path
                    d="M720 105 H750"
                    fill="none"
                    stroke="#D97706"
                    stroke-width="3"
                    marker-end="url(#processArrowOrange)"/>

                <text
                    x="735"
                    y="55"
                    text-anchor="middle"
                    class="diagram-arrow-label">
                    Finish
                </text>

                <!-- NEW STATE -->

                <rect
                    x="30"
                    y="65"
                    width="150"
                    height="80"
                    rx="14"
                    fill="#EFF6FF"
                    stroke="#2563EB"
                    stroke-width="2"/>

                <text
                    x="105"
                    y="112"
                    text-anchor="middle"
                    class="diagram-state-label">
                    NEW
                </text>

                <!-- READY STATE -->

                <rect
                    x="300"
                    y="65"
                    width="150"
                    height="80"
                    rx="14"
                    fill="#EFF6FF"
                    stroke="#2563EB"
                    stroke-width="2"/>

                <text
                    x="375"
                    y="112"
                    text-anchor="middle"
                    class="diagram-state-label">
                    READY
                </text>

                <!-- RUNNING STATE -->

                <rect
                    x="570"
                    y="65"
                    width="150"
                    height="80"
                    rx="14"
                    fill="#D1FAE5"
                    stroke="#0D9488"
                    stroke-width="2"/>

                <text
                    x="645"
                    y="112"
                    text-anchor="middle"
                    class="diagram-state-label">
                    RUNNING
                </text>

                <!-- WAITING STATE -->

                <rect
                    x="570"
                    y="270"
                    width="150"
                    height="80"
                    rx="14"
                    fill="#FFFBEB"
                    stroke="#D97706"
                    stroke-width="2"/>

                <text
                    x="645"
                    y="317"
                    text-anchor="middle"
                    class="diagram-state-label">
                    WAITING
                </text>

                <!-- TERMINATED STATE -->

                <rect
                    x="750"
                    y="65"
                    width="140"
                    height="80"
                    rx="14"
                    fill="#F1F5F9"
                    stroke="#64748B"
                    stroke-width="2"/>

                <text
                    x="820"
                    y="112"
                    text-anchor="middle"
                    class="diagram-state-label">
                    TERMINATED
                </text>

                <!-- LEGEND -->

                <text
                    x="40"
                    y="430"
                    class="diagram-legend-heading">
                    HOW TO READ THIS DIAGRAM
                </text>

                <text
                    x="40"
                    y="465"
                    class="diagram-legend-text">
                    Blue arrow: normal state transition
                </text>

                <text
                    x="40"
                    y="490"
                    class="diagram-legend-text">
                    Teal dashed arrow: CPU time slice expires
                </text>

                <text
                    x="40"
                    y="515"
                    class="diagram-legend-text">
                    Orange arrow: process execution finishes
                </text>

            </svg>

        </div>

        <div class="concept-note">

            <strong>Important observation:</strong>

            A process does not move directly from Waiting to Running.
            It first returns to Ready. The CPU scheduler must select
            it before it can execute again.

        </div>

    </div>

    <!-- =====================================================
         9.2 PROCESS EXECUTION SEQUENCE DIAGRAM
         ===================================================== -->

    <h3>9.2 Process Execution Sequence Diagram</h3>

    <p>
        A process does not manage its execution independently.
        Different operating-system components coordinate to decide
        when it receives CPU time and how it handles I/O.
    </p>

    <div class="process-diagram-card">

        <h4>How Operating-System Components Coordinate</h4>

        <p class="process-diagram-caption">
            Time flows from top to bottom. Horizontal arrows
            represent messages or actions between components.
        </p>

        <div class="process-diagram-scroll">

            <svg
                class="process-sequence-svg"
                viewBox="0 0 1080 940"
                role="img"
                aria-labelledby="sequenceTitle sequenceDescription"
                xmlns="http://www.w3.org/2000/svg">

                <title id="sequenceTitle">
                    Process execution sequence diagram
                </title>

                <desc id="sequenceDescription">
                    The kernel makes a process Ready. The scheduler
                    selects it, and the dispatcher performs a context
                    switch. The CPU executes the process. The process
                    requests I/O and becomes Waiting. The I/O device
                    signals completion to the kernel. The kernel makes
                    the process Ready again, and it can later be
                    selected and dispatched. Termination is shown
                    separately in the lifecycle flowchart.
                </desc>

                <defs>

                    <marker
                        id="sequenceArrow"
                        markerWidth="9"
                        markerHeight="9"
                        refX="8"
                        refY="4"
                        orient="auto">
                        <path
                            d="M0,0 L9,4 L0,8 Z"
                            fill="#2563EB"/>
                    </marker>

                    <marker
                        id="sequenceArrowOrange"
                        markerWidth="9"
                        markerHeight="9"
                        refX="8"
                        refY="4"
                        orient="auto">
                        <path
                            d="M0,0 L9,4 L0,8 Z"
                            fill="#D97706"/>
                    </marker>

                </defs>

                <!-- PARTICIPANT HEADERS -->

                <g class="sequence-participant">

                    <rect
                        x="20"
                        y="25"
                        width="140"
                        height="55"
                        rx="9"/>

                    <text
                        x="90"
                        y="58"
                        text-anchor="middle">
                        PROCESS
                    </text>

                    <rect
                        x="200"
                        y="25"
                        width="140"
                        height="55"
                        rx="9"/>

                    <text
                        x="270"
                        y="49"
                        text-anchor="middle">
                        OS KERNEL
                    </text>

                    <rect
                        x="380"
                        y="25"
                        width="140"
                        height="55"
                        rx="9"/>

                    <text
                        x="450"
                        y="58"
                        text-anchor="middle">
                        SCHEDULER
                    </text>

                    <rect
                        x="560"
                        y="25"
                        width="140"
                        height="55"
                        rx="9"/>

                    <text
                        x="630"
                        y="58"
                        text-anchor="middle">
                        DISPATCHER
                    </text>

                    <rect
                        x="740"
                        y="25"
                        width="140"
                        height="55"
                        rx="9"/>

                    <text
                        x="810"
                        y="58"
                        text-anchor="middle">
                        CPU
                    </text>

                    <rect
                        x="920"
                        y="25"
                        width="140"
                        height="55"
                        rx="9"/>

                    <text
                        x="990"
                        y="58"
                        text-anchor="middle">
                        I/O DEVICE
                    </text>

                </g>

                <!-- PARTICIPANT LIFELINES -->

                <g class="sequence-lifelines">

                    <path d="M90 80 V900"/>
                    <path d="M270 80 V900"/>
                    <path d="M450 80 V900"/>
                    <path d="M630 80 V900"/>
                    <path d="M810 80 V900"/>
                    <path d="M990 80 V900"/>

                </g>

                <!-- STEP 1: PROCESS BECOMES READY -->

                <path
                    d="M270 145 H450"
                    class="sequence-message"
                    marker-end="url(#sequenceArrow)"/>

                <text
                    x="360"
                    y="133"
                    text-anchor="middle"
                    class="sequence-label">
                    Process becomes Ready
                </text>

                <!-- STEP 2: SCHEDULER SELECTS PROCESS -->

                <path
                    d="M450 210 H630"
                    class="sequence-message"
                    marker-end="url(#sequenceArrow)"/>

                <text
                    x="540"
                    y="198"
                    text-anchor="middle"
                    class="sequence-label">
                    Select Ready process
                </text>

                <!-- STEP 3: DISPATCH PROCESS -->

                <path
                    d="M630 275 H810"
                    class="sequence-message"
                    marker-end="url(#sequenceArrow)"/>

                <text
                    x="720"
                    y="263"
                    text-anchor="middle"
                    class="sequence-label">
                    Restore context and dispatch
                </text>

                <!-- STEP 4: EXECUTION BEGINS -->

                <path
                    d="M810 340 H90"
                    class="sequence-message"
                    marker-end="url(#sequenceArrow)"/>

                <text
                    x="450"
                    y="328"
                    text-anchor="middle"
                    class="sequence-label">
                    CPU executes process instructions
                </text>

                <!-- STEP 5: PROCESS REQUESTS I/O -->

                <path
                    d="M90 405 H270"
                    class="sequence-message"
                    style="stroke:#D97706"
                    marker-end="url(#sequenceArrowOrange)"/>

                <text
                    x="180"
                    y="393"
                    text-anchor="middle"
                    class="sequence-label">
                    Request blocking I/O
                </text>

                <!-- STEP 6: PROCESS ENTERS WAITING -->

                <path
                    d="M270 470 H450"
                    class="sequence-message"
                    style="stroke:#D97706"
                    marker-end="url(#sequenceArrowOrange)"/>

                <text
                    x="360"
                    y="458"
                    text-anchor="middle"
                    class="sequence-label">
                    Mark process Waiting
                </text>

                <!-- STEP 7: START I/O OPERATION -->

                <path
                    d="M270 535 H990"
                    class="sequence-message"
                    style="stroke:#D97706"
                    marker-end="url(#sequenceArrowOrange)"/>

                <text
                    x="630"
                    y="523"
                    text-anchor="middle"
                    class="sequence-label">
                    Issue I/O operation
                </text>

                <!-- STEP 8: I/O COMPLETION INTERRUPT -->

                <path
                    d="M990 600 H270"
                    class="sequence-message"
                    style="stroke:#D97706"
                    marker-end="url(#sequenceArrowOrange)"/>

                <text
                    x="630"
                    y="588"
                    text-anchor="middle"
                    class="sequence-label">
                    I/O completion interrupt
                </text>

                <!-- STEP 9: RETURN PROCESS TO READY -->

                <path
                    d="M270 665 H450"
                    class="sequence-message"
                    style="stroke:#D97706"
                    marker-end="url(#sequenceArrowOrange)"/>

                <text
                    x="360"
                    y="653"
                    text-anchor="middle"
                    class="sequence-label">
                    Mark Ready and enqueue
                </text>

                <!-- STEP 10: SELECT PROCESS AGAIN -->

                <path
                    d="M450 730 H630"
                    class="sequence-message"
                    marker-end="url(#sequenceArrow)"/>

                <text
                    x="540"
                    y="718"
                    text-anchor="middle"
                    class="sequence-label">
                    Select process again
                </text>

                <!-- STEP 11: DISPATCH AGAIN -->

                <path
                    d="M630 795 H810"
                    class="sequence-message"
                    marker-end="url(#sequenceArrow)"/>

                <text
                    x="720"
                    y="783"
                    text-anchor="middle"
                    class="sequence-label">
                    Restore context and dispatch
                </text>

                <!-- STEP 12: RESUME EXECUTION -->

                <path
                    d="M810 860 H90"
                    class="sequence-message"
                    marker-end="url(#sequenceArrow)"/>

                <text
                    x="450"
                    y="848"
                    text-anchor="middle"
                    class="sequence-label">
                    CPU resumes process execution
                </text>

            </svg>

        </div>

        <!-- SEQUENCE DIAGRAM ARROW COLOUR LEGEND -->

        <div class="sequence-arrow-legend"
             role="group"
             aria-label="Sequence diagram arrow colour legend">

            <div class="legend-item">
                <span class="legend-line legend-blue"></span>
                <span>
                    <strong>Blue:</strong>
                    General process and operating-system interactions
                </span>
            </div>

            <div class="legend-item">
                <span class="legend-line legend-orange"></span>
                <span>
                    <strong>Orange:</strong>
                    I/O activity and related process state changes
                    (Steps 5–9)
                </span>
            </div>

        </div>

        <div class="concept-note">

            <strong>Important clarification:</strong>

            The OS kernel manages process-state changes and handles
            I/O completion. The scheduler selects a Ready process,
            while the dispatcher performs the context switch and
            transfers CPU control.

            <p>
                While this process waits for I/O, the CPU can execute
                another Ready process. This simplified diagram follows
                one process and does not show that concurrent activity.
            </p>

        </div>

    </div>

    <!-- =====================================================
         9.3 UNDERSTANDING THE TWO DIAGRAMS
         ===================================================== -->

    <h3>9.3 What Is the Difference Between These Diagrams?</h3>

    <div class="concept-comparison">

        <div class="comparison-item">

            <h4>Lifecycle Flowchart</h4>

            <p>
                Focuses on the process's states and the conditions
                that move it from one state to another.
            </p>

            <p>
                <strong>Question answered:</strong>
                Where can a process move next?
            </p>

        </div>

        <div class="comparison-item">

            <h4>Sequence Diagram</h4>

            <p>
                Focuses on interactions between the process,
                kernel and operating-system components over time.
            </p>

            <p>
                <strong>Question answered:</strong>
                Who communicates or acts, and in what order?
            </p>

        </div>

    </div>

    <!-- =====================================================
         9.4 KEY LEARNING POINTS
         ===================================================== -->

    <h3>9.4 Key Learning Points</h3>

    <ul>

        <li>
            A process moves through different states during its lifetime.
        </li>

        <li>
            The operating-system kernel manages process-state changes.
        </li>

        <li>
            The CPU scheduler selects a runnable process or thread
            from the Ready queue.
        </li>

        <li>
            The dispatcher performs the context switch and transfers
            CPU control to the selected execution context.
        </li>

        <li>
            A process requesting blocking I/O enters the Waiting state
            in this simplified model.
        </li>

        <li>
            I/O completion allows the kernel to make the waiting
            process Ready again.
        </li>

        <li>
            A running process may return to Ready when its time slice
            expires.
        </li>

        <li>
            A process enters Terminated when its execution finishes.
        </li>

    </ul>

    <div class="concept-note">

        <strong>Think like an operating-system designer:</strong>

        If a process is waiting for a slow disk operation,
        should the CPU remain idle until that operation finishes?

        <p>
            No. The operating system can schedule another Ready
            process or thread while the first process waits.
            This helps improve CPU utilization.
        </p>

    </div>

    <div class="concept-note">

        <strong>Modern operating-system note:</strong>

        This section uses the classic five-state process model
        to explain the fundamentals. Modern operating systems
        generally schedule threads for CPU execution, so the
        actual scheduling and state-management details can be
        more complex than this simplified diagram.

    </div>

</section>

<!-- END SECTION 9 -->

<section id="practical-example" class="concept-section"
         aria-labelledby="practical-example-heading">

    <h2 id="practical-example-heading">10. Practical Example</h2>

    <!-- BLOCK 10.1: INTRODUCING THE SCENARIO -->

    <h3>10.1 A Real-Life Scenario: Opening a Text Editor</h3>

    <p>
        Imagine Alex opens a text editor to write a document.
        The application may look like one simple window, but
        behind it the operating system is managing processes,
        threads, memory, CPU time, and access to storage.
    </p>

    <p>
        We will follow one representative process from the
        moment the text editor starts until that process exits.
        This example uses the classic five-state process model
        to explain what happens.
    </p>

    <div class="concept-note">
        <strong>Our scenario assumptions:</strong>
        <ul>
            <li>We follow one representative process.</li>
            <li>The text editor performs a blocking file-read operation.</li>
            <li>The application eventually exits and the process terminates.</li>
        </ul>
        These assumptions let us clearly observe all five process states.
    </div>


    <!-- BLOCK 10.2: FOLLOWING THE PROCESS LIFECYCLE -->

    <h3>10.2 Follow the Process Through Its Lifetime</h3>

    <ol>

        <li>
            <strong>Alex opens the text editor — New.</strong>

            <p>
                The operating system begins creating a process
                for the application. In the classic model, the
                process enters the New state while the operating
                system creates its management information and
                prepares the resources needed for execution.
            </p>
        </li>

        <li>
            <strong>The process becomes Ready.</strong>

            <p>
                The process has been admitted for execution and
                is prepared to run. It enters the Ready state,
                where it waits for the CPU scheduler to select
                its execution work.
            </p>
        </li>

        <li>
            <strong>The process starts Running.</strong>

            <p>
                The scheduler selects the work that should execute.
                The dispatcher performs the necessary context-switching
                work and transfers CPU control to it. The text editor
                begins executing instructions.
            </p>
        </li>

        <li>
            <strong>Alex opens an existing document — Waiting.</strong>

            <p>
                In this example, the text editor requests document
                data through a blocking I/O operation. Its execution
                cannot continue until the requested operation completes.
                The process therefore enters the Waiting state.
            </p>
        </li>

        <li>
            <strong>The operating system schedules other work.</strong>

            <p>
                While the text editor waits, its waiting execution
                does not need to occupy the CPU. The scheduler can
                select another Ready process or thread, allowing
                the CPU to continue doing useful work.
            </p>
        </li>

        <li>
            <strong>The I/O operation completes — Ready.</strong>

            <p>
                The storage operation completes and the device
                reports the completion event. The operating-system
                kernel handles the event and makes the waiting
                execution eligible to run again. In the classic
                model, the process returns to the Ready state.
            </p>
        </li>

        <li>
            <strong>The process runs again — Running.</strong>

            <p>
                Completing I/O does not immediately give the process
                the CPU. It must first be selected by the scheduler.
                The dispatcher then restores the required execution
                context and transfers CPU control so the text editor
                can continue.
            </p>
        </li>

        <li>
            <strong>Alex closes the application — Terminated.</strong>

            <p>
                When the application exits and the process has
                finished executing, it enters the Terminated state.
                The operating system performs the remaining cleanup
                and reclaims resources associated with that process
                as appropriate.
            </p>
        </li>

    </ol>


    <!-- BLOCK 10.3: PROCESS JOURNEY SUMMARY -->

    <h3>10.3 Visualising the Process Journey</h3>

    <p>
        Follow the sequence below. Notice that Ready and Running
        appear twice because the process waits for I/O and then
        becomes eligible to execute again.
    </p>

    <figure class="process-concept-visual">

        <svg viewBox="0 0 1120 210"
             role="img"
             aria-labelledby="text-editor-journey-title text-editor-journey-desc"
             xmlns="http://www.w3.org/2000/svg">

            <title id="text-editor-journey-title">
                Text editor process lifecycle journey
            </title>

            <desc id="text-editor-journey-desc">
                The process moves from New to Ready, Running,
                Waiting, Ready again, Running again, and finally
                Terminated.
            </desc>

            <defs>
                <marker id="textEditorJourneyArrow"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="5"
                        orient="auto">
                    <path d="M0 0 L10 5 L0 10 Z"
                          fill="#64748B"/>
                </marker>
            </defs>

            <!-- CONNECTING ARROWS -->

            <g fill="none"
               stroke="#64748B"
               stroke-width="3"
               marker-end="url(#textEditorJourneyArrow)">

                <path d="M145 85 H165"/>
                <path d="M300 85 H320"/>
                <path d="M455 85 H475"/>
                <path d="M610 85 H630"/>
                <path d="M765 85 H785"/>
                <path d="M920 85 H940"/>

            </g>

            <!-- NEW -->

            <rect x="10" y="45" width="135" height="80"
                  rx="12" fill="#EFF6FF"
                  stroke="#2563EB" stroke-width="2"/>

            <text x="77" y="91"
                  text-anchor="middle"
                  font-size="19" font-weight="700"
                  fill="#102A43">NEW</text>

            <text x="77" y="150"
                  text-anchor="middle"
                  font-size="13" fill="#475569">Created</text>

            <!-- READY -->

            <rect x="165" y="45" width="135" height="80"
                  rx="12" fill="#DBEAFE"
                  stroke="#2563EB" stroke-width="2"/>

            <text x="232" y="91"
                  text-anchor="middle"
                  font-size="19" font-weight="700"
                  fill="#102A43">READY</text>

            <text x="232" y="150"
                  text-anchor="middle"
                  font-size="13" fill="#475569">First turn</text>

            <!-- RUNNING -->

            <rect x="320" y="45" width="135" height="80"
                  rx="12" fill="#CCFBF1"
                  stroke="#0D9488" stroke-width="2"/>

            <text x="387" y="91"
                  text-anchor="middle"
                  font-size="19" font-weight="700"
                  fill="#102A43">RUNNING</text>

            <text x="387" y="150"
                  text-anchor="middle"
                  font-size="13" fill="#475569">Executes</text>

            <!-- WAITING -->

            <rect x="475" y="45" width="135" height="80"
                  rx="12" fill="#FEF3C7"
                  stroke="#D97706" stroke-width="2"/>

            <text x="542" y="91"
                  text-anchor="middle"
                  font-size="19" font-weight="700"
                  fill="#102A43">WAITING</text>

            <text x="542" y="150"
                  text-anchor="middle"
                  font-size="13" fill="#475569">File I/O</text>

            <!-- READY AGAIN -->

            <rect x="630" y="45" width="135" height="80"
                  rx="12" fill="#DBEAFE"
                  stroke="#2563EB" stroke-width="2"/>

            <text x="697" y="91"
                  text-anchor="middle"
                  font-size="19" font-weight="700"
                  fill="#102A43">READY</text>

            <text x="697" y="150"
                  text-anchor="middle"
                  font-size="13" fill="#475569">I/O complete</text>

            <!-- RUNNING AGAIN -->

            <rect x="785" y="45" width="135" height="80"
                  rx="12" fill="#CCFBF1"
                  stroke="#0D9488" stroke-width="2"/>

            <text x="852" y="91"
                  text-anchor="middle"
                  font-size="19" font-weight="700"
                  fill="#102A43">RUNNING</text>

            <text x="852" y="150"
                  text-anchor="middle"
                  font-size="13" fill="#475569">Resumes</text>

            <!-- TERMINATED -->

            <rect x="940" y="45" width="170" height="80"
                  rx="12" fill="#F1F5F9"
                  stroke="#64748B" stroke-width="2"/>

            <text x="1025" y="91"
                  text-anchor="middle"
                  font-size="18" font-weight="700"
                  fill="#102A43">TERMINATED</text>

            <text x="1025" y="150"
                  text-anchor="middle"
                  font-size="13" fill="#475569">Exits</text>

            <text x="560" y="195"
                  text-anchor="middle"
                  font-size="13" fill="#64748B">
                Simplified teaching model — one representative process
            </text>

        </svg>

        <figcaption>
            One possible journey through the five-state process
            model, including a blocking file I/O operation.
        </figcaption>

    </figure>

    <div class="concept-note">

        <strong>Important observation:</strong>

        When the I/O operation completes, the process returns
        to Ready, not directly to Running. It must wait until
        the scheduler selects it again.

    </div>


    <!-- BLOCK 10.4: RESOURCES USED BY THE PROCESS -->

    <h3>10.4 What Does the Operating System Manage?</h3>

    <p>
        Several operating-system components and hardware resources
        contribute to the text editor's execution. Each has a
        different responsibility.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>CPU</h4>
            <p>
                Executes instructions from the currently running
                thread. The CPU is the hardware that performs
                the actual computation.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Memory</h4>
            <p>
                Holds the program's code, working data, and
                other information needed while the application
                is executing.
            </p>
        </div>

        <div class="comparison-item">
            <h4>CPU Scheduler</h4>
            <p>
                Chooses which eligible Ready execution should
                receive CPU time. Modern operating systems
                generally make this decision at the thread level.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Dispatcher</h4>
            <p>
                Carries out the handover to the selected execution,
                including the necessary context-switching work
                and transfer of CPU control.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Storage Device</h4>
            <p>
                Supplies requested document data when the
                application performs file input/output.
            </p>
        </div>

        <div class="comparison-item">
            <h4>Operating-System Kernel</h4>
            <p>
                Manages process and thread information, handles
                important events such as I/O completion, and
                coordinates changes in execution state.
            </p>
        </div>

    </div>


    <!-- BLOCK 10.5: WHAT WE LEARN FROM THE EXAMPLE -->

    <h3>10.5 What Does This Example Teach Us?</h3>

    <ul>

        <li>
            Starting an application causes the operating system
            to create and manage one or more processes.
        </li>

        <li>
            The classic process model describes five states:
            New, Ready, Running, Waiting, and Terminated.
        </li>

        <li>
            A Ready process is eligible to execute but has
            not necessarily received CPU time.
        </li>

        <li>
            A process waiting for blocking I/O does not need
            to occupy the CPU while that operation is pending.
        </li>

        <li>
            After I/O completes, the process becomes Ready
            and must be selected before it can execute again.
        </li>

        <li>
            The scheduler selects work, while the dispatcher
            transfers CPU control to that work.
        </li>

        <li>
            When a process exits, the operating system handles
            its remaining cleanup and resource reclamation.
        </li>

    </ul>


    <!-- BLOCK 10.6: IMPORTANT TECHNICAL QUALIFICATION -->

    <div class="concept-note">

        <h4>Important: This Is a Simplified Teaching Example</h4>

        <p>
            Real operating systems use techniques such as caching,
            buffering, asynchronous I/O, and other mechanisms
            to handle file operations.
        </p>

        <p>
            Not every file operation causes a process to enter
            the Waiting state. If the requested data is already
            available, or an operation is handled asynchronously,
            the execution may continue without the blocking
            transition shown here.
        </p>

        <p>
            Also remember that the five-state model is a teaching
            abstraction. Modern operating systems generally
            schedule threads, which execute within processes.
            This example uses process-level states to make the
            basic lifecycle easier to understand.
        </p>

    </div>

</section>

<!-- END SECTION 10: PRACTICAL EXAMPLE -->

<section id="common-mistakes" class="concept-section"
         aria-labelledby="common-mistakes-heading">

    <h2 id="common-mistakes-heading">
        11. Common Mistakes and Misconceptions
    </h2>

    <p>
        When learning about processes, it is easy to confuse
        related concepts or make incorrect assumptions about
        how an operating system works.
    </p>

    <p>
        Let's examine ten common misconceptions and understand
        what actually happens inside an operating system.
    </p>


    <!-- BLOCK 11.1: TEN COMMON MISCONCEPTIONS -->

    <h3>11.1 Ten Common Process Misconceptions</h3>

    <p>
        Each example separates a common misunderstanding
        from the technically correct explanation.
    </p>

    <div class="concept-comparison">


        <!-- MISCONCEPTION 1 -->

        <div class="comparison-item">

            <h4>11.1.1 Program and Process Are the Same</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                A program and a process are exactly the same thing.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                A program is a set of instructions stored as
                a file. A process is an instance of a program
                being executed, together with its execution
                state and associated resources.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                A text editor stored on your device is a program.
                When you launch it, the operating system creates
                a process to manage its execution.
            </p>

            <p>
                <strong>Remember:</strong>
                Program = instructions. Process = executing instance.
            </p>

        </div>


        <!-- MISCONCEPTION 2 -->

        <div class="comparison-item">

            <h4>11.1.2 Every Process Is Always Running</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                Every process is constantly using the CPU.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                In the classic five-state model, a process can
                be New, Ready, Running, Waiting, or Terminated.
                Running means its execution is currently taking
                place on a CPU.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                A music application waiting for data from storage
                may be blocked rather than executing application
                instructions on the CPU.
            </p>

            <p>
                <strong>Remember:</strong>
                Existing on a computer does not mean continuously
                using the CPU.
            </p>

        </div>


        <!-- MISCONCEPTION 3 -->

        <div class="comparison-item">

            <h4>11.1.3 Ready and Waiting Mean the Same Thing</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                Ready and Waiting both mean that a process
                is waiting, so they are identical.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                Ready means the execution is prepared to run
                but needs CPU time. Waiting means it cannot
                continue until a particular event or operation
                is completed.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                A Ready process needs the scheduler to select it.
                A process waiting for a file-reading operation
                needs that operation to complete.
            </p>

            <p>
                <strong>Remember:</strong>
                Ready = waiting for CPU. Waiting = waiting for
                an event.
            </p>

        </div>


        <!-- MISCONCEPTION 4 -->

        <div class="comparison-item">

            <h4>11.1.4 A Ready Process Immediately Gets the CPU</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                As soon as a process enters Ready, it starts executing.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                A Ready process must wait until the CPU scheduler
                selects its execution work. The dispatcher then
                transfers CPU control to the selected work.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                Several processes may have Ready threads at the
                same time. On a single CPU core, only one thread
                can execute on that core at a time.
            </p>

            <p>
                <strong>Remember:</strong>
                Ready means eligible to run, not currently running.
            </p>

        </div>


        <!-- MISCONCEPTION 5 -->

        <div class="comparison-item">

            <h4>11.1.5 Scheduler and Dispatcher Are the Same</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                The CPU scheduler and dispatcher perform
                exactly the same job.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                The scheduler selects which eligible execution
                should run next. The dispatcher carries out the
                handover, including the necessary context-switching
                work and transfer of CPU control.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                Think of the scheduler as choosing the next
                passenger and the dispatcher as helping that
                passenger take their seat.
            </p>

            <p>
                <strong>Remember:</strong>
                Scheduler = selects. Dispatcher = hands over.
            </p>

        </div>


        <!-- MISCONCEPTION 6 -->

        <div class="comparison-item">

            <h4>11.1.6 Context Switching Is Simply Executing Another Process</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                A context switch is simply the execution
                of another process.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                A context switch involves saving the necessary
                CPU execution context of one thread and restoring
                the context of another. This allows execution
                to resume from the appropriate point.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                The operating system saves information such as
                the program counter and relevant CPU registers
                before switching execution to another thread.
            </p>

            <p>
                <strong>Remember:</strong>
                Context switching changes which execution
                context is using the CPU; it does not copy
                the entire process memory.
            </p>

        </div>


        <!-- MISCONCEPTION 7 -->

        <div class="comparison-item">

            <h4>11.1.7 A Waiting Process Continues Using the CPU</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                A process waiting for I/O continues consuming
                CPU time while it waits.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                In a blocking I/O operation, the blocked thread
                does not execute its application instructions
                while waiting for the required event. The CPU
                can execute another Ready thread.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                While a text editor waits for a storage operation,
                another Ready thread can use the CPU.
            </p>

            <p>
                <strong>Remember:</strong>
                Waiting for I/O does not mean continuously
                executing on the CPU.
            </p>

        </div>


        <!-- MISCONCEPTION 8 -->

        <div class="comparison-item">

            <h4>11.1.8 Every Application Has Only One Process</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                One application always corresponds to exactly
                one process.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                An application may use multiple processes,
                and a single process may contain multiple threads.
                The relationship depends on the application's
                design and the operating system.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                A modern web browser may use separate processes
                for page rendering, browser services, or other
                tasks. Its exact architecture varies.
            </p>

            <p>
                <strong>Remember:</strong>
                One application does not necessarily mean
                one process.
            </p>

        </div>


        <!-- MISCONCEPTION 9 -->

        <div class="comparison-item">

            <h4>11.1.9 A Terminated Process Is Temporarily Inactive</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                A terminated process is simply a process that
                is temporarily inactive.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                A terminated process has finished execution
                or has been stopped. The same process instance
                does not return to Ready or Running. The operating
                system handles its remaining cleanup.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                When a text editor process exits, it no longer
                continues executing as that process. Some
                operating systems may temporarily retain exit
                information until another process collects it.
            </p>

            <p>
                <strong>Remember:</strong>
                Terminated means execution has ended, not paused.
            </p>

        </div>


        <!-- MISCONCEPTION 10 -->

        <div class="comparison-item">

            <h4>11.1.10 Every Process Follows One Fixed Lifecycle</h4>

            <p>
                <strong>MYTH — Common misconception:</strong>
                Every process must follow exactly the same
                sequence of state transitions.
            </p>

            <p>
                <strong>REALITY — Correct understanding:</strong>
                A process can move repeatedly between Ready,
                Running, and Waiting. Its actual journey depends
                on scheduling decisions, I/O requests, events,
                and how execution ends.
            </p>

            <p>
                <strong>EXAMPLE:</strong>
                A process may run, wait for I/O, return to Ready,
                run again, and repeat this cycle many times
                before termination.
            </p>

            <p>
                <strong>Remember:</strong>
                A process lifecycle can contain repeated
                state transitions.
            </p>

        </div>

    </div>


    <!-- BLOCK 11.2: QUICK COMPARISON -->

    <h3>11.2 Quick Comparison — Remember the Differences</h3>

    <p>
        These related concepts are easy to confuse.
        Use this table as a quick revision reference.
    </p>

    <table>

        <thead>
            <tr>
                <th>Concepts</th>
                <th>Remember the Difference</th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <td>Program vs. Process</td>
                <td>Stored instructions vs. executing instance.</td>
            </tr>

            <tr>
                <td>Ready vs. Waiting</td>
                <td>Waiting for CPU selection vs. waiting for an event.</td>
            </tr>

            <tr>
                <td>Scheduler vs. Dispatcher</td>
                <td>Selects the execution vs. transfers CPU control.</td>
            </tr>

            <tr>
                <td>Running vs. Terminated</td>
                <td>Currently executing vs. execution has ended.</td>
            </tr>

            <tr>
                <td>Process vs. Thread</td>
                <td>Resource-owning environment vs. execution unit.</td>
            </tr>

            <tr>
                <td>Blocking vs. Running</td>
                <td>Waiting for an event vs. executing on the CPU.</td>
            </tr>

        </tbody>

    </table>


    <!-- BLOCK 11.3: MEMORY GUIDE -->

    <h3>11.3 A Simple Memory Guide</h3>

    <div class="concept-note">

        <p><strong>PROGRAM</strong> — Instructions stored on a device.</p>

        <p><strong>PROCESS</strong> — An executing program instance and its resources.</p>

        <p><strong>THREAD</strong> — An execution unit within a process.</p>

        <p><strong>READY</strong> — Prepared to execute; waiting for CPU selection.</p>

        <p><strong>WAITING</strong> — Blocked until an event or operation completes.</p>

        <p><strong>RUNNING</strong> — Currently executing on a CPU.</p>

        <p><strong>SCHEDULER</strong> — Selects which execution runs next.</p>

        <p><strong>DISPATCHER</strong> — Transfers CPU control to the selected execution.</p>

        <p><strong>CONTEXT SWITCH</strong> — Saves and restores execution context.</p>

        <p><strong>TERMINATED</strong> — Execution has ended.</p>

    </div>


    <!-- BLOCK 11.4: KEY TAKEAWAY -->

    <h3>11.4 Key Takeaway</h3>

    <div class="concept-note">

        <p>
            A process is not simply a program that is open
            on the screen. It is an executing entity managed
            by the operating system.
        </p>

        <p>
            Understanding process states, scheduling,
            context switching, resource usage, and the
            relationship between processes and threads
            helps explain how an operating system coordinates
            multiple activities on a computer.
        </p>

        <p>
            When you encounter a process-related problem,
            ask yourself three questions:
        </p>

        <ul>
            <li>What state is the execution currently in?</li>
            <li>What event or decision caused that state?</li>
            <li>Which operating-system component is responsible?</li>
        </ul>

    </div>

</section>

<!-- END SECTION 11: COMMON MISTAKES AND MISCONCEPTIONS -->

<section id="advantages-limitations" class="concept-section"
         aria-labelledby="advantages-limitations-heading">

    <h2 id="advantages-limitations-heading">
        12. Advantages and Limitations of Processes
    </h2>

    <div class="concept-note">

        <h3>Understanding the Trade-Off</h3>

        <p>
            Processes provide the operating system with a structured
            way to manage executing programs. They support multitasking,
            memory protection, resource management, and responsive
            computing.
        </p>

        <p>
            However, creating and managing processes also requires
            memory, CPU time, and coordination. These costs introduce
            performance challenges and additional complexity.
        </p>

        <p>
            Understanding both sides helps explain why processes
            are essential to modern operating systems and why
            they must be managed carefully.
        </p>

    </div>


    <!-- 12.1 ADVANTAGES OF PROCESSES -->

    <h3>12.1 Advantages of Processes</h3>

    <p>
        Processes provide several important benefits that help
        an operating system manage applications and their execution.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">

            <h4>1. Multitasking</h4>

            <p><strong>How it helps:</strong></p>

            <ul>
                <li>Allows multiple applications to make progress during overlapping periods.</li>
                <li>The operating system schedules execution among competing processes and threads.</li>
                <li>Multiple threads can execute simultaneously on different CPU cores.</li>
            </ul>

            <p>
                <strong>Example:</strong> Listening to music while
                browsing the internet and downloading a file.
            </p>

            <p>
                <strong>Remember:</strong> Scheduling enables multitasking;
                multiple CPU cores can provide true parallel execution.
            </p>

        </div>


        <div class="comparison-item">

            <h4>2. Process Isolation</h4>

            <p><strong>How it helps:</strong></p>

            <ul>
                <li>Processes generally have separate virtual address spaces.</li>
                <li>Memory protection helps prevent unauthorized access between processes.</li>
                <li>A failure in one process is less likely to directly damage another process.</li>
            </ul>

            <p>
                <strong>Example:</strong> A crash in a text editor
                does not necessarily crash a separate music player.
            </p>

            <p>
                <strong>Remember:</strong> Isolation reduces interference;
                it does not guarantee complete protection from every failure.
            </p>

        </div>


        <div class="comparison-item">

            <h4>3. Better Resource Management</h4>

            <p><strong>How it helps:</strong></p>

            <ul>
                <li>The operating system manages CPU allocation.</li>
                <li>It coordinates memory, storage, and I/O resource usage.</li>
                <li>It manages competing requests from different processes.</li>
            </ul>

            <p>
                <strong>Example:</strong> The CPU scheduler selects
                eligible execution from the Ready queue.
            </p>

            <p>
                <strong>Remember:</strong> The operating system coordinates
                access to limited computer resources.
            </p>

        </div>


        <div class="comparison-item">

            <h4>4. Improved Responsiveness</h4>

            <p><strong>How it helps:</strong></p>

            <ul>
                <li>A thread waiting for blocking I/O can become blocked.</li>
                <li>The CPU can execute another Ready thread while the operation is pending.</li>
                <li>This helps the system make progress instead of leaving the CPU idle unnecessarily.</li>
            </ul>

            <p>
                <strong>Example:</strong> A browser waiting for a
                storage operation while another application continues
                executing.
            </p>

            <p>
                <strong>Remember:</strong> Waiting for I/O does not
                necessarily prevent other work from progressing.
            </p>

        </div>


        <div class="comparison-item">

            <h4>5. Controlled Execution</h4>

            <p><strong>How it helps:</strong></p>

            <ul>
                <li>Every process has identifiable management information.</li>
                <li>The operating system tracks process and thread execution.</li>
                <li>It supports operations such as creation, scheduling, suspension, resumption, and termination.</li>
            </ul>

            <p>
                <strong>Example:</strong> The operating system can
                terminate an unresponsive application.
            </p>

            <p>
                <strong>Remember:</strong> Process management gives
                the operating system control over application execution.
            </p>

        </div>

    </div>


    <!-- 12.2 LIMITATIONS AND CHALLENGES -->

    <h3>12.2 Limitations and Challenges of Processes</h3>

    <p>
        Although processes provide important benefits, creating
        and managing them introduces costs and technical challenges.
    </p>

    <div class="concept-comparison">

        <div class="comparison-item">

            <h4>1. Process Creation Overhead</h4>

            <p><strong>Why it is a limitation:</strong></p>

            <ul>
                <li>Creating a process requires operating-system operations.</li>
                <li>The OS establishes process-management structures and execution resources.</li>
                <li>Creation consumes time and memory.</li>
            </ul>

            <p>
                <strong>Example:</strong> Starting a new application
                requires additional work compared with continuing
                an already-running process.
            </p>

            <p>
                <strong>Remember:</strong> Creating and managing
                a process has a cost.
            </p>

        </div>


        <div class="comparison-item">

            <h4>2. Context-Switching Overhead</h4>

            <p><strong>Why it is a limitation:</strong></p>

            <ul>
                <li>The OS saves the outgoing execution context.</li>
                <li>It restores the incoming execution context.</li>
                <li>The switching work consumes CPU time without directly advancing the applications' own instructions.</li>
            </ul>

            <p>
                <strong>Example:</strong> Frequent switching between
                execution contexts can add overhead to system activity.
            </p>

            <p>
                <strong>Remember:</strong> Context switching can
                happen between different processes or between
                threads belonging to the same process.
            </p>

        </div>


        <div class="comparison-item">

            <h4>3. Memory Consumption</h4>

            <p><strong>Why it is a limitation:</strong></p>

            <ul>
                <li>Processes require memory for management structures and execution.</li>
                <li>Multiple processes can increase total memory demand.</li>
                <li>Some memory, such as shared libraries, can be shared between processes.</li>
            </ul>

            <p>
                <strong>Example:</strong> Opening many memory-intensive
                applications can put pressure on available RAM.
            </p>

            <p>
                <strong>Remember:</strong> Memory requirements vary;
                process memory is not necessarily duplicated in full.
            </p>

        </div>


        <div class="comparison-item">

            <h4>4. Inter-Process Communication Complexity</h4>

            <p><strong>Why it is a limitation:</strong></p>

            <ul>
                <li>Separate processes sometimes need to exchange information.</li>
                <li>Communication may use pipes, sockets, message queues, or shared memory.</li>
                <li>Designing and managing communication adds complexity.</li>
            </ul>

            <p>
                <strong>Example:</strong> Two separate applications
                exchanging information through a communication channel.
            </p>

            <p>
                <strong>Remember:</strong> Separate address spaces
                provide protection, but communication requires
                an appropriate mechanism.
            </p>

        </div>


        <div class="comparison-item">

            <h4>5. Synchronization Problems</h4>

            <p><strong>Why it is a limitation:</strong></p>

            <ul>
                <li>Processes or threads may access shared resources.</li>
                <li>Poor coordination can produce race conditions.</li>
                <li>Incorrect resource coordination can also lead to deadlocks.</li>
            </ul>

            <p>
                <strong>Example:</strong> Two processes attempt to
                update the same shared data without appropriate
                coordination.
            </p>

            <p>
                <strong>Remember:</strong> Shared resources require
                correct synchronization.
            </p>

        </div>


        <div class="comparison-item">

            <h4>6. Resource Contention</h4>

            <p><strong>Why it is a limitation:</strong></p>

            <ul>
                <li>Processes and threads compete for limited resources.</li>
                <li>CPU time, memory, storage, and I/O devices can become bottlenecks.</li>
                <li>Heavy competition can reduce overall system performance.</li>
            </ul>

            <p>
                <strong>Example:</strong> Several demanding applications
                compete for CPU time and available memory.
            </p>

            <p>
                <strong>Remember:</strong> When demand exceeds available
                resources, performance can suffer.
            </p>

        </div>

    </div>


    <!-- 12.3 ADVANTAGES VS LIMITATIONS -->

    <h3>12.3 Advantages vs Limitations — Quick Comparison</h3>

    <p>
        The following table summarises the benefits that process
        management provides and the costs or challenges associated
        with it.
    </p>

    <div class="table-responsive">

        <table>

            <thead>
                <tr>
                    <th scope="col">Advantages</th>
                    <th scope="col">Limitations</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>Supports multitasking</td>
                    <td>Requires process-management overhead</td>
                </tr>

                <tr>
                    <td>Provides memory isolation</td>
                    <td>Requires memory resources and protection mechanisms</td>
                </tr>

                <tr>
                    <td>Improves responsiveness</td>
                    <td>Context switching consumes CPU time</td>
                </tr>

                <tr>
                    <td>Coordinates resource management</td>
                    <td>Processes compete for limited resources</td>
                </tr>

                <tr>
                    <td>Supports controlled execution</td>
                    <td>Communication and synchronization add complexity</td>
                </tr>

                <tr>
                    <td>Separates application address spaces</td>
                    <td>Inter-process communication requires additional mechanisms</td>
                </tr>

            </tbody>

        </table>

    </div>


    <!-- 12.4 UNDERSTANDING THE TRADE-OFF -->

    <h3>12.4 Understanding the Trade-Off</h3>

    <div class="concept-note">

        <p>
            Processes provide the operating system with a structured
            way to manage executing programs. They support multitasking,
            protection, resource management, and responsiveness.
        </p>

        <p>
            However, these benefits come with costs: process creation,
            memory consumption, context switching, communication,
            synchronization, and competition for resources.
        </p>

        <p>
            The operating system must balance these competing
            demands to maintain good performance and reliable
            execution.
        </p>

        <p>
            <strong>The central lesson:</strong>
            Processes make modern multitasking systems possible,
            but effective process management requires balancing
            their benefits against their overhead.
        </p>

    </div>

</section>

<!-- END SECTION 12: ADVANTAGES AND LIMITATIONS OF PROCESSES -->

<section id="concept-connections" class="concept-section" aria-labelledby="concept-connections-heading">

    <h2 id="concept-connections-heading">13. Connections to Other Operating-System Concepts</h2>

    <div class="concept-note">
        <h3>Understanding the Connections</h3>

        <p>
            A process does not operate in isolation. It depends on
            several operating-system mechanisms that cooperate to
            execute programs, manage resources, and respond to events.
        </p>

        <p>
            Think of process management as one part of a much larger
            system. The operating system coordinates the CPU, memory,
            threads, files, devices, and communication between processes.
        </p>

        <p>
            In this section, we will connect the process concept to
            the other major ideas that make an operating system work.
        </p>
    </div>


    <!-- 13.1 PROCESS AND PROGRAM -->

    <h3>13.1 Process and Program</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>A program is a passive set of instructions stored on a device.</li>
                <li>A process is an instance of a program in execution.</li>
                <li>One program can have multiple process instances.</li>
                <li>Each process has its own process identity and execution state.</li>
                <li>The operating system manages the resources associated with each process.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> A recipe is like a program.
                Someone actively following the recipe is like a process.
                The written instructions do not perform the cooking;
                the person carrying them out does.
            </p>

            <p>
                <strong>Example:</strong> Opening two independent
                instances of an application can create two separate
                processes. The exact behaviour depends on how the
                application is designed.
            </p>

            <p>
                <strong>Remember:</strong> A program describes what
                instructions can be executed. A process represents
                an executing instance managed by the operating system.
            </p>
        </div>
    </div>


    <!-- 13.2 PROCESS AND THREAD -->

    <h3>13.2 Process and Thread</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>A process provides resources and an environment for execution.</li>
                <li>A thread is an individual path of execution within a process.</li>
                <li>A process can contain one or multiple threads.</li>
                <li>Threads in the same process normally share its address space and many process resources.</li>
                <li>Each thread maintains its own execution context, including its registers, program counter, and stack.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> A process is a workshop.
                Threads are workers operating inside that workshop.
                They share facilities but perform their own tasks.
            </p>

            <p>
                <strong>Example:</strong> A browser may use multiple
                threads for interface operations, networking,
                rendering, and other activities.
            </p>

            <p>
                <strong>Important distinction:</strong> Threads share
                many resources, but each thread has its own execution
                context. A problem in one thread can still affect
                other threads in the same process because they share
                resources.
            </p>
        </div>
    </div>


    <!-- 13.3 PROCESS AND PCB -->

    <h3>13.3 Process and Process Control Block (PCB)</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>The operating system maintains information about each process.</li>
                <li>This information is organised in a Process Control Block (PCB), or an equivalent process-management structure.</li>
                <li>It includes information such as process ID, process state, scheduling information, and memory-management references.</li>
                <li>The operating system uses this information to manage and track the process.</li>
                <li>Thread-specific execution information is generally maintained in separate thread-management structures.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> A PCB is like an employee's
                official administrative record. It contains important
                information needed to manage that employee's work.
            </p>

            <p>
                <strong>Example:</strong> When the operating system
                performs a context switch, it saves and restores
                the relevant execution information for the
                thread being switched.
            </p>

            <p>
                <strong>Remember:</strong> The PCB helps the operating
                system keep track of a process. It is not the process
                itself, nor does it contain every byte of the
                process's memory.
            </p>
        </div>
    </div>


    <!-- 13.4 PROCESS AND CPU SCHEDULING -->

    <h3>13.4 Process and CPU Scheduling</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>Multiple runnable threads may compete for CPU time.</li>
                <li>The scheduler selects an eligible thread for execution.</li>
                <li>The dispatcher carries out the handover of CPU control.</li>
                <li>Scheduling policies help determine how CPU time is distributed.</li>
                <li>When a thread waits for an event, another eligible thread may be selected.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> Imagine several workers
                waiting to use one shared machine. A manager decides
                who should use it next, and the machine operator
                carries out the handover.
            </p>

            <p>
                <strong>Example:</strong> While one thread waits
                for a file-reading operation to complete, the
                scheduler may select another ready thread.
            </p>

            <p>
                <strong>Technical note:</strong> Introductory process
                diagrams often describe scheduling in terms of
                processes. In many modern operating systems, the
                actual scheduling unit is a thread.
            </p>
        </div>
    </div>


    <!-- 13.5 PROCESS AND MEMORY MANAGEMENT -->

    <h3>13.5 Process and Memory Management</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>Each process generally has its own virtual address space.</li>
                <li>A program uses virtual addresses when accessing memory.</li>
                <li>Page tables help define how virtual addresses map to physical memory.</li>
                <li>The Memory Management Unit (MMU) performs hardware-assisted address translation.</li>
                <li>Memory protection helps prevent one process from accessing memory it is not permitted to access.</li>
                <li>Physical memory is managed and allocated as processes execute.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> Imagine that each process
                has its own numbered map of a building. The numbers
                on one map do not have to refer to the same physical
                rooms as the numbers on another map. The memory
                management system helps translate those virtual
                numbers into actual memory locations.
            </p>

            <p>
                <strong>Example:</strong> Two processes can use
                the same virtual address without necessarily
                accessing the same physical memory location.
            </p>

            <p>
                <strong>Connection:</strong> Virtual memory gives
                processes a structured view of memory, while
                address translation and protection mechanisms
                help the operating system manage access safely.
            </p>
        </div>
    </div>


    <!-- 13.6 PROCESS AND INTERRUPTS -->

    <h3>13.6 Process and Interrupts</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>An interrupt notifies the CPU that an event requires attention.</li>
                <li>Hardware devices can generate interrupts to signal events such as I/O completion.</li>
                <li>The processor transfers control to an appropriate interrupt-handling mechanism.</li>
                <li>The operating system handles the event and updates relevant information.</li>
                <li>The OS may change a process or thread's state if the event satisfies a condition it was waiting for.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> An interrupt is like a
                doorbell. It notifies someone that an event requires
                attention. The doorbell itself does not decide
                what happens next.
            </p>

            <p>
                <strong>Example:</strong> A device signals that
                an I/O operation has completed. The operating
                system handles the event and may move the
                waiting thread to the Ready state.
            </p>

            <p>
                <strong>Important distinction:</strong> An interrupt
                does not automatically make a process Ready.
                The operating system must determine what the event
                means and whether the waiting condition has been met.
            </p>
        </div>
    </div>


    <!-- 13.7 PROCESS AND IPC -->

    <h3>13.7 Process and Inter-Process Communication (IPC)</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>Separate processes sometimes need to exchange information.</li>
                <li>Inter-Process Communication (IPC) provides mechanisms for this exchange.</li>
                <li>Common mechanisms include pipes, sockets, message queues, and shared memory.</li>
                <li>Some IPC mechanisms transfer messages; others allow processes to access shared memory.</li>
                <li>Synchronization may be needed when processes access shared information.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> Imagine two separate
                offices communicating through a telephone,
                a message service, or a shared noticeboard.
            </p>

            <p>
                <strong>Example:</strong> A client application
                communicates with a separate server process
                through a network socket.
            </p>

            <p>
                <strong>Important distinction:</strong> Communication
                is about exchanging information. Synchronization
                is about coordinating access and timing so that
                shared resources are used correctly.
            </p>
        </div>
    </div>


    <!-- 13.8 PROCESS AND FILE SYSTEM -->

    <h3>13.8 Process and File System</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>Processes often need to create, open, read, write, and close files.</li>
                <li>The operating system provides interfaces for file operations.</li>
                <li>Programs normally request file services through system calls or operating-system APIs.</li>
                <li>The operating system and file-system components handle the requested operations.</li>
                <li>Applicable permissions and access controls determine whether an operation is allowed.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> A process is like an
                employee requesting documents from a records
                department. The department checks the request
                and provides access when authorised.
            </p>

            <p>
                <strong>Example:</strong> A text editor requests
                that the operating system open and read a document.
                Later, it may request that changes be written
                back to the file.
            </p>
        </div>
    </div>


    <!-- 13.9 PROCESS AND SYSTEM CALLS -->

    <h3>13.9 Process and System Calls</h3>

    <div class="concept-comparison">
        <div class="comparison-item">
            <h4>The Relationship</h4>

            <ul>
                <li>A program sometimes needs services that only the operating system can provide.</li>
                <li>A system call provides a controlled interface for requesting kernel services.</li>
                <li>Requests may involve file operations, process creation, memory management, and device I/O.</li>
                <li>The system call mechanism transfers control to the operating system's service-handling code.</li>
                <li>The kernel handles the request according to operating-system rules and permissions.</li>
            </ul>

            <p>
                <strong>Analogy:</strong> A system call is like
                submitting an official service request to an
                organisation's central administration. The
                administration handles the request according
                to its rules.
            </p>

            <p>
                <strong>Example:</strong> A program requests
                the operating system to create another process
                or open a file.
            </p>

            <p>
                <strong>Remember:</strong> A system call is not
                simply an ordinary function call. It provides
                a controlled way for a program to request
                operating-system services.
            </p>
        </div>
    </div>


    <!-- 13.10 BRINGING EVERYTHING TOGETHER -->

    <h3>13.10 Bringing Everything Together — The Big Picture</h3>

    <p>
        We have examined the individual relationships. Now let's
        see how they fit into the larger operating-system picture.
    </p>

    <div class="concept-note">

        <h4>From Program to Process</h4>

        <div class="concept-comparison">

            <div class="comparison-item">
                <h4>PROGRAM</h4>

                <p>
                    A set of instructions stored on a device.
                </p>
            </div>

            <div class="comparison-item">
                <h4>PROCESS</h4>

                <p>
                    An executing instance of a program,
                    managed by the operating system.
                </p>
            </div>

        </div>

        <p class="text-center">
            <strong>The process connects to several operating-system mechanisms:</strong>
        </p>

        <div class="concept-comparison">

            <div class="comparison-item">
                <h4>PCB</h4>
                <p>Maintains process-management information.</p>
            </div>

            <div class="comparison-item">
                <h4>THREADS</h4>
                <p>Provide individual paths of execution.</p>
            </div>

            <div class="comparison-item">
                <h4>CPU SCHEDULING</h4>
                <p>Selects eligible threads for CPU execution.</p>
            </div>

            <div class="comparison-item">
                <h4>MEMORY MANAGEMENT</h4>
                <p>Manages virtual address spaces and memory protection.</p>
            </div>

            <div class="comparison-item">
                <h4>INTERRUPTS</h4>
                <p>Notify the CPU of events requiring attention.</p>
            </div>

            <div class="comparison-item">
                <h4>IPC</h4>
                <p>Enables information exchange between processes.</p>
            </div>

            <div class="comparison-item">
                <h4>FILE SYSTEM</h4>
                <p>Provides services for file operations.</p>
            </div>

            <div class="comparison-item">
                <h4>SYSTEM CALLS</h4>
                <p>Provide controlled access to kernel services.</p>
            </div>

        </div>

        <p>
            <strong>How to interpret this picture:</strong>
            These concepts are connected, but they do not form
            one fixed sequence of execution steps. Each mechanism
            performs a different role and cooperates with the others
            when needed.
        </p>

        <p>
            For example, a process may contain multiple threads,
            use memory managed through virtual address translation,
            request file operations through system calls, and
            communicate with another process through IPC.
        </p>

    </div>


    <!-- 13.11 IMPORTANT TAKEAWAY -->

    <h3>13.11 Important Takeaway</h3>

    <div class="concept-note">

        <p>
            A process is not an isolated operating-system object.
            It is connected to CPU scheduling, memory management,
            threads, interrupts, system calls, file operations,
            and communication mechanisms.
        </p>

        <p>
            Each concept contributes a different capability:
            threads provide paths of execution, scheduling
            distributes CPU time, memory management controls
            address spaces, and IPC allows processes to exchange
            information.
        </p>

        <p>
            <strong>The central lesson:</strong> Understanding
            processes becomes much easier when we understand
            how they interact with the other components of
            an operating system.
        </p>

    </div>

</section>

<!-- END SECTION 13: CONNECTIONS TO OTHER OPERATING-SYSTEM CONCEPTS -->

<section id="knowledge-assessment" class="concept-section" aria-labelledby="knowledge-assessment-heading">

  <h2 id="knowledge-assessment-heading">14. Knowledge Assessment</h2>

  <div class="concept-note">
    <h3>Test Your Understanding</h3>

    <p>
      This assessment checks your understanding of processes,
      threads, process states, scheduling, memory management,
      interrupts, and communication between processes.
    </p>

    <p>
      Read each question carefully. Select the single best answer
      mentally before revealing the explanation.
    </p>

    <p>
      <strong>Total questions:</strong> 10
    </p>

    <p>
      <strong>Learning approach:</strong> Try to explain why an
      answer is correct. Understanding the reasoning is more
      important than memorising the answer letter.
    </p>
  </div>


  <!-- QUESTION 1 -->

  <article class="assessment-question">
    <h3>Question 1 — Program versus Process</h3>

    <p>
      Which statement best explains the difference between
      a program and a process?
    </p>

    <ol type="A">
      <li>A program is an executing application, while a process is a file stored on disk.</li>
      <li>A program is a set of stored instructions, while a process is an executing instance of a program.</li>
      <li>A program manages CPU scheduling, while a process manages physical memory.</li>
      <li>A program and a process are exactly the same thing.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: B</strong></p>

      <p>
        A program is a passive collection of instructions.
        When the operating system starts executing it, a process
        is created. A single program can have multiple process
        instances, depending on how it is launched and designed.
      </p>

      <p>
        <strong>Key lesson:</strong> A program contains instructions;
        a process is an executing instance managed by the OS.
      </p>
    </details>
  </article>


  <!-- QUESTION 2 -->

  <article class="assessment-question">
    <h3>Question 2 — Process versus Thread</h3>

    <p>
      Which statement correctly describes threads belonging
      to the same process?
    </p>

    <ol type="A">
      <li>Every thread has its own completely separate process address space.</li>
      <li>Threads share the process's address space and many resources, but each maintains its own execution context and stack.</li>
      <li>Threads belonging to the same process must always execute one after another.</li>
      <li>Threads do not require CPU scheduling.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: B</strong></p>

      <p>
        Threads within the same process generally share resources
        such as the process's address space and open files.
        However, each thread maintains its own execution context,
        including its registers, program counter, and stack.
      </p>

      <p>
        <strong>Key lesson:</strong> A process provides the shared
        environment; threads provide individual execution paths.
      </p>
    </details>
  </article>


  <!-- QUESTION 3 -->

  <article class="assessment-question">
    <h3>Question 3 — Process Control Block (PCB)</h3>

    <p>
      What is the primary purpose of a Process Control Block (PCB)?
    </p>

    <ol type="A">
      <li>To store the complete source code of a program.</li>
      <li>To permanently store a process's files on a storage device.</li>
      <li>To maintain information the operating system needs to manage and track a process.</li>
      <li>To increase the physical speed of the CPU.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: C</strong></p>

      <p>
        A PCB is an operating-system data structure containing
        process-management information, such as the process ID,
        state, scheduling information, and memory-management
        references.
      </p>

      <p>
        In a multithreaded system, individual threads also have
        their own execution-management information, commonly
        maintained in thread control structures.
      </p>

      <p>
        <strong>Key lesson:</strong> The PCB helps the OS manage
        a process. It is not the process's complete memory contents.
      </p>
    </details>
  </article>


  <!-- QUESTION 4 -->

  <article class="assessment-question">
    <h3>Question 4 — Ready versus Waiting</h3>

    <p>
      A process is waiting for an I/O operation. The operation
      completes, and the operating system handles the completion
      event. What state will the associated waiting execution
      normally enter next?
    </p>

    <ol type="A">
      <li>New</li>
      <li>Ready</li>
      <li>Terminated</li>
      <li>Running</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: B</strong></p>

      <p>
        Once the required I/O operation completes, the waiting
        execution can become eligible for CPU time. It normally
        moves from Waiting to Ready.
      </p>

      <p>
        It does not automatically become Running. The scheduler
        must select it, and CPU control must be transferred to it.
      </p>

      <p>
        <strong>Key lesson:</strong> Ready means eligible to run;
        Running means currently executing on a CPU.
      </p>
    </details>
  </article>


  <!-- QUESTION 5 -->

  <article class="assessment-question">
    <h3>Question 5 — Scheduler versus Dispatcher</h3>

    <p>
      What is the difference between the CPU scheduler
      and the dispatcher?
    </p>

    <ol type="A">
      <li>The scheduler selects an eligible thread to run; the dispatcher carries out the transfer of CPU control.</li>
      <li>The scheduler manages files; the dispatcher manages memory.</li>
      <li>The scheduler creates programs; the dispatcher terminates them.</li>
      <li>Both perform exactly the same function.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: A</strong></p>

      <p>
        The scheduler selects an eligible thread according to
        the scheduling policy. The dispatcher performs the
        handover of CPU control, including the necessary
        context-restoration work.
      </p>

      <p>
        <strong>Technical note:</strong> Basic process diagrams
        often describe scheduling in terms of processes.
        In many modern operating systems, the actual scheduling
        unit is a thread.
      </p>

      <p>
        <strong>Key lesson:</strong> The scheduler chooses;
        the dispatcher carries out the handover.
      </p>
    </details>
  </article>


  <!-- QUESTION 6 -->

  <article class="assessment-question">
    <h3>Question 6 — Context Switching</h3>

    <p>
      What happens during a context switch between two processes?
    </p>

    <ol type="A">
      <li>The operating system deletes both processes and creates new ones.</li>
      <li>The CPU permanently transfers all memory from one process to another.</li>
      <li>The operating system saves the outgoing execution context and restores the incoming process's execution context.</li>
      <li>Both processes execute simultaneously on a single CPU core.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: C</strong></p>

      <p>
        During a context switch, the operating system saves
        the relevant execution information of the outgoing
        process and restores the saved execution context
        of the incoming process.
      </p>

      <p>
        This allows the incoming process to continue from
        its saved execution point. Context switching has
        overhead because the CPU performs management work
        rather than application instructions during the switch.
      </p>

      <p>
        <strong>Important distinction:</strong> Context switches
        can also occur between threads belonging to the same
        process. They do not always involve two different processes.
      </p>
    </details>
  </article>


  <!-- QUESTION 7 -->

  <article class="assessment-question">
    <h3>Question 7 — Process Memory Management</h3>

    <p>
      Why does an operating system generally provide separate
      virtual address spaces for processes?
    </p>

    <ol type="A">
      <li>To ensure every process uses the same physical memory addresses.</li>
      <li>To provide memory isolation and help prevent unauthorised access between processes.</li>
      <li>To eliminate the need for physical RAM.</li>
      <li>To allow every process to control the Memory Management Unit directly.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: B</strong></p>

      <p>
        Separate virtual address spaces give processes their
        own protected memory views. The Memory Management Unit
        (MMU), working with operating-system-managed memory
        structures such as page tables, helps translate virtual
        addresses and enforce access permissions.
      </p>

      <p>
        This helps prevent one process from accessing another
        process's memory without permission.
      </p>

      <p>
        <strong>Key lesson:</strong> Virtual memory and memory
        protection help processes operate independently and safely.
      </p>
    </details>
  </article>


  <!-- QUESTION 8 -->

  <article class="assessment-question">
    <h3>Question 8 — Interrupts and I/O Completion</h3>

    <p>
      A device finishes an I/O operation and generates an interrupt.
      What is the operating system's role in handling this event?
    </p>

    <ol type="A">
      <li>Automatically terminate the process that requested the operation.</li>
      <li>Immediately execute the waiting process without scheduling.</li>
      <li>Handle the interrupt and, when appropriate, update the waiting execution so it can become Ready.</li>
      <li>Restart the entire computer.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: C</strong></p>

      <p>
        An interrupt notifies the CPU that an event requires
        attention. The operating system handles the event and,
        when the relevant waiting condition has been satisfied,
        may move the associated process or thread to the Ready state.
      </p>

      <p>
        The scheduler then determines when the eligible execution
        receives CPU time.
      </p>

      <p>
        <strong>Key lesson:</strong> An interrupt reports an event;
        the operating system handles it and determines the
        appropriate state transition.
      </p>
    </details>
  </article>


  <!-- QUESTION 9 -->

  <article class="assessment-question">
    <h3>Question 9 — Inter-Process Communication (IPC)</h3>

    <p>
      Two processes use a shared-memory region to exchange
      information. What additional concern must they consider
      if both can access the same data concurrently?
    </p>

    <ol type="A">
      <li>They must use separate physical CPUs.</li>
      <li>They must prevent either process from entering the Ready state.</li>
      <li>They must ensure that the shared memory is permanently read-only.</li>
      <li>They may need synchronization to prevent race conditions.</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: D</strong></p>

      <p>
        Shared memory allows processes to exchange information
        efficiently. However, concurrent access can cause
        race conditions if operations interfere with one another.
      </p>

      <p>
        Synchronization mechanisms such as mutexes and semaphores
        help coordinate access and protect shared data.
      </p>

      <p>
        <strong>Key lesson:</strong> IPC enables communication;
        synchronization helps ensure that concurrent access
        is coordinated correctly.
      </p>
    </details>
  </article>


  <!-- QUESTION 10 -->

  <article class="assessment-question">
    <h3>Question 10 — Applying the Process Lifecycle</h3>

    <p>
      A text editor requests a synchronous, blocking file read
      through a system call. The required data is not immediately
      available, so the executing thread must wait for storage I/O.
      Which sequence best describes what can happen to that
      execution?
    </p>

    <ol type="A">
      <li>Running → Terminated → New</li>
      <li>Running → Waiting → Ready → Running</li>
      <li>Ready → New → Waiting → Terminated</li>
      <li>Waiting → Running → New → Ready</li>
    </ol>

    <details>
      <summary>Reveal answer and explanation</summary>

      <p><strong>Correct answer: B</strong></p>

      <p>
        The thread is Running when it requests the file-reading
        operation. Because the read is blocking and the data
        is not immediately available, the thread enters Waiting.
      </p>

      <p>
        After the I/O completes and the operating system handles
        the completion event, the thread can move to Ready.
        It returns to Running when selected by the scheduler
        and given CPU time.
      </p>

      <p>
        <strong>Key lesson:</strong> Blocking I/O can cause an
        executing thread to wait. I/O completion makes it eligible
        to run again, but does not guarantee immediate execution.
      </p>
    </details>
  </article>


  <!-- ASSESSMENT TAKEAWAY -->

  <div class="concept-note">
    <h3>Assessment Complete — What Have You Learned?</h3>

    <p>
      You have reviewed the fundamental relationships between
      programs, processes, threads, scheduling, memory management,
      interrupts, system calls, and inter-process communication.
    </p>

    <p>
      These concepts work together to help an operating system
      coordinate execution, manage resources, and protect
      processes from interfering with one another.
    </p>

    <p>
      <strong>Final learning challenge:</strong> Try explaining
      how a program becomes a process, how its threads receive
      CPU time, and how the operating system handles an I/O
      request without looking back at the earlier sections.
    </p>
  </div>

</section>

<!-- END SECTION 14: KNOWLEDGE ASSESSMENT -->










