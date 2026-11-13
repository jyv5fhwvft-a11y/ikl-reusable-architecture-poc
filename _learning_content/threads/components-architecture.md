---
content_block_id: IKL-OS-003-CB-06
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-06
section_number: 6
section_title: Thread Components and Architecture
block_type: html-section
order: 6
---

<section id="threads-components-architecture" class="concept-section" aria-labelledby="threads-section-6-heading">
  <span id="ikl-learn-how-it-works"
        class="ikl-learning-anchor"
        aria-hidden="true"></span>

  <h2 id="threads-section-6-heading">6. Thread Components and Architecture</h2>

  <div class="concept-identity-card">
    <h3>How Processes and Threads Are Organised</h3>
    <p>A process can contain one or more threads. A process provides the resources needed by its threads. Each thread uses those shared resources while maintaining its own execution information.</p>
  </div>

  <h3>6.1 Understanding the Architecture</h3>

  <p>Think of a process as a shared workspace. Several workers can use the same workspace, equipment and documents, but each worker has their own current task and working position.</p>

  <p>In an operating system, the shared workspace represents the process, while each worker represents a thread.</p>

  <h3>6.2 Resources Shared by Threads</h3>

  <p>Threads belonging to the same process commonly share:</p>

  <ul>
    <li><strong>Program code:</strong> The instructions that make up the program.</li>
    <li><strong>Global and static data:</strong> Variables and data stored for the process.</li>
    <li><strong>Heap memory:</strong> Memory used for dynamically allocated objects and data.</li>
    <li><strong>Open files and other resources:</strong> Files, communication resources and other process-associated resources.</li>
  </ul>

  <p>Sharing these resources allows threads to cooperate and exchange information without needing separate processes for every task.</p>

  <p>However, shared access must be managed carefully. If multiple threads modify the same data without suitable coordination, race conditions can occur.</p>

  <h3>6.3 Information Belonging to Each Thread</h3>

  <p>Each thread maintains its own execution context. Important thread-specific information includes:</p>

  <ul>
    <li><strong>Thread ID:</strong> An identifier used to distinguish the thread.</li>
    <li><strong>Program Counter (PC):</strong> Identifies the next instruction in the thread’s execution.</li>
    <li><strong>CPU Registers:</strong> Hold values the thread currently needs while executing.</li>
    <li><strong>Stack:</strong> Holds information associated with function calls, local variables and return addresses.</li>
    <li><strong>Thread State:</strong> Describes whether the thread is ready, running, waiting or in another lifecycle state.</li>
    <li><strong>Thread-Local Storage (TLS):</strong> Holds data intended to be specific to an individual thread.</li>
  </ul>

  <p>Each thread needs its own stack because different threads can be executing different functions, with different local variables and return addresses.</p>

  <p>The stacks are separate regions within the process’s virtual address space. They are not necessarily separate physical memory devices.</p>

  <div class="concept-note">
    <strong>Important distinction:</strong> Threads share many resources within the process, but each thread maintains its own execution context.
  </div>

  <h3>6.4 Conceptual Process and Thread Architecture</h3>

  <p>The following diagram illustrates one process containing three threads.</p>

  <pre class="concept-diagram" aria-label="One process containing shared resources and three individual threads"><code>                 PROCESS
        ┌───────────────────────────┐
        │                           │
        │       Shared Resources    │
        │                           │
        │   Program Code            │
        │   Global / Static Data    │
        │   Heap Memory             │
        │   Open Files              │
        │                           │
        ├─────────┬─────────┬───────┤
        │         │         │       │
        │ Thread 1│ Thread 2│Thread 3
        │         │         │       │
        │ PC      │ PC      │ PC    │
        │ Registers│Registers│Registers
        │ Stack   │ Stack   │ Stack │
        │ State   │ State   │ State │
        │ TLS     │ TLS     │ TLS   │
        │         │         │       │
        └─────────┴─────────┴───────┘</code></pre>

  <h4>How to Read This Diagram</h4>

  <ol>
    <li>The outer process represents the shared resource environment.</li>
    <li>All three threads can access the process’s shared resources, subject to appropriate protection and coordination.</li>
    <li>Each thread has its own program counter, registers, stack, state and thread-local data.</li>
    <li>The operating system manages the execution of threads according to its scheduling mechanisms.</li>
  </ol>

  <p>This is a conceptual diagram. Actual operating-system data structures and memory layouts vary.</p>

  <h3>6.5 How the Operating System Manages Threads</h3>

  <p>The operating system and its supporting runtime mechanisms manage thread execution.</p>

  <p>A simplified view of the process is:</p>

  <ol>
    <li><strong>Thread creation:</strong> A program or runtime requests the creation of a thread.</li>
    <li><strong>Thread registration:</strong> The system maintains the information needed to identify and manage the thread.</li>
    <li><strong>Ready state:</strong> When eligible to run, the thread can wait in a ready state.</li>
    <li><strong>Scheduling:</strong> The scheduler selects an eligible thread for CPU execution.</li>
    <li><strong>Execution:</strong> The thread runs using its execution context and the process resources it can access.</li>
    <li><strong>Waiting or blocking:</strong> A thread may wait for input, an event, a resource or another condition.</li>
    <li><strong>Resuming:</strong> When the required condition is satisfied, the thread can become ready again.</li>
    <li><strong>Termination:</strong> The thread finishes or is stopped, and its associated resources are handled appropriately.</li>
  </ol>

  <p>The exact implementation depends on the operating system and threading model.</p>

  <h3>6.6 Component Explorer: Shared or Individual?</h3>

  <p>Use the following comparison to test your understanding.</p>

  <div class="concept-table-wrapper">
    <table>
      <thead>
        <tr>
          <th scope="col">Component</th>
          <th scope="col">Shared by process threads or individual to each thread?</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Program code</td><td>Shared</td></tr>
        <tr><td>Global variables</td><td>Shared</td></tr>
        <tr><td>Heap memory</td><td>Shared</td></tr>
        <tr><td>Open files</td><td>Commonly shared</td></tr>
        <tr><td>Program Counter</td><td>Individual</td></tr>
        <tr><td>CPU Registers</td><td>Individual</td></tr>
        <tr><td>Stack</td><td>Individual</td></tr>
        <tr><td>Thread State</td><td>Individual</td></tr>
        <tr><td>Thread-Local Storage</td><td>Individual</td></tr>
      </tbody>
    </table>
  </div>

  <div class="concept-note">
    <strong>Remember:</strong> Threads share many process resources, but each thread needs its own execution context.
  </div>

  <h3>6.7 Practical Example: A Music Application</h3>

  <p>Imagine a music application playing a song while you browse your playlist.</p>

  <p>The application might use different threads for different tasks:</p>

  <ul>
    <li><strong>Playback thread:</strong> Helps manage the playback task.</li>
    <li><strong>User-interface thread:</strong> Responds to button presses and screen interactions.</li>
    <li><strong>Download thread:</strong> Handles downloading music.</li>
    <li><strong>Background processing thread:</strong> Performs other supporting tasks.</li>
  </ul>

  <p>These threads may share the application’s code, data, heap memory and open resources.</p>

  <p>But each thread maintains its own execution information, such as its program counter, registers and stack.</p>

  <p>This arrangement can help the application remain responsive while several tasks are being performed.</p>

  <p>The exact number of threads and their responsibilities depend on the application’s design.</p>

  <h3>6.8 Benefits and Limitations of This Architecture</h3>

  <h4>Benefits</h4>

  <ul>
    <li>Threads can share information through common process resources.</li>
    <li>Creating and managing threads can be less resource-intensive than creating separate processes, depending on the operating system.</li>
    <li>Multiple tasks can make progress concurrently.</li>
    <li>On suitable multicore systems, threads may execute in parallel.</li>
    <li>A well-designed multithreaded application can remain responsive during background work.</li>
  </ul>

  <h4>Limitations</h4>

  <ul>
    <li>Shared data can create race conditions.</li>
    <li>Synchronisation adds design and execution complexity.</li>
    <li>Poor coordination can cause deadlocks or starvation.</li>
    <li>Too many threads can increase memory use and scheduling overhead.</li>
    <li>A problem in one thread can sometimes affect the entire process because threads share the same process environment.</li>
  </ul>

  <h3>6.9 Key Takeaways</h3>

  <ul>
    <li>A process provides a shared resource environment for its threads.</li>
    <li>Threads commonly share code, global data, heap memory and process-associated resources.</li>
    <li>Each thread maintains its own program counter, CPU registers, stack and execution state.</li>
    <li>Thread-local storage provides data specific to an individual thread.</li>
    <li>The operating system manages thread execution through mechanisms such as scheduling and state transitions.</li>
    <li>Sharing resources is useful, but it makes synchronisation important.</li>
  </ul>

  <div class="concept-note">
    <strong>Key principle:</strong> One process can contain several threads. They share the process’s resources, but each thread has its own path of execution.
  </div>

</section>
