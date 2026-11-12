---
content_block_id: IKL-OS-003-CB-05
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-05
section_number: 5
section_title: Technical Explanation
block_type: html-section
order: 5
---

5. Technical Explanation

5.1 What Is a Thread Technically?

A thread is an execution entity within a process. It represents an individual path of instruction execution.

A process provides the resources and execution environment within which its threads operate.

Each thread maintains its own execution context, while threads belonging to the same process share many process-level resources.

In modern operating systems, the kernel generally schedules kernel-visible execution entities, commonly kernel threads. However, some programming language runtimes and thread libraries also implement user-level threads and schedule them in user space.

The precise thread model depends on the operating system and runtime implementation.

5.2 Process-Level Resources vs Thread-Level Execution Context

Understanding the difference between shared process resources and individual thread information is fundamental to understanding multithreading.

Resources commonly shared by threads

Threads belonging to the same process commonly share:

* Program code and executable instructions.
* Global and static data.
* Heap memory.
* Open files and file descriptors.
* Other resources belonging to the process.

These shared resources allow threads to work with common information.

Information maintained separately by each thread

Each thread has its own:

* Thread identifier (TID).
* Program counter (PC).
* CPU register context.
* Stack.
* Execution state.
* Thread-local storage (TLS).

This separation allows threads to follow different execution paths within the same process.

5.3 Thread Execution Context

A thread’s execution context contains the information needed to manage and resume its execution.

Program Counter

The program counter identifies the next instruction that the thread is expected to execute.

Different threads can have different program-counter values because they may be executing different instructions.

CPU Registers

CPU registers temporarily hold values needed during instruction execution.

When a thread is interrupted or switched out, its register context must be preserved so it can resume correctly later.

Stack

Each thread has its own stack.

A stack stores information associated with function calls, including:

* Function parameters and return information.
* Local variables with automatic storage duration.
* Saved execution information used during function calls.

Each thread needs a separate stack because threads may be executing different functions with different local execution information.

The stacks normally occupy separate regions within the process’s virtual address space.

Thread State

The thread state describes its current execution condition.

Common conceptual states include:

* New: The thread is being created.
* Ready: The thread is prepared to run and waiting for CPU time.
* Running: The thread is currently executing.
* Blocked or Waiting: The thread cannot currently proceed until an event or condition occurs.
* Terminated: The thread has finished execution.

Actual state names and implementation details vary between operating systems.

Thread-Local Storage

Thread-local storage (TLS) provides data that is logically private to an individual thread.

Different threads can access their own TLS instances without using the same instance of that thread-local data.

TLS is useful when a thread needs information that persists across function calls but should not be shared as ordinary process-wide data.

5.4 Process Control Block and Thread Control Block

Operating systems maintain information needed to manage processes and threads.

Process Control Block (PCB)

A Process Control Block is a conceptual operating-system data structure containing information about a process.

It may include information about:

* Process identification.
* Process state.
* Memory-management information.
* Resource ownership.
* Relationships with other processes.
* Scheduling and accounting information.

Thread Control Block (TCB)

A Thread Control Block is a conceptual data structure containing information about an individual thread.

It may include:

* Thread identification.
* Thread state.
* Saved program counter.
* Saved CPU registers.
* Scheduling information.
* Stack and thread-specific information.

The PCB and TCB are useful teaching models. Actual operating systems use implementation-specific structures and may organise this information differently.

5.5 User-Level Threads and Kernel-Level Threads

Threads can be implemented and managed at different levels.

User-Level Threads

User-level threads are managed by a user-space thread library or runtime.

The operating-system kernel may not know about each individual user-level thread.

Advantages:

* Thread operations can be efficient because some operations happen without entering the kernel.
* The runtime can implement its own scheduling policies.
* Thread management can be tailored to the programming environment.

Limitations:

