⸻
content_block_id: IKL-OS-003-CB-01
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-01
section_number: 1
section_title: Threads
block_type: concept-content
order: 1

1. Concept Identity and Definition

What is a Thread?

A thread is a path of execution within a process. It is the unit of work that the operating system schedules to run on a CPU.

A process provides the execution environment and resources. One or more threads execute within that environment.

A process can contain a single thread or multiple threads.

The central principle

* Process: Provides the environment and resources.
* Thread: Provides an individual path of execution.
* Operating system: Manages thread execution and CPU scheduling.

Threads belonging to the same process share many process resources, but each thread maintains its own execution context.

Why do threads exist?

Threads allow a program to organise work into separate activities. This can improve responsiveness and, on suitable hardware, allow multiple activities to execute in parallel.

2. Threads Explained Like You’re Five

Imagine a restaurant.

The restaurant is the process. It has a kitchen, equipment, tables and supplies.

The workers are the threads. Each worker performs a particular task.

* Restaurant: Process.
* Workers: Threads.
* Kitchen and shared equipment: Shared process resources.
* Individual worker’s current task: Execution path.

One worker might prepare food while another takes orders.

If there is only one worker, tasks may need to take turns. With several workers, different tasks can sometimes happen at the same time.

But having several workers does not guarantee that every task will finish faster. Workers may need the same equipment, and they may sometimes have to wait.

Remember: A process is the working environment; threads are the workers carrying out tasks inside it.

3. Analogy and Mental Model

One workplace, several workers

Think of a shared workplace containing several employees.

The workplace provides:

* The building.
* Equipment.
* Shared information.
* Supplies.
* Rules for using resources.

Each employee has their own:

* Current task.
* Working position.
* Immediate working notes.
* Individual progress.

This resembles a process containing multiple threads.

Workplace analogy	Operating-system concept
Workplace	Process
Employee	Thread
Shared equipment	Shared process resources
Employee’s current task	Thread execution
Employee’s working notes	Thread stack and execution context
Manager assigning work	Scheduler, conceptually

An important limitation of the analogy

Real threads are not independent people. They are execution paths managed by software and the operating system. They can access shared memory and may affect one another’s results.

4. Beginner Explanation

Program, process and thread

These three terms describe different things.

Term	Meaning
Program	Instructions stored for execution
Process	An executing instance of a program, with its environment and resources
Thread	A path of execution within a process

When you open an application, the operating system manages one or more processes for it. Those processes can contain one or more threads.

What do threads share?

Threads in the same process commonly share:

* Program code.
* Global data.
* Heap memory.
* The process’s virtual address space.
* Many process resources, such as open files.

What does each thread have separately?

Each thread has its own:

* Program counter.
* CPU register state.
* Stack.
* Execution state.
* Thread-specific information, where supported.

The stack is generally located within the process’s shared virtual address space, but each thread has its own stack region.

Concurrency and parallelism

Concurrency means multiple tasks make progress during overlapping periods. They may take turns on one CPU core.

Parallelism means multiple tasks actually execute at the same time, for example on different CPU cores.

These ideas are related, but they are not interchangeable.

Why must threads be coordinated?

Two threads might try to update the same shared information. Without appropriate coordination, their operations can interfere with one another.

This can produce a race condition.

Operating systems and programming environments provide synchronisation mechanisms to help coordinate shared access.

Four questions to check your understanding

1. Is a program the same thing as a process?
2. Can one process contain multiple threads?
3. Do threads in one process share memory?
4. Does concurrency always require multiple CPU cores?

5. Technical Explanation

5.1 Thread execution context

A thread needs enough information to stop and later continue its execution.

Its execution context commonly includes:

* Program counter (PC): identifies the next instruction.
* CPU registers: hold current working values.
* Stack pointer: identifies the current stack position.
* Stack: supports function calls, local variables and return information.
* Thread state: describes its current execution condition.
* Thread-local storage: provides data specific to that thread where supported.

The exact implementation depends on the operating system and processor architecture.

5.2 Process Control Block and Thread Control Block

Operating systems maintain information about processes and threads.

Two common conceptual structures are:

Process Control Block (PCB): Holds process-related management information.

Thread Control Block (TCB): Holds thread-related management information.

The PCB and TCB are useful teaching models. Exact names, structures and implementation details vary between operating systems.

5.3 Thread states

A simplified thread lifecycle includes:

* New: The thread is being created.
* Ready: The thread can run but is waiting for CPU time.
* Running: The thread is currently executing on a CPU core.
* Blocked/Waiting: The thread cannot continue until an event or condition occurs.
* Terminated: The thread has finished.

