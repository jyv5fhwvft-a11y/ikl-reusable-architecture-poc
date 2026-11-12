---
content_block_id: IKL-OS-003-CB-06
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-06
section_number: 6
section_title: Thread Components and Architecture
block_type: html-section
order: 6
---
6. Thread Components and Architecture

6.1 Understanding the Architecture

A process can contain one or more threads.

A process provides the resources needed by its threads. Each thread uses those shared resources while maintaining its own execution information.

Think of a process as a shared workspace. Several workers can use the same workspace, equipment and documents, but each worker has their own current task and working position.

In an operating system, the shared workspace represents the process, while each worker represents a thread.

6.2 Resources Shared by Threads

Threads belonging to the same process commonly share:

* Program code: The instructions that make up the program.
* Global and static data: Variables and data stored for the process.
* Heap memory: Memory used for dynamically allocated objects and data.
* Open files and other resources: Files, communication resources and other process-associated resources.

Sharing these resources allows threads to cooperate and exchange information without needing separate processes for every task.

However, shared access must be managed carefully. If multiple threads modify the same data without suitable coordination, race conditions can occur.

6.3 Information Belonging to Each Thread

Each thread maintains its own execution context. Important thread-specific information includes:

* Thread ID: An identifier used to distinguish the thread.
* Program Counter (PC): Identifies the next instruction in the thread’s execution.
* CPU Registers: Hold values the thread currently needs while executing.
* Stack: Holds information associated with function calls, local variables and return addresses.
* Thread State: Describes whether the thread is ready, running, waiting or in another lifecycle state.
* Thread-Local Storage (TLS): Holds data intended to be specific to an individual thread.

Each thread needs its own stack because different threads can be executing different functions, with different local variables and return addresses.

The stacks are separate regions within the process’s virtual address space. They are not necessarily separate physical memory devices.

6.4 Conceptual Process and Thread Architecture

The following diagram illustrates one process containing three threads.

                 PROCESS
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
        └─────────┴─────────┴───────┘

How to read this diagram:

1. The outer process represents the shared resource environment.
2. All three threads can access the process’s shared resources, subject to appropriate protection and coordination.
3. Each thread has its own program counter, registers, stack, state and thread-local data.
4. The operating system manages the execution of threads according to its scheduling mechanisms.

This is a conceptual diagram. Actual operating-system data structures and memory layouts vary.

6.5 How the Operating System Manages Threads

The operating system and its supporting runtime mechanisms manage thread execution.

A simplified view of the process is:

1. Thread creation: A program or runtime requests the creation of a thread.
2. Thread registration: The system maintains the information needed to identify and manage the thread.
3. Ready state: When eligible to run, the thread can wait in a ready state.
4. Scheduling: The scheduler selects an eligible thread for CPU execution.
5. Execution: The thread runs using its execution context and the process resources it can access.
6. Waiting or blocking: A thread may wait for input, an event, a resource or another condition.
7. Resuming: When the required condition is satisfied, the thread can become ready again.
8. Termination: The thread finishes or is stopped, and its associated resources are handled appropriately.

The exact implementation depends on the operating system and threading model.

6.6 Component Explorer: Shared or Individual?

Use the following comparison to test your understanding.

Component	Shared by process threads or individual to each thread?
Program code	Shared
Global variables	Shared
Heap memory	Shared
Open files	Commonly shared
Program Counter	Individual
CPU Registers	Individual
Stack	Individual
Thread State	Individual
Thread-Local Storage	Individual

Remember: threads share many process resources, but each thread needs its own execution context.

6.7 Practical Example: A Music Application

Imagine a music application playing a song while you browse your playlist.

The application might use different threads for different tasks:

* Playback thread: Helps manage the playback task.
* User-interface thread: Responds to button presses and screen interactions.
* Download thread: Handles downloading music.
* Background processing thread: Performs other supporting tasks.

These threads may share the application’s code, data, heap memory and open resources.

But each thread maintains its own execution information, such as its program counter, registers and stack.

This arrangement can help the application remain responsive while several tasks are being performed.

The exact number of threads and their responsibilities depend on the application’s design.

6.8 Benefits and Limitations of This Architecture

Benefits

* Threads can share information through common process resources.
* Creating and managing threads can be less resource-intensive than creating separate processes, depending on the operating system.
* Multiple tasks can make progress concurrently.
* On suitable multicore systems, threads may execute in parallel.
* A well-designed multithreaded application can remain responsive during background work.

Limitations

* Shared data can create race conditions.
* Synchronisation adds design and execution complexity.
* Poor coordination can cause deadlocks or starvation.
* Too many threads can increase memory use and scheduling overhead.
* A problem in one thread can sometimes affect the entire process because threads share the same process environment.

6.9 Key Takeaways

* A process provides a shared resource environment for its threads.
* Threads commonly share code, global data, heap memory and process-associated resources.
* Each thread maintains its own program counter, CPU registers, stack and execution state.
* Thread-local storage provides data specific to an individual thread.
* The operating system manages thread execution through mechanisms such as scheduling and state transitions.
* Sharing resources is useful, but it makes synchronisation important.

Remember: One process can contain several threads. They share the process’s resources, but each thread has its own path of execution.
