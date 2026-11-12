---
content_block_id: IKL-OS-003-CB-08
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-08
section_number: 8
section_title: Interactive Thread Experiences
block_type: html-section
order: 8
---
8. Interactive Thread Experiences

8.1 Experience How Threads Work

Reading about threads helps us understand the theory. Interacting with simulations helps us see what happens when threads execute, share resources and compete for CPU time.

This section introduces three educational simulations:

1. Thread Lifecycle and Scheduling.
2. One CPU Core versus Multiple CPU Cores.
3. Race Conditions and Synchronisation.

Each simulation focuses on a different part of thread management.

Learning objectives

By the end of these experiences, you should be able to:

* Recognise the main states in a thread lifecycle.
* Understand how the scheduler gives threads CPU time.
* Distinguish concurrency from parallelism.
* Explain why shared data can produce race conditions.
* Understand how a mutex can protect a critical section.

⸻

8.2 Simulation 1 — Thread Lifecycle and Scheduling

What will you explore?

Follow a thread as it moves through its lifecycle.

You will see how a thread is created, becomes ready, receives CPU time, waits for an event, resumes execution and eventually terminates.

Simulation setup

The simulation should display one thread and its current state.

It should provide these controls:

* Start: Begin the thread lifecycle.
* Pause: Temporarily stop the simulation.
* Next Step: Advance to the next lifecycle event.
* Reset: Return to the beginning.

Expected lifecycle

The simulation should demonstrate this simplified sequence:

1. New: A thread is created.
2. Ready: The thread is prepared to execute and waits for CPU time.
3. Running: The scheduler selects the thread and it executes.
4. Blocked/Waiting: The thread waits for an event or required condition.
5. Ready: The event occurs, so the thread becomes eligible to run again.
6. Running: The scheduler selects the thread again.
7. Terminated: The thread completes its task.

The simulation should visually highlight the current state and show a short explanation whenever the thread changes state.

Important learning point

A thread that becomes Ready does not automatically become Running.

It must still be selected by the scheduler.

Questions to consider

1. What is the difference between Ready and Running?
2. Why might a thread enter Blocked/Waiting?
3. Does a thread immediately run when it becomes Ready?
4. What happens when a thread terminates?

⸻

8.3 Simulation 2 — One CPU Core versus Multiple CPU Cores

What will you explore?

Discover how a computer can manage several threads using one CPU core or multiple CPU cores.

This simulation demonstrates the difference between concurrency and parallelism.

Simulation setup

The simulation should display three threads:

* Thread A
* Thread B
* Thread C

Provide a CPU-core selector with three options:

* 1 Core
* 2 Cores
* 4 Cores

The learner should be able to start, pause and reset the simulation.

Experience with one CPU core

With one CPU core, only one thread can execute on that core at a time.

The scheduler can rapidly switch between Thread A, Thread B and Thread C.

The learner should see the threads making progress through interleaved execution.

This demonstrates concurrency.

Experience with two CPU cores

With two CPU cores, two threads can execute at the same time, while the third waits for an available core.

The simulation should show how the scheduler distributes work across the available cores.

Experience with four CPU cores

With four CPU cores, all three threads can potentially execute at the same time, assuming they are eligible and there are no other constraints.

The fourth core may remain unused in this simplified three-thread example.

This demonstrates parallelism.

Visual comparison

Configuration	What happens?
1 CPU core	Threads take turns executing on one core
2 CPU cores	Up to two threads can execute simultaneously
4 CPU cores	Three eligible threads can potentially execute simultaneously

Important learning point

* Concurrency: Multiple tasks make progress during overlapping periods.
* Parallelism: Multiple tasks execute at the same time on different processing resources.

Concurrency does not require multiple CPU cores. Parallel execution requires suitable processing resources and conditions.

The simulation is a simplified teaching model. Real scheduling also depends on thread priority, workload, operating-system policy, processor availability and other factors.

Questions to consider