A blocked thread can become Ready when the event it needs occurs. It does not automatically become Running.

5.4 Scheduling and context switching

The scheduler selects an eligible thread to run.

The dispatcher transfers CPU control to the selected thread.

When the CPU switches from one thread to another, the operating system or runtime may need to save the outgoing thread’s execution context and restore the incoming thread’s context.

This is called a context switch.

Context switching has a cost. The amount of work involved depends on the system and the circumstances.

5.5 User-level and kernel-level threads

User-level threads are managed by a user-space threading library or runtime.

Kernel-level threads are known to and managed by the operating system kernel.

Different systems use different arrangements for managing and mapping user threads to kernel execution entities.

5.6 Thread mapping models

Common conceptual models include:

* Many-to-one.
* One-to-one.
* Many-to-many.

These describe how user-level threads relate to kernel-level threads. They are architectural models, not a guarantee that every modern operating system uses each model.

5.7 Creating and ending threads

A program or runtime can request that a thread be created.

A thread may:

1. Be initialised.
2. Become eligible to run.
3. Execute its assigned work.
4. Wait for an event or resource.
5. Resume execution.
6. Finish and terminate.

Some programming environments provide operations such as joining a thread, which allows another thread to wait for its completion. Detaching a thread is another possible lifecycle-management operation.

The exact behaviour depends on the programming language and threading API.

5.8 Risks of concurrent execution

Threaded programs must handle several important risks:

* Race conditions.
* Lost updates.
* Deadlocks.
* Starvation.
* Excessive synchronisation.
* Resource contention.
* Context-switching overhead.

More threads do not automatically mean better performance.

6. Thread Components and Architecture

6.1 Shared process resources

A process may contain:

* Program code.
* Global data.
* Heap memory.
* A virtual address space.
* Open files.
* Other operating-system-managed resources.

Threads within the process can access many of these shared resources.

6.2 Individual thread information

Each thread maintains its own execution information:

* Program counter.
* CPU registers.
* Stack.
* Thread state.
* Scheduling-related information.
* Thread-local data where supported.

6.3 Conceptual architecture

                 PROCESS
        Shared execution environment
      ┌──────────────────────────────┐
      │ Code                         │
      │ Global data                  │
      │ Heap                         │
      │ Shared resources             │
      │                              │
      │  ┌──────────┐ ┌──────────┐   │
      │  │ Thread 1 │ │ Thread 2 │   │
      │  │ PC       │ │ PC       │   │
      │  │ Registers│ │ Registers│   │
      │  │ Stack    │ │ Stack    │   │
      │  │ State    │ │ State    │   │
      │  └──────────┘ └──────────┘   │
      └──────────────────────────────┘
                    │
              OS Scheduler
                    │
              CPU execution

This is a conceptual model. Actual operating-system structures are more detailed.

6.4 Example: Music application

A music application might organise its activities using several threads:

* One thread handles user-interface activity.
* Another processes audio.
* Another retrieves information or communicates with a service.

These activities can be coordinated within the application’s process, depending on its design.

6.5 Component explorer — learning activity

Explore each component and ask:

1. Is it shared by threads in the same process?
2. Does each thread maintain its own copy or state?
3. Why is this information needed when a thread is paused and later resumed?

7. How a Thread Works

A simplified lifecycle can be described as follows.

Step 1 — Creation

An application or runtime requests a new thread.

The system or runtime initialises the information required to manage it.

Step 2 — Ready

The thread becomes eligible for CPU execution.

It may wait in a ready queue until it is selected.

Step 3 — Running

The scheduler selects the thread, and the dispatcher transfers CPU control to it.

The thread executes instructions.

Step 4 — Blocking or waiting

The thread may need to wait for an event, input/output operation, lock or another condition.

It cannot continue its normal execution until the required condition is satisfied.

Step 5 — Returning to Ready

When the required event occurs, the thread may become eligible to run again.

It returns to a Ready state, not directly to Running.

Step 6 — Pre-emption and context switching

The operating system may interrupt a running thread’s CPU allocation so another eligible thread can run.

The outgoing execution context is saved, and the incoming execution context is restored as required.

Step 7 — Termination

When the thread completes its work, it terminates.

A process may continue running if other threads remain active or if its design permits further work.

The behaviour when a main thread finishes depends on the programming environment and runtime.

Important lifecycle distinctions

* Ready does not mean Running.
* Blocked does not mean Terminated.
* A blocked thread becomes eligible again when its waiting condition is met.
* A context switch does not necessarily mean a process has changed.

