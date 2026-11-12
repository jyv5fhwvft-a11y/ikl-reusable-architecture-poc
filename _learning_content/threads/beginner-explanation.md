---
content_block_id: IKL-OS-003-CB-04
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-04
section_number: 4
section_title: Beginner Explanation
block_type: html-section
order: 4
---
4. Beginner Explanation

Understanding Threads in a Running Program

We have learned that a thread is a path of execution within a process.

Now let’s explore what this means when a computer runs an application.

Imagine opening a web browser. The browser may need to perform several activities:

* Display web pages.
* Respond to mouse clicks or screen taps.
* Process information received from the network.
* Play audio or video.
* Update parts of the screen.

A browser can organise different activities using multiple threads.

This can help the application remain responsive while work is being performed.

The exact organisation depends on the browser’s design. Some applications also use multiple processes, so not every activity necessarily belongs to one process.

Program, Process and Thread

These three terms describe different things.

1. Program

A program is a collection of instructions stored on a computer.

For example, a web browser application stored on your device is a program.

2. Process

When you start the browser, the operating system creates a process.

A process provides an execution environment and resources, such as memory and access to files.

A process can contain one or more threads.

3. Thread

A thread is an individual path of execution within a process.

It carries out instructions and maintains its own execution context.

A process can have:

* One thread, called a single-threaded process.
* Multiple threads, called a multithreaded process.

What Do Threads Share?

Threads belonging to the same process share many of its resources.

These commonly include:

* Program code: The instructions the process executes.
* Global and static data: Data available to different parts of the program.
* Heap memory: Memory used for dynamically allocated data.
* Open files and other process resources: Resources managed on behalf of the process.

Sharing resources allows threads to communicate and work with common information.

For example, two threads in the same process may access the same shared data structure.

However, sharing also introduces risks if threads modify shared information without proper coordination.

What Does Each Thread Have Separately?

Although threads share many process resources, each thread maintains its own execution context.

Important thread-specific information includes:

Program Counter

The program counter (PC) identifies the next instruction that a thread is due to execute.

Different threads can be at different points in the program.

CPU Registers

CPU registers hold information needed during execution.

Each thread needs its own saved register context so that its execution can resume correctly.

Stack

Each thread has its own stack.

The stack holds information associated with function calls, including return information and local variables.

The stacks occupy separate regions within the process’s virtual address space.

Thread State

A thread also has a current execution state.

For example, it may be ready to run, currently running, waiting for an event, or terminated.

Why Do Programs Use Multiple Threads?

Multithreading can provide several benefits.

1. Responsiveness

An application can continue responding to a user while another thread performs work.

For example, a browser may remain responsive while a separate activity processes information received from a network.

2. Resource Sharing

Threads within the same process can access shared process resources.

This can make communication between related activities easier than communicating between completely separate processes.

3. Concurrency

Multiple threads can make progress during overlapping periods.

On a single CPU core, the operating system can switch between threads so that each gets an opportunity to execute.

4. Parallelism

On a computer with multiple CPU cores, different threads may execute simultaneously on different cores.

This can improve performance when the work can be divided effectively.

Actual performance depends on the application, hardware and workload.

Concurrency vs Parallelism

These terms are related but different.

Concurrency	Parallelism
Multiple tasks make progress during overlapping periods	Multiple tasks execute simultaneously
Can happen on one CPU core through switching	Requires multiple execution resources for simultaneous execution
Focuses on organising multiple activities	Focuses on simultaneous execution

Remember: Concurrency is about managing overlapping work. Parallelism is about doing work at the same time.

What Happens When Threads Share Data?

Sharing resources is useful, but it can create problems.

Imagine a bank account containing $100.

Two threads each want to deposit $10.

Both threads read the current balance before either has completed its update.

They may each calculate:

$100 + $10 = $110

If both write $110, one deposit is lost.

The correct balance should be $120.

This is an example of a race condition.

A race condition occurs when the result of a program depends on the timing or order of concurrent operations.

How Can We Prevent Race Conditions?

Operating systems and programming environments provide synchronisation mechanisms.

Important examples include:

Mutex

A mutex (mutual-exclusion lock) protects a critical section so that only one thread at a time can enter it under the same locking discipline.

Semaphore

A semaphore controls access using a counter and permits. It can coordinate access to limited resources or signal between threads.

Condition Variable

A condition variable allows a thread to wait until a particular condition becomes true. It is normally used together with a mutex.

These mechanisms help threads coordinate access to shared information.

They must be used correctly. Incorrect synchronisation can still lead to problems such as deadlocks.

Six Beginner Knowledge Checks

Question 1

What is a thread?

Answer: A path of execution within a process.

Explanation: A thread carries out work inside the process’s execution environment.

Question 2

Can a process contain multiple threads?

Answer: Yes.

Explanation: A process can contain one or more threads.

Question 3

Which resources can threads in the same process share?

Answer: Program code, global and static data, heap memory, and open files.

Explanation: These are examples of resources belonging to the shared process environment.

Question 4

Which information does each thread maintain separately?

Answer: Its program counter, CPU register context, stack and execution state.

Explanation: Each thread needs its own execution context so it can progress independently of other threads.

Question 5

What is the difference between concurrency and parallelism?

Answer: Concurrency means multiple tasks make progress during overlapping periods. Parallelism means multiple tasks execute simultaneously.

Explanation: A single CPU core can support concurrency by switching between threads, while multiple cores can support simultaneous execution.

Question 6

What is a race condition?

Answer: A situation where the result depends on the timing or order of concurrent operations.

Explanation: Threads accessing shared data without proper coordination can produce incorrect results.

Beginner Revision Summary

Before moving to the technical explanation, remember these six ideas:

1. A program contains instructions.
2. A process provides the running environment and resources.
3. A thread is a path of execution within a process.
4. Threads share many process resources but maintain their own execution contexts.
5. Multithreading can improve responsiveness and support concurrency and parallelism.
6. Synchronisation helps protect shared data from conflicting operations.