1. Can three threads make progress on one CPU core?
2. Can two threads execute simultaneously on two CPU cores?
3. Does concurrency always mean parallel execution?
4. Why might adding CPU cores improve performance for some workloads but not others?

⸻

8.4 Simulation 3 — Race Conditions and Synchronisation

What will you explore?

Discover what happens when two threads attempt to update the same shared data without proper coordination.

This simulation uses a shared bank account to demonstrate a race condition.

Simulation setup

The starting account balance is:

$100

Two threads attempt to deposit $10 each:

* Thread A deposits $10.
* Thread B deposits $10.

The correct final balance should be:

$120

The learner should be able to compare two scenarios:

1. Without a mutex.
2. With a mutex.

Scenario A — Without a Mutex

Both threads access the same shared account balance.

For this demonstration, assume each deposit is implemented as a non-atomic read-modify-write operation.

The simulation should allow this sequence:

1. Thread A reads the balance: $100.
2. Thread B reads the balance: $100.
3. Thread A calculates $110.
4. Thread B calculates $110.
5. Thread A writes $110.
6. Thread B writes $110.

The final balance becomes:

$110

But both deposits were intended to happen.

One update has been lost.

This is an example of a race condition.

Scenario B — With a Mutex

Now introduce a mutex, which is a mutual-exclusion lock.

A mutex ensures that only one thread at a time can enter the protected critical section when all relevant accesses follow the same locking discipline.

The simulation should demonstrate:

1. Thread A acquires the mutex.
2. Thread A reads $100 and calculates $110.
3. Thread A writes $110.
4. Thread A releases the mutex.
5. Thread B acquires the mutex.
6. Thread B reads $110 and calculates $120.
7. Thread B writes $120.
8. Thread B releases the mutex.

The final balance becomes:

$120

Both deposits are correctly included.

Visual comparison

Scenario	Final balance	Result
Without mutex	$110	One update is lost
With mutex	$120	Both updates are included

Important learning point

A race condition occurs when the result depends on the timing or ordering of concurrent operations accessing shared data.

A mutex can protect a critical section by controlling access to shared data.

However, a mutex must be used correctly. All relevant accesses must follow the same protection rules. Incorrect locking can introduce other problems, including deadlocks.

Questions to consider

1. Why did the balance become $110 without a mutex?
2. What is a race condition?
3. What is a critical section?
4. How does a mutex protect shared data?
5. Why must threads coordinate when accessing shared resources?

⸻

8.5 Connect the Simulations to Real Applications

These three experiences represent common challenges in real software.

Simulation	Practical connection
Thread Lifecycle and Scheduling	Operating-system thread management
CPU Core Comparison	Multicore processors and concurrent applications
Race Conditions and Synchronisation	Banking systems, shared counters, databases and other shared-data applications

Real applications may use additional techniques, including semaphores, condition variables, atomic operations and other synchronisation mechanisms.

The simulations introduce the core ideas without attempting to reproduce every detail of a real operating system.

8.6 What You Should Understand After These Experiences

You should now be able to explain:

* How a thread moves through its lifecycle.
* Why a Ready thread may have to wait for CPU time.
* How a scheduler manages CPU execution.
* How one CPU core can support concurrent progress.
* How multiple CPU cores can support parallel execution.
* Why shared data can produce race conditions.
* How a mutex can protect a critical section.

8.7 Simulation Design and Accuracy Notes

The following principles should guide the eventual implementation:

1. The simulations must be educational models, not claims that they reproduce a complete operating-system implementation.
2. The lifecycle simulation must distinguish Ready, Running and Blocked/Waiting.
3. The CPU simulation must distinguish concurrent progress from simultaneous execution.
4. The race-condition simulation must show the individual read and write operations so the lost update is understandable.
5. The mutex simulation must show lock acquisition and release.
6. Each simulation should provide clear explanations, controls and a reset option.
7. The simulations should work on mobile and tablet screens as well as larger screens.
8. The learner should be able to explore at their own pace.

Remember: Threads make applications capable of performing multiple tasks, but effective thread management requires scheduling, coordination and safe access to shared resources.
