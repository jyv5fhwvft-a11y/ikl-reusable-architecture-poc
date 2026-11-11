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