8. Experience How Threads Work — Interactive Simulation Blueprint

The simulation should help learners understand how threads move through states and compete for CPU time.

It is an educational model, not a real operating-system thread scheduler.

Stage 1 — One CPU core

Introduce two threads:

* Thread A.
* Thread B.

Allow the learner to observe how they take turns.

Possible controls:

* Create thread.
* Dispatch thread.
* Run one step.
* Request I/O.
* Complete I/O.
* Expire time slice.
* Finish thread.
* Reset simulation.

The display should show:

* Current thread state.
* Ready queue.
* Running thread.
* Waiting thread.
* CPU activity.
* Context-switch events.

Experiment 1

Run Thread A, then let its time slice expire.

Observe how Thread B may be selected.

Experiment 2

Make Thread A wait for I/O.

Observe how it leaves the CPU and later becomes Ready when the I/O event completes.

Stage 2 — Multiple CPU cores

Introduce two CPU cores.

Allow Thread A and Thread B to execute on separate cores at the same time when eligible.

Ask the learner to compare:

* Taking turns on one core.
* Simultaneous execution on multiple cores.

Learning questions

1. Why can a Ready thread still be waiting?
2. What causes a thread to become Blocked?
3. What happens when its waiting condition is satisfied?
4. What is saved during a context switch?
5. How does a second CPU core change execution?

Simulation limitation: This initial learning model focuses on thread lifecycle and CPU scheduling. It does not yet simulate detailed mutex, semaphore, race-condition or deadlock behaviour.

9. Thread Lifecycle — Flowchart and Sequence Diagram

9.1 Lifecycle flowchart

             ┌─────────┐
             │   New   │
             └────┬────┘
                  │
                  ▼
             ┌─────────┐
       ┌────►│  Ready  │◄──────────┐
       │     └────┬────┘           │
       │          │                │
       │          ▼                │
       │     ┌─────────┐           │
       │     │ Running │           │
       │     └──┬───┬──┘           │
       │        │   │              │
       │        │   └──────┐       │
       │        │          │       │
       │        ▼          ▼       │
       │   ┌─────────┐ ┌──────────┐│
       │   │ Blocked │ │Terminated││
       │   └────┬────┘ └──────────┘│
       │        │                  │
       └────────┘                  │
       Condition satisfied         │
                                  │
       Running ── Pre-emption ─────┘
                    to Ready

This is a simplified conceptual lifecycle. Real systems may include additional states and transitions.

9.2 Sequence diagram

Participants:

* Application.
* Operating System.
* Scheduler.
* Dispatcher.
* CPU.
* I/O or event source.

Application       OS       Scheduler    Dispatcher      CPU
     │             │            │            │           │
     │ Create      │            │            │           │
     ├────────────►│            │            │           │
     │             │ Initialise │            │           │
     │             ├────────────┤            │           │
     │             │ Ready      │            │           │
     │             ├───────────►│            │           │
     │             │            │ Select     │           │
     │             │            ├───────────►│           │
     │             │            │            │ Dispatch  │
     │             │            │            ├──────────►│
     │             │            │            │           │
     │             │            │            │  Execute  │
     │             │            │            │           │
     │             │◄───────────┴────────────┴───────────┤
     │             │       Wait, pre-emption or finish   │
     │             │                                     │

A real implementation involves more detailed interactions. This diagram shows the main conceptual roles rather than every kernel operation.

10. Practical Example — Threads in a Web Browser

A modern web browser performs several kinds of work:

* Displaying pages.
* Processing user interaction.
* Loading network resources.
* Rendering content.
* Managing graphics.
* Running scripts.
* Handling background tasks.

A browser may use multiple processes, with some processes containing multiple threads.

A simplified example might include:

Activity	Possible role
User-interface work	Responding to clicks and menus
Rendering	Preparing page content for display
Network activity	Handling communication
Graphics	Supporting visual presentation
Background work	Performing tasks without blocking the interface

The exact architecture differs between browsers, versions, platforms and configurations. Not every activity necessarily corresponds to one separate thread.

Why does this matter?

Suppose a browser is loading a large page.

If all work were performed as one indivisible activity, the interface could become unresponsive while that work was happening.

Appropriate concurrency can help the browser remain responsive while other work continues.

Think about it

1. Why might a browser use multiple processes as well as multiple threads?
2. What might happen if a user-interface thread becomes blocked?
3. Why might some browser activities need coordination?

11. Common Mistakes About Threads

Ten misconceptions

1. A process and a thread are the same thing.

Incorrect. A process provides an execution environment; a thread is a path of execution within it.

