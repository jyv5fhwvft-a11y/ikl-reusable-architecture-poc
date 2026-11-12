---
content_block_id: IKL-OS-003-CB-09
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-09
section_number: 9
section_title: Thread Lifecycle, Flowcharts and Sequence Diagrams
block_type: html-section
order: 9
---
9. Thread Lifecycle, Flowcharts and Sequence Diagrams

9.1 Why Use Diagrams to Understand Threads?

Threads involve several components and activities working together.

Text explains what happens, but diagrams help us visualise:

* How threads relate to their parent process.
* How a thread moves between lifecycle states.
* How the scheduler and CPU cooperate.
* How race conditions occur when threads access shared data.
* How synchronisation helps protect shared resources.

This section introduces four diagrams.

9.2 Diagram 1 — Process and Thread Architecture

Understanding the relationship

A process provides a shared environment for its threads.

Threads belonging to the same process commonly share program code, global and static data, heap memory and process-associated resources.

Each thread maintains its own execution context.

Conceptual architecture diagram

flowchart TB
    P["PROCESS"]
    P --> S["Shared Process Resources"]
    S --> C["Program Code"]
    S --> G["Global and Static Data"]
    S --> H["Heap Memory"]
    S --> F["Open Files and Other Resources"]
    P --> T1["THREAD 1"]
    P --> T2["THREAD 2"]
    P --> T3["THREAD 3"]
    T1 --> E1["PC · Registers · Stack · State · TLS"]
    T2 --> E2["PC · Registers · Stack · State · TLS"]
    T3 --> E3["PC · Registers · Stack · State · TLS"]

How to understand the diagram

1. The process is the overall resource environment.
2. The shared resources are available to threads belonging to that process, subject to access and synchronisation rules.
3. Each thread has its own program counter, CPU registers, stack, state and thread-local storage.
4. The threads are separate execution paths operating within the same process.

Important distinction

Sharing a process does not mean that threads share everything.

They share many process resources, but they maintain separate execution contexts.

⸻

9.3 Diagram 2 — Thread Lifecycle Flowchart

Understanding the lifecycle

A thread moves through different states during its lifetime.

The following flowchart illustrates a simplified lifecycle, including creation, execution, waiting, resuming and termination.

Thread lifecycle flowchart

flowchart TD
    A([Start]) --> B["New: Thread Created"]
    B --> C["Ready: Waiting for CPU"]
    C --> D["Running: Executing on CPU"]
    D --> E{"What happens next?"}
    E -->|"Needs an event or resource"| F["Blocked / Waiting"]
    F --> G["Required Event Occurs"]
    G --> C
    E -->|"Pre-empted"| C
    E -->|"Work Completed"| H["Terminated"]
    H --> I([End])

Step-by-step explanation

1. New: A thread is created.
2. Ready: It is eligible to run but is waiting for CPU time.
3. Running: The scheduler selects it and it executes.
4. Blocked/Waiting: It cannot continue until a required event or condition occurs.
5. Ready again: Once the event occurs, it becomes eligible for CPU time.
6. Terminated: It completes its work or is stopped.

Understanding pre-emption

A running thread may be pre-empted before it finishes.

It returns to the Ready state so that another eligible thread can receive CPU time.

A context switch may occur when execution moves to another thread.

Important distinction

A thread becoming Ready does not mean it immediately starts Running.

The scheduler must select it.

⸻

9.4 Diagram 3 — Thread Scheduling Sequence Diagram

Understanding scheduling

A sequence diagram shows how different parts of a system interact over time.

Here we examine a simplified example involving:

* Thread 1.
* Thread 2.
* The operating-system scheduler.
* The CPU.

Thread scheduling sequence

sequenceDiagram
    participant T1 as Thread 1
    participant S as Scheduler
    participant CPU as CPU
    participant T2 as Thread 2
    T1->>S: Thread 1 becomes Ready
    S->>S: Select Thread 1
    S->>CPU: Dispatch Thread 1
    CPU->>T1: Execute instructions
    Note over T1,CPU: Thread 1 is executing
    CPU->>S: Scheduling event or pre-emption
    S->>S: Select Thread 2
    S->>CPU: Save Thread 1 context and switch
    S->>CPU: Restore Thread 2 context
    CPU->>T2: Execute Thread 2
    Note over T2,CPU: Thread 2 is executing
    CPU->>S: Thread 2 blocks or is pre-empted
    S->>S: Select Thread 1 if Ready
    S->>CPU: Restore Thread 1 context
    CPU->>T1: Resume execution