* If the implementation maps multiple user threads onto one kernel execution entity, a blocking system call may prevent the other user threads on that entity from progressing.
* True simultaneous execution across CPU cores is not available to threads mapped to a single kernel execution entity.
* The kernel cannot independently schedule individual user-level threads it does not know about.

These limitations depend on the mapping model and runtime design.

Kernel-Level Threads

Kernel-level threads are visible to and managed by the operating-system kernel.

Advantages:

* The kernel can schedule individual kernel threads.
* Multiple kernel threads may execute simultaneously on different CPU cores.
* A thread waiting for an event does not necessarily prevent other threads in the same process from executing.

Limitations:

* Kernel involvement can make some thread-management operations more expensive.
* Scheduling and context management require operating-system resources.

5.6 Thread Mapping Models

User-level threads can be mapped to kernel-level threads in different ways.

Many-to-One Model

Many user-level threads map to one kernel thread.

* Thread management can be performed in user space.
* Only one mapped kernel execution entity is available.
* A blocking operation can prevent all user threads using that entity from progressing.
* The mapped threads cannot execute simultaneously on multiple CPU cores.

One-to-One Model

Each user-level thread maps to a separate kernel thread.

* The kernel can schedule the threads independently.
* Threads may execute simultaneously on different CPU cores.
* Blocking one thread does not necessarily block the others.
* Creating and managing many threads can introduce greater overhead.

Many-to-Many Model

Many user-level threads are multiplexed over a number of kernel threads.

* The runtime can manage many user-level threads.
* Multiple kernel execution entities can support parallel execution.
* Blocking one kernel thread does not necessarily stop all user-level threads.
* The mapping and scheduling mechanisms are more complex.

Actual operating systems and runtime implementations differ; these models describe conceptual mapping strategies.

5.7 Thread Lifecycle Operations

A program or runtime may perform several operations during a thread’s lifetime.

Create

A new thread is created and initialised with its execution context.

Run

The thread becomes eligible for execution and may be scheduled on a CPU.

Join

One thread waits for another thread to finish and may retrieve its result or completion status.

Detach

In APIs that support detaching, a thread’s completion resources can be reclaimed automatically when it finishes, without another thread joining it.

Terminate

A thread finishes its execution or is otherwise terminated according to the relevant API and operating-system rules.

These operations are API-dependent. For example, joining and detaching are familiar concepts in POSIX threads, but not every programming environment exposes identical operations.

The behaviour of the main thread also depends on the programming language, runtime and operating-system API. In some environments, returning from the main function terminates the process and its remaining threads; in others, the runtime may apply different rules.

5.8 Scheduling vs Context Switching

These terms are related but describe different activities.

Thread Scheduling

Scheduling is the process of selecting which eligible thread should receive CPU time.

The scheduler considers factors such as scheduling policy, priority and thread state.

Dispatching

Dispatching is the act of assigning the CPU to the selected thread so it can execute.

Context Switching

A context switch occurs when the CPU stops executing one thread and switches to another execution context.

The operating system saves the outgoing thread’s necessary execution information and restores the incoming thread’s saved context.

Context switching enables the CPU to alternate between threads.

It introduces overhead because the CPU and operating system must perform management work rather than only executing application instructions.

A context switch is not necessarily the same as a process switch. Threads within the same process can switch execution while continuing to share the same process address space.

5.9 Technical Summary

Concept	Technical meaning
Thread	Individual path of execution within a process
Program counter	Identifies the next instruction for a thread
CPU registers	Hold execution information needed by the thread
Stack	Stores function-call and local execution information
Thread state	Describes the thread’s execution condition
TLS	Thread-specific data
PCB	Conceptual information structure for a process
TCB	Conceptual information structure for a thread
User-level thread	Thread managed by a user-space runtime or library
Kernel-level thread	Thread visible to and managed by the kernel
Scheduling	Selection of an eligible thread for CPU time
Context switch	Switching the CPU from one execution context to another

Key principle: A process provides the shared resources and environment. Threads provide individual execution paths, each with its own execution context, managed according to the operating system and runtime’s threading model.