2. Every thread has a completely separate address space.

Incorrect. Threads in the same process generally share its virtual address space.

3. Multiple threads always execute simultaneously.

Incorrect. They may take turns on one CPU core.

4. Concurrency and parallelism mean exactly the same thing.

Incorrect. Concurrency concerns overlapping progress; parallelism involves simultaneous execution.

5. A Ready thread is already running.

Incorrect. It is eligible but waiting for CPU time.

6. A Blocked thread has terminated.

Incorrect. It is waiting for an event or condition.

7. Context switching happens only between processes.

Incorrect. Context switching can also occur between threads.

8. More threads always make an application faster.

Incorrect. Too many threads can create overhead and contention.

9. Shared memory is always safe to access.

Incorrect. Unsynchronised concurrent access can cause race conditions.

10. Every operating system manages threads identically.

Incorrect. Implementations and interfaces vary.

True or false detector

1. A process can contain several threads.
2. Threads in the same process share many resources.
3. Every Ready thread is executing on the CPU.
4. A blocked thread can become Ready.
5. Concurrency always requires multiple CPU cores.
6. A thread has its own execution context.
7. More threads always improve performance.
8. Race conditions can occur when threads access shared data.

Answers: 1 True; 2 True; 3 False; 4 True; 5 False; 6 True; 7 False; 8 True.

12. Advantages and Limitations of Threads

12.1 Advantages

Responsiveness: Separate activities can help an application remain responsive.

Resource sharing: Threads within a process can access shared process resources.

Parallel execution: Suitable workloads may execute across multiple CPU cores.

Throughput: Independent work may progress more efficiently when well designed.

Organisation: Complex programs can divide work into manageable activities.

12.2 Limitations and risks

Synchronisation complexity: Shared resources need careful coordination.

Race conditions: Results can depend on the timing of concurrent operations.

Deadlocks: Threads can become stuck waiting for resources held by one another.

Context-switch overhead: Switching execution contexts consumes time and resources.

Memory and resource use: Each thread needs management information and execution resources, including a stack.

Debugging difficulty: Timing-dependent faults can be difficult to reproduce.

Contention: Threads may compete for the same locks, memory or other resources.

Scalability limits: Adding threads cannot overcome every hardware or workload limitation.

12.3 Scenario explorer

Consider three situations.

Scenario A — A responsive application

A user-interface activity continues while another thread handles background work.

Potential benefit: improved responsiveness.

Scenario B — Shared account balance

Two threads update the same balance without proper coordination.

Potential problem: race condition or lost update.

Scenario C — Too many workers

An application creates far more threads than its workload can use effectively.

Potential problem: unnecessary scheduling overhead and resource consumption.

Check your reasoning

For each scenario, identify:

1. The potential benefit or risk.
2. The thread behaviour involved.
3. What a programmer or system designer should consider.

13. Connections to Other Operating-System Concepts

Threads are connected to several important operating-system topics.

Related concept	Connection
Processes	Threads execute within processes
CPU Scheduling	The OS selects eligible threads for CPU time
Memory Management	Threads share a process address space
Context Switching	Thread execution state is saved and restored
Synchronisation	Coordinates access to shared resources
Deadlocks	Threads can become permanently blocked by resource dependencies
Inter-Process Communication (IPC)	Processes communicate through mechanisms provided by the system
Multicore Processing	Multiple threads may execute in parallel on different cores

Relationship map

                 OPERATING SYSTEM
                         │
                      PROCESS
                         │
                       THREADS
          ┌──────────────┼──────────────┐
          │              │              │
      Scheduling      Memory       Synchronisation
          │          Management         │
          │              │              │
       CPU Time      Shared Space     Race Conditions
          │                             │
    Context Switch                    Deadlocks
          │
     Multicore CPUs

This map represents conceptual relationships, not a fixed execution sequence.

Practical connection: Video editing

A video-editing application may use separate threads or groups of threads for activities such as:

* User interaction.
* Decoding video.
* Applying effects.
* Processing audio.
* Rendering output.

The actual architecture depends on the application.

Threads can help organise these activities, but shared data and resources must be coordinated correctly.

14. Knowledge Assessment

 

Test your understanding

Instructions: Answer ten questions. Each question is worth one mark.

Question 1 — Process and thread

What is a thread?

A. A complete operating system.

B. A path of execution within a process.

C. A file stored on a disk.

D. A physical CPU core.

Correct answer: B. A thread is an execution path within a process.

Question 2 — Shared resources

Which statement is generally correct about threads in the same process?

A. They always have separate virtual address spaces.