How to read the sequence

1. Thread 1 becomes Ready.
2. The scheduler selects Thread 1.
3. The CPU begins executing Thread 1.
4. A scheduling event causes execution to move away from Thread 1.
5. The scheduler selects Thread 2.
6. The required execution context is saved and restored.
7. Thread 2 begins executing.
8. When another scheduling event occurs, Thread 1 may resume if it is Ready and selected.

What is a context switch?

A context switch is the process of preserving the execution context of one thread and restoring the context of another when CPU execution changes.

The saved information allows a thread to resume its work later.

Important distinction

Scheduling is the decision about which thread should run.

Context switching is the mechanism that allows CPU execution to move between threads.

The diagram is a simplified teaching sequence. Actual operating systems may involve additional components and more complex scheduling events.

⸻

9.5 Diagram 4 — Race Condition and Synchronisation Sequence

Understanding the problem

Threads may share data inside a process.

If two threads access and modify the same data without suitable coordination, their operations can interfere with one another.

This can produce a race condition.

We will use a shared bank account to demonstrate the problem.

Starting balance: $100

Two threads each attempt to deposit $10.

Scenario A — Without a Mutex

The deposit is assumed to use separate read, calculate and write operations.

sequenceDiagram
    participant A as Thread A
    participant B as Thread B
    participant M as Shared Account
    A->>M: Read balance ($100)
    B->>M: Read balance ($100)
    Note over A,B: Both threads calculate $110
    A->>M: Write $110
    B->>M: Write $110
    Note over M: Final balance is $110
    Note over A,B: One update is lost

What happened?

1. Thread A reads $100.
2. Thread B also reads $100.
3. Both calculate a new balance of $110.
4. Thread A writes $110.
5. Thread B writes $110.
6. The final balance remains $110.

The intended final balance was $120.

One deposit was lost because the operations interfered with one another.

This is a race condition caused by an unsafe read-modify-write sequence.

Scenario B — With a Mutex

A mutex protects the critical section so that only one thread at a time can perform the protected update.

sequenceDiagram
    participant A as Thread A
    participant B as Thread B
    participant L as Mutex
    participant M as Shared Account
    A->>L: Acquire mutex
    Note over L: Thread A owns the lock
    A->>M: Read balance ($100)
    A->>M: Write balance ($110)
    A->>L: Release mutex
    B->>L: Acquire mutex
    Note over L: Thread B now owns the lock
    B->>M: Read balance ($110)
    B->>M: Write balance ($120)
    B->>L: Release mutex
    Note over M: Final balance is $120

What changed?

1. Thread A acquires the mutex.
2. Thread A performs the protected update.
3. Thread A releases the mutex.
4. Thread B acquires the mutex.
5. Thread B reads the updated balance.
6. Thread B performs its update.
7. Thread B releases the mutex.
8. The final balance is $120.

Both deposits are included.

Important learning point

A mutex provides mutual exclusion for a protected critical section.

It works correctly only when all relevant accesses follow the same locking discipline.

A mutex does not automatically make every part of an application thread-safe.

⸻

9.6 Compare the Four Diagrams

Diagram	What it teaches
Process and Thread Architecture	What threads share and what remains individual
Thread Lifecycle Flowchart	How a thread changes state
Scheduling Sequence Diagram	How scheduling and context switching work
Race Condition Sequence	Why synchronisation is needed for shared data

Each diagram explains a different aspect of multithreading.

Together, they provide a broader understanding of how threads are organised, executed and coordinated.

9.7 Quick Revision

Remember these four ideas:

1. Architecture: Threads share many process resources but have individual execution contexts.
2. Lifecycle: Threads move between states such as Ready, Running and Blocked/Waiting.
3. Scheduling: The scheduler selects eligible threads, while context switching allows execution to move between them.
4. Synchronisation: Mutexes can protect critical sections and help prevent unsafe concurrent updates.

Final takeaway: Understanding threads requires understanding both their individual execution paths and the shared environment in which they operate.
