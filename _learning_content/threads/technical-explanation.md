---
content_block_id: IKL-OS-003-CB-05
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-05
section_number: 5
section_title: Technical Explanation
block_type: html-section
order: 5
---

<section id="threads-technical-explanation" class="concept-section" aria-labelledby="threads-section-5-heading">

  <h2 id="threads-section-5-heading">5. Technical Explanation</h2>

  <div class="concept-identity-card">
    <h3>Understanding Threads at the Operating-System Level</h3>
    <p>A thread is an execution entity within a process. It represents an individual path of instruction execution. A process provides the resources and execution environment within which its threads operate.</p>
  </div>

  <h3>5.1 What Is a Thread Technically?</h3>

  <p>Each thread maintains its own execution context, while threads belonging to the same process share many process-level resources.</p>

  <p>In modern operating systems, the kernel generally schedules kernel-visible execution entities, commonly kernel threads. However, some programming language runtimes and thread libraries also implement user-level threads and schedule them in user space.</p>

  <p>The precise thread model depends on the operating system and runtime implementation.</p>

  <h3>5.2 Process-Level Resources vs Thread-Level Execution Context</h3>

  <p>Understanding the difference between shared process resources and individual thread information is fundamental to understanding multithreading.</p>

  <h4>Resources Commonly Shared by Threads</h4>

  <p>Threads belonging to the same process commonly share:</p>
  <ul>
    <li>Program code and executable instructions.</li>
    <li>Global and static data.</li>
    <li>Heap memory.</li>
    <li>Open files and file descriptors.</li>
    <li>Other resources belonging to the process.</li>
  </ul>

  <p>These shared resources allow threads to work with common information.</p>

  <h4>Information Maintained Separately by Each Thread</h4>

  <p>Each thread has its own:</p>
  <ul>
    <li>Thread identifier (TID).</li>
    <li>Program counter (PC).</li>
    <li>CPU register context.</li>
    <li>Stack.</li>
    <li>Execution state.</li>
    <li>Thread-local storage (TLS).</li>
  </ul>

  <p>This separation allows threads to follow different execution paths within the same process.</p>

  <div class="concept-note">
    <strong>Key distinction:</strong> Threads share many process-level resources, but each thread needs its own execution context to keep track of where and how it is executing.
  </div>

  <h3>5.3 Thread Execution Context</h3>

  <p>A thread’s execution context contains the information needed to manage and resume its execution.</p>

  <h4>Program Counter</h4>
  <p>The program counter identifies the next instruction that the thread is expected to execute.</p>
  <p>Different threads can have different program-counter values because they may be executing different instructions.</p>

  <h4>CPU Registers</h4>
  <p>CPU registers temporarily hold values needed during instruction execution.</p>
  <p>When a thread is interrupted or switched out, its register context must be preserved so it can resume correctly later.</p>

  <h4>Stack</h4>
  <p>Each thread has its own stack.</p>
  <p>A stack stores information associated with function calls, including:</p>
  <ul>
    <li>Function parameters and return information.</li>
    <li>Local variables with automatic storage duration.</li>
    <li>Saved execution information used during function calls.</li>
  </ul>
  <p>Each thread needs a separate stack because threads may be executing different functions with different local execution information.</p>
  <p>The stacks normally occupy separate regions within the process’s virtual address space.</p>

  <h4>Thread State</h4>
  <p>The thread state describes its current execution condition.</p>
  <p>Common conceptual states include:</p>
  <ul>
    <li><strong>New:</strong> The thread is being created.</li>
    <li><strong>Ready:</strong> The thread is prepared to run and waiting for CPU time.</li>
    <li><strong>Running:</strong> The thread is currently executing.</li>
    <li><strong>Blocked or Waiting:</strong> The thread cannot currently proceed until an event or condition occurs.</li>
    <li><strong>Terminated:</strong> The thread has finished execution.</li>
  </ul>
  <p>Actual state names and implementation details vary between operating systems.</p>

  <h4>Thread-Local Storage</h4>
  <p>Thread-local storage (TLS) provides data that is logically private to an individual thread.</p>
  <p>Different threads can access their own TLS instances without using the same instance of that thread-local data.</p>
  <p>TLS is useful when a thread needs information that persists across function calls but should not be shared as ordinary process-wide data.</p>

  <h3>5.4 Process Control Block and Thread Control Block</h3>

  <p>Operating systems maintain information needed to manage processes and threads.</p>

  <h4>Process Control Block (PCB)</h4>
  <p>A Process Control Block is a conceptual operating-system data structure containing information about a process.</p>
  <p>It may include information about:</p>
  <ul>
    <li>Process identification.</li>
    <li>Process state.</li>
    <li>Memory-management information.</li>
    <li>Resource ownership.</li>
    <li>Relationships with other processes.</li>
    <li>Scheduling and accounting information.</li>
  </ul>

  <h4>Thread Control Block (TCB)</h4>
  <p>A Thread Control Block is a conceptual data structure containing information about an individual thread.</p>
  <p>It may include:</p>
  <ul>
    <li>Thread identification.</li>
    <li>Thread state.</li>
    <li>Saved program counter.</li>
    <li>Saved CPU registers.</li>
    <li>Scheduling information.</li>
    <li>Stack and thread-specific information.</li>
  </ul>

  <div class="concept-note">
    <strong>Technical qualification:</strong> The PCB and TCB are useful teaching models. Actual operating systems use implementation-specific structures and may organise this information differently.
  </div>

  <h3>5.5 User-Level Threads and Kernel-Level Threads</h3>

  <p>Threads can be implemented and managed at different levels.</p>

  <h4>User-Level Threads</h4>
  <p>User-level threads are managed by a user-space thread library or runtime.</p>
  <p>The operating-system kernel may not know about each individual user-level thread.</p>

  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Thread operations can be efficient because some operations happen without entering the kernel.</li>
    <li>The runtime can implement its own scheduling policies.</li>
    <li>Thread management can be tailored to the programming environment.</li>
  </ul>

  <p><strong>Limitations:</strong></p>
  <ul>
    <li>If the implementation maps multiple user threads onto one kernel execution entity, a blocking system call may prevent the other user threads on that entity from progressing.</li>
    <li>True simultaneous execution across CPU cores is not available to threads mapped to a single kernel execution entity.</li>
    <li>The kernel cannot independently schedule individual user-level threads it does not know about.</li>
  </ul>
  <p>These limitations depend on the mapping model and runtime design.</p>

  <h4>Kernel-Level Threads</h4>
  <p>Kernel-level threads are visible to and managed by the operating-system kernel.</p>

  <p><strong>Advantages:</strong></p>
  <ul>
    <li>The kernel can schedule individual kernel threads.</li>
    <li>Multiple kernel threads may execute simultaneously on different CPU cores.</li>
    <li>A thread waiting for an event does not necessarily prevent other threads in the same process from executing.</li>
  </ul>

  <p><strong>Limitations:</strong></p>
  <ul>
    <li>Kernel involvement can make some thread-management operations more expensive.</li>
    <li>Scheduling and context management require operating-system resources.</li>
  </ul>

  <h3>5.6 Thread Mapping Models</h3>

  <p>User-level threads can be mapped to kernel-level threads in different ways.</p>

  <h4>Many-to-One Model</h4>
  <p>Many user-level threads map to one kernel thread.</p>
  <ul>
    <li>Thread management can be performed in user space.</li>
    <li>Only one mapped kernel execution entity is available.</li>
    <li>A blocking operation can prevent all user threads using that entity from progressing.</li>
    <li>The mapped threads cannot execute simultaneously on multiple CPU cores.</li>
  </ul>

  <h4>One-to-One Model</h4>
  <p>Each user-level thread maps to a separate kernel thread.</p>
  <ul>
    <li>The kernel can schedule the threads independently.</li>
    <li>Threads may execute simultaneously on different CPU cores.</li>
    <li>Blocking one thread does not necessarily block the others.</li>
    <li>Creating and managing many threads can introduce greater overhead.</li>
  </ul>

  <h4>Many-to-Many Model</h4>
  <p>Many user-level threads are multiplexed over a number of kernel threads.</p>
  <ul>
    <li>The runtime can manage many user-level threads.</li>
    <li>Multiple kernel execution entities can support parallel execution.</li>
    <li>Blocking one kernel thread does not necessarily stop all user-level threads.</li>
    <li>The mapping and scheduling mechanisms are more complex.</li>
  </ul>

  <p>Actual operating systems and runtime implementations differ; these models describe conceptual mapping strategies.</p>

  <h3>5.7 Thread Lifecycle Operations</h3>

  <p>A program or runtime may perform several operations during a thread’s lifetime.</p>

  <h4>Create</h4>
  <p>A new thread is created and initialised with its execution context.</p>

  <h4>Run</h4>
  <p>The thread becomes eligible for execution and may be scheduled on a CPU.</p>

  <h4>Join</h4>
  <p>One thread waits for another thread to finish and may retrieve its result or completion status.</p>

  <h4>Detach</h4>
  <p>In APIs that support detaching, a thread’s completion resources can be reclaimed automatically when it finishes, without another thread joining it.</p>

  <h4>Terminate</h4>
  <p>A thread finishes its execution or is otherwise terminated according to the relevant API and operating-system rules.</p>

  <div class="concept-note">
    <strong>API-dependent behaviour:</strong> Joining and detaching are familiar concepts in POSIX threads, but not every programming environment exposes identical operations.
  </div>

  <p>The behaviour of the main thread also depends on the programming language, runtime and operating-system API. In some environments, returning from the main function terminates the process and its remaining threads; in others, the runtime may apply different rules.</p>

  <h3>5.8 Scheduling vs Context Switching</h3>

  <p>These terms are related but describe different activities.</p>

  <h4>Thread Scheduling</h4>
  <p>Scheduling is the process of selecting which eligible thread should receive CPU time.</p>
  <p>The scheduler considers factors such as scheduling policy, priority and thread state.</p>

  <h4>Dispatching</h4>
  <p>Dispatching is the act of assigning the CPU to the selected thread so it can execute.</p>

  <h4>Context Switching</h4>
  <p>A context switch occurs when the CPU stops executing one thread and switches to another execution context.</p>
  <p>The operating system saves the outgoing thread’s necessary execution information and restores the incoming thread’s saved context.</p>
  <p>Context switching enables the CPU to alternate between threads.</p>
  <p>It introduces overhead because the CPU and operating system must perform management work rather than only executing application instructions.</p>
  <p>A context switch is not necessarily the same as a process switch. Threads within the same process can switch execution while continuing to share the same process address space.</p>

  <h3>5.9 Technical Summary</h3>

  <div class="concept-table-wrapper">
    <table>
      <thead>
        <tr>
          <th scope="col">Concept</th>
          <th scope="col">Technical meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Thread</td><td>Individual path of execution within a process</td></tr>
        <tr><td>Program counter</td><td>Identifies the next instruction for a thread</td></tr>
        <tr><td>CPU registers</td><td>Hold execution information needed by the thread</td></tr>
        <tr><td>Stack</td><td>Stores function-call and local execution information</td></tr>
        <tr><td>Thread state</td><td>Describes the thread’s execution condition</td></tr>
        <tr><td>TLS</td><td>Thread-specific data</td></tr>
        <tr><td>PCB</td><td>Conceptual information structure for a process</td></tr>
        <tr><td>TCB</td><td>Conceptual information structure for a thread</td></tr>
        <tr><td>User-level thread</td><td>Thread managed by a user-space runtime or library</td></tr>
        <tr><td>Kernel-level thread</td><td>Thread visible to and managed by the kernel</td></tr>
        <tr><td>Scheduling</td><td>Selection of an eligible thread for CPU time</td></tr>
        <tr><td>Context switch</td><td>Switching the CPU from one execution context to another</td></tr>
      </tbody>
    </table>
  </div>

  <div class="concept-note">
    <strong>Key principle:</strong> A process provides the shared resources and environment. Threads provide individual execution paths, each with its own execution context, managed according to the operating system and runtime’s threading model.
  </div>

</section>