B. They share many process resources.

C. They cannot communicate.

D. They must run on different computers.

Correct answer: B. Threads share many resources belonging to their process, while maintaining individual execution contexts.

Question 3 — Thread states

A thread is waiting for an I/O operation to complete. Which state best describes it?

A. New.

B. Ready.

C. Blocked or Waiting.

D. Terminated.

Correct answer: C. It cannot continue its normal execution until the required event occurs.

Question 4 — Returning from a wait

An I/O operation completes. What is the usual next eligible state for the waiting thread?

A. New.

B. Ready.

C. Terminated.

D. Permanently Blocked.

Correct answer: B. The thread becomes Ready and waits for CPU scheduling.

Question 5 — Context switching

What happens during a thread context switch?

A. The computer is shut down.

B. The outgoing execution context is saved and the incoming one is restored as required.

C. All process memory is deleted.

D. The thread becomes a new process.

Correct answer: B. Context switching allows execution to move between threads while preserving the information needed to resume them.

Question 6 — Concurrency

Can two threads make progress concurrently on a single CPU core?

A. No, never.

B. Yes, by taking turns over time.

C. Only if they belong to different computers.

D. Only if they share no memory.

Correct answer: B. A single core can switch between threads, allowing overlapping progress without simultaneous execution.

Question 7 — Race conditions

Two threads update the same shared variable without suitable synchronisation. What risk may arise?

A. Race condition.

B. Automatic deadlock prevention.

C. Guaranteed faster execution.

D. Permanent CPU failure.

Correct answer: A. The result may depend on the timing and ordering of operations.

Question 8 — Deadlocks

What is a deadlock?

A. A thread finishing normally.

B. A CPU running at full speed.

C. A situation where threads wait indefinitely for resources or conditions that cannot be satisfied.

D. A program being saved to disk.

Correct answer: C. Deadlocks can occur when resource dependencies prevent progress.

Question 9 — Performance

Does increasing the number of threads always improve performance?

A. Yes.

B. No.

C. Only on one CPU core.

D. Only when threads are blocked.

Correct answer: B. Excessive threads can introduce scheduling overhead, contention and resource consumption.

Question 10 — Application responsiveness

Why might a browser use separate threads for different activities?

A. To eliminate all operating-system scheduling.

B. To help organise work and keep some activities responsive while others proceed.

C. To ensure every activity runs simultaneously.

D. To give every thread a separate physical computer.

Correct answer: B. Appropriate concurrency can help separate work and improve responsiveness.

Score interpretation

Score	Learning guidance
9–10	Excellent understanding
7–8	Good understanding
5–6	Developing understanding
0–4	Revisit the foundations

This is a learning check, not a formal university grade.

15. Quick Revision

15.1 The essential definition

A thread is a path of execution within a process. A process provides an environment in which one or more threads can execute.

15.2 Remember the difference

* Program: Instructions.
* Process: Executing instance and its environment.
* Thread: Path of execution.

15.3 Shared versus individual

Shared: Process address space, code, global data, heap and many resources.

Individual: Program counter, CPU registers, stack and execution state.

15.4 Thread lifecycle

New → Ready → Running → Blocked/Waiting → Ready → Running → Terminated.

Not every thread follows every transition in precisely the same way.

15.5 Scheduling

* Scheduler selects an eligible thread.
* Dispatcher transfers CPU control.
* Context switch saves and restores execution information.

15.6 Concurrency versus parallelism

* Concurrency: Multiple activities make overlapping progress.
* Parallelism: Multiple activities execute at the same time.

15.7 Important risks

* Race conditions.
* Lost updates.
* Deadlocks.
* Starvation.
* Resource contention.
* Context-switch overhead.

15.8 Final revision checklist

Can you explain:

* [ ]	What a thread is?
* [ ]	How a process differs from a thread?
* [ ]	Which resources threads share?
* [ ]	Which execution information belongs to each thread?
* [ ]	The main thread states?
* [ ]	How scheduling and context switching work?
* [ ]	Concurrency versus parallelism?
* [ ]	Why synchronisation is necessary?
* [ ]	The advantages and limitations of multithreading?
* [ ]	How threads help organise application work?

One-minute summary

A process is an executing program with an environment and resources. A thread is a path of execution within that process. A process can contain one or multiple threads. Threads share many process resources but maintain their own execution contexts. The operating system schedules eligible threads, and context switching allows CPU execution to move between them. Threads can improve responsiveness and enable parallel work, but they also introduce challenges such as race conditions, deadlocks and resource contention.

Explore. Understand. Experiment.
