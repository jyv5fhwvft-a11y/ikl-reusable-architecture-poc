---
content_block_id: IKL-OS-003-CB-04
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-04
section_number: 4
section_title: Beginner Explanation
block_type: html-section
order: 4
---

<section id="threads-beginner-explanation" class="concept-section" aria-labelledby="threads-section-4-heading">

    <h2 id="threads-section-4-heading">
        4. Beginner Explanation
    </h2>

    <h3>Understanding Threads in a Running Program</h3>

    <p>
        We have learned that a thread is a path of execution
        within a process.
    </p>

    <p>
        Now let’s explore what this means when a computer
        runs an application.
    </p>

    <p>
        Imagine opening a web browser. The browser may need
        to perform several activities:
    </p>

    <ul>
        <li>Display web pages.</li>
        <li>Respond to mouse clicks or screen taps.</li>
        <li>Process information received from the network.</li>
        <li>Play audio or video.</li>
        <li>Update parts of the screen.</li>
    </ul>

    <p>
        A browser can organise different activities using
        multiple threads.
    </p>

    <p>
        This can help the application remain responsive
        while work is being performed.
    </p>

    <p>
        The exact organisation depends on the browser’s design.
        Some applications also use multiple processes, so not
        every activity necessarily belongs to one process.
    </p>

    <h3>Program, Process and Thread</h3>

    <p>
        These three terms describe different things.
    </p>

    <div class="concept-note">
        <h4>1. Program</h4>

        <p>
            A program is a collection of instructions stored
            on a computer.
        </p>

        <p>
            For example, a web browser application stored
            on your device is a program.
        </p>

        <h4>2. Process</h4>

        <p>
            When you start the browser, the operating system
            creates a process.
        </p>

        <p>
            A process provides an execution environment and
            resources, such as memory and access to files.
        </p>

        <p>
            A process can contain one or more threads.
        </p>

        <h4>3. Thread</h4>

        <p>
            A thread is an individual path of execution
            within a process.
        </p>

        <p>
            It carries out instructions and maintains its
            own execution context.
        </p>
    </div>

    <p>A process can have:</p>

    <ul>
        <li>One thread, called a single-threaded process.</li>
        <li>Multiple threads, called a multithreaded process.</li>
    </ul>

    <h3>What Do Threads Share?</h3>

    <p>
        Threads belonging to the same process share many
        of its resources.
    </p>

    <p>These commonly include:</p>

    <ul>
        <li>
            <strong>Program code:</strong>
            The instructions the process executes.
        </li>
        <li>
            <strong>Global and static data:</strong>
            Data available to different parts of the program.
        </li>
        <li>
            <strong>Heap memory:</strong>
            Memory used for dynamically allocated data.
        </li>
        <li>
            <strong>Open files and other process resources:</strong>
            Resources managed on behalf of the process.
        </li>
    </ul>

    <p>
        Sharing resources allows threads to communicate
        and work with common information.
    </p>

    <p>
        For example, two threads in the same process may
        access the same shared data structure.
    </p>

    <p>
        However, sharing also introduces risks if threads
        modify shared information without proper coordination.
    </p>

    <h3>What Does Each Thread Have Separately?</h3>

    <p>
        Although threads share many process resources,
        each thread maintains its own execution context.
    </p>

    <p>
        Important thread-specific information includes:
    </p>

    <h4>Program Counter</h4>

    <p>
        The program counter (PC) identifies the next
        instruction that a thread is due to execute.
    </p>

    <p>
        Different threads can be at different points
        in the program.
    </p>

    <h4>CPU Registers</h4>

    <p>
        CPU registers hold information needed during execution.
    </p>

    <p>
        Each thread needs its own saved register context
        so that its execution can resume correctly.
    </p>

    <h4>Stack</h4>

    <p>
        Each thread has its own stack.
    </p>

    <p>
        The stack holds information associated with
        function calls, including return information
        and local variables.
    </p>

    <p>
        The stacks occupy separate regions within the
        process’s virtual address space.
    </p>

    <h4>Thread State</h4>

    <p>
        A thread also has a current execution state.
    </p>

    <p>
        For example, it may be ready to run, currently
        running, waiting for an event, or terminated.
    </p>

    <h3>Why Do Programs Use Multiple Threads?</h3>

    <p>
        Multithreading can provide several benefits.
    </p>

    <h4>1. Responsiveness</h4>

    <p>
        An application can continue responding to a user
        while another thread performs work.
    </p>

    <p>
        For example, a browser may remain responsive while
        a separate activity processes information received
        from a network.
    </p>

    <h4>2. Resource Sharing</h4>

    <p>
        Threads within the same process can access shared
        process resources.
    </p>

    <p>
        This can make communication between related activities
        easier than communicating between completely separate
        processes.
    </p>

    <h4>3. Concurrency</h4>

    <p>
        Multiple threads can make progress during overlapping
        periods.
    </p>

    <p>
        On a single CPU core, the operating system can switch
        between threads so that each gets an opportunity to execute.
    </p>

    <h4>4. Parallelism</h4>

    <p>
        On a computer with multiple CPU cores, different
        threads may execute simultaneously on different cores.
    </p>

    <p>
        This can improve performance when the work can be
        divided effectively.
    </p>

    <p>
        Actual performance depends on the application,
        hardware and workload.
    </p>

    <h3>Concurrency vs Parallelism</h3>

    <p>
        These terms are related but different.
    </p>

    <div class="concept-table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Concurrency</th>
                    <th>Parallelism</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Multiple tasks make progress during overlapping periods</td>
                    <td>Multiple tasks execute simultaneously</td>
                </tr>
                <tr>
                    <td>Can happen on one CPU core through switching</td>
                    <td>Requires multiple execution resources for simultaneous execution</td>
                </tr>
                <tr>
                    <td>Focuses on organising multiple activities</td>
                    <td>Focuses on simultaneous execution</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="concept-note">
        <p>
            <strong>Remember:</strong>
            Concurrency is about managing overlapping work.
            Parallelism is about doing work at the same time.
        </p>
    </div>

    <h3>What Happens When Threads Share Data?</h3>

    <p>
        Sharing resources is useful, but it can create problems.
    </p>

    <p>
        Imagine a bank account containing $100.
    </p>

    <p>
        Two threads each want to deposit $10.
    </p>

    <p>
        Both threads read the current balance before either
        has completed its update.
    </p>

    <p>They may each calculate:</p>

    <p><strong>$100 + $10 = $110</strong></p>

    <p>
        If both write $110, one deposit is lost.
    </p>

    <p>
        The correct balance should be $120.
    </p>

    <div class="concept-note">
        <h4>Race Condition</h4>

        <p>
            This is an example of a <strong>race condition</strong>.
        </p>

        <p>
            A race condition occurs when the result of a program
            depends on the timing or order of concurrent operations.
        </p>
    </div>

    <h3>How Can We Prevent Race Conditions?</h3>

    <p>
        Operating systems and programming environments provide
        synchronisation mechanisms.
    </p>

    <p>Important examples include:</p>

    <h4>Mutex</h4>

    <p>
        A mutex (mutual-exclusion lock) protects a critical
        section so that only one thread at a time can enter
        it under the same locking discipline.
    </p>

    <h4>Semaphore</h4>

    <p>
        A semaphore controls access using a counter and permits.
        It can coordinate access to limited resources or signal
        between threads.
    </p>

    <h4>Condition Variable</h4>

    <p>
        A condition variable allows a thread to wait until
        a particular condition becomes true. It is normally
        used together with a mutex.
    </p>

    <p>
        These mechanisms help threads coordinate access
        to shared information.
    </p>

    <p>
        They must be used correctly. Incorrect synchronisation
        can still lead to problems such as deadlocks.
    </p>

    <h3>Six Beginner Knowledge Checks</h3>

    <div class="concept-knowledge-check">

        <h4>Question 1</h4>

        <p>What is a thread?</p>

        <p>
            <strong>Answer:</strong>
            A path of execution within a process.
        </p>

        <p>
            <strong>Explanation:</strong>
            A thread carries out work inside the process’s
            execution environment.
        </p>

        <h4>Question 2</h4>

        <p>Can a process contain multiple threads?</p>

        <p><strong>Answer:</strong> Yes.</p>

        <p>
            <strong>Explanation:</strong>
            A process can contain one or more threads.
        </p>

        <h4>Question 3</h4>

        <p>
            Which resources can threads in the same process share?
        </p>

        <p>
            <strong>Answer:</strong>
            Program code, global and static data, heap memory,
            and open files.
        </p>

        <p>
            <strong>Explanation:</strong>
            These are examples of resources belonging to the
            shared process environment.
        </p>

        <h4>Question 4</h4>

        <p>
            Which information does each thread maintain separately?
        </p>

        <p>
            <strong>Answer:</strong>
            Its program counter, CPU register context, stack
            and execution state.
        </p>

        <p>
            <strong>Explanation:</strong>
            Each thread needs its own execution context so it
            can progress independently of other threads.
        </p>

        <h4>Question 5</h4>

        <p>
            What is the difference between concurrency
            and parallelism?
        </p>

        <p>
            <strong>Answer:</strong>
            Concurrency means multiple tasks make progress
            during overlapping periods. Parallelism means
            multiple tasks execute simultaneously.
        </p>

        <p>
            <strong>Explanation:</strong>
            A single CPU core can support concurrency by
            switching between threads, while multiple cores
            can support simultaneous execution.
        </p>

        <h4>Question 6</h4>

        <p>What is a race condition?</p>

        <p>
            <strong>Answer:</strong>
            A situation where the result depends on the
            timing or order of concurrent operations.
        </p>

        <p>
            <strong>Explanation:</strong>
            Threads accessing shared data without proper
            coordination can produce incorrect results.
        </p>

    </div>

    <h3>Beginner Revision Summary</h3>

    <p>
        Before moving to the technical explanation,
        remember these six ideas:
    </p>

    <ol>
        <li>A program contains instructions.</li>
        <li>A process provides the running environment and resources.</li>
        <li>A thread is a path of execution within a process.</li>
        <li>Threads share many process resources but maintain their own execution contexts.</li>
        <li>Multithreading can improve responsiveness and support concurrency and parallelism.</li>
        <li>Synchronisation helps protect shared data from conflicting operations.</li>
    </ol>

</section>
