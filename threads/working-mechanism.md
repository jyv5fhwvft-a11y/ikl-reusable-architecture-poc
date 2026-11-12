---
content_block_id: IKL-OS-003-CB-07
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-07
section_number: 7
section_title: How a Thread Works
block_type: html-section
order: 7
---

7. How a Thread Works

7.1 Understanding the Thread Lifecycle

A thread does not simply start running and continue forever. During its lifetime, it moves through different states depending on whether it is ready to use the CPU, currently executing, waiting for something, or finished.

The operating system manages these transitions using its thread-management and scheduling mechanisms.

A simplified thread lifecycle includes:

* New: The thread is being created.
* Ready: The thread is prepared to run but is waiting for CPU time.
* Running: The thread is currently executing on a CPU core.
* Blocked/Waiting: The thread cannot continue until an event or required condition occurs.
* Terminated: The thread has finished or has been stopped.

Different operating systems may use different state names and more detailed state models. This is a teaching model of the main ideas.

7.2 Step 1 — Thread Creation

A program or runtime requests that a new thread be created.

The operating system or threading runtime establishes the information and resources needed to manage the thread.

For example, when a browser starts a background task, it may create or use a thread to perform that work.

The new thread begins in a creation stage before becoming eligible to run.

7.3 Step 2 — Ready State

Once a thread is prepared to execute, it can enter the Ready state.

This means:

* The thread is able to run.
* It is not currently executing.
* It is waiting for the scheduler to select it for CPU execution.

A ready thread is not necessarily waiting because it has a problem. It may simply be waiting for its turn.

7.4 Step 3 — Scheduling and Dispatch

The CPU scheduler determines which eligible thread should receive CPU time.

When a thread is selected and given a CPU core, it is dispatched for execution.

Scheduling is the decision about which thread should run.

Dispatching is the action of starting or resuming the selected thread on a CPU.

These are related but different operations.

7.5 Step 4 — Running State

When a thread is executing instructions on a CPU core, it is in the Running state.

It uses its own execution context, including:

* Program Counter.
* CPU Registers.
* Stack.
* Thread-specific information.

It can also access shared process resources, subject to the program’s synchronisation and access rules.

A running thread may continue until it finishes, waits for something, or is interrupted or pre-empted so another eligible thread can run.

7.6 Step 5 — Blocked or Waiting State

Sometimes a running thread cannot continue immediately.

For example, it may need to:

* Wait for data from a file.
* Receive information from a network.
* Wait for user input.
* Wait for a lock or another synchronisation condition.
* Wait for an event to occur.

The thread enters a Blocked or Waiting state.

It is not currently using the CPU to execute its task.

When the event or condition it needs is satisfied, the thread can become ready to run again.

7.7 Step 6 — Returning to Ready

Suppose a thread was waiting for information from a file.

Once the required information becomes available, the thread can move from Blocked/Waiting to Ready.

It does not automatically start running at that moment.

It must still be selected by the scheduler before it can execute again.

This distinction is important:

Becoming ready does not mean immediately receiving the CPU.

7.8 Step 7 — Pre-emption and Context Switching

A running thread may lose the CPU even though it has not finished its task.

For example, the scheduler may allow another ready thread to run.

This is called pre-emption when the running thread is interrupted or displaced by the scheduling mechanism.

The operating system may perform a context switch to move CPU execution from one thread to another.

During a context switch, the system preserves the execution information needed to resume the previous thread and restores the information needed by the next thread.

This allows a thread to continue later from the appropriate point.

Important distinction:

* Scheduling: Deciding which thread should run.
* Pre-emption: Taking the CPU away from a running thread before it finishes.
* Context switching: Saving and restoring execution context when CPU execution changes.

A context switch has overhead because the system must perform this management work.

7.9 Step 8 — Thread Termination

A thread reaches the Terminated state when it finishes its work or is stopped.

Its remaining resources and management information are handled according to the operating system and threading API.

A thread’s termination does not always mean the entire process terminates. Other threads in the same process may continue running.

However, process termination can affect all threads belonging to that process. The precise behavior depends on the operating system and runtime.

7.10 Practical Example: A Web Browser

Imagine a browser loading a website while you interact with its interface.

Different threads may help perform different tasks:

1. A thread handles part of the user-interface work.
2. Another thread performs background processing.
3. A thread waits for network data.
4. When the network data arrives, the waiting thread becomes ready.
5. The scheduler selects it when CPU time is available.
6. It resumes execution and helps process the received data.

This helps explain how a browser can remain responsive while background tasks are taking place.

This is a simplified example. Real browsers use more complex process and thread architectures.

7.11 Common Misunderstandings

Misunderstanding 1: A Ready thread is already running.

Correction: A Ready thread is eligible to run but is waiting for CPU time.

Misunderstanding 2: A Blocked thread is simply waiting for its turn on the CPU.

Correction: A Blocked thread is waiting for an event or condition. A Ready thread is waiting for CPU allocation.

Misunderstanding 3: Every context switch means a thread has finished.

Correction: A context switch often allows a thread to pause and resume later.

Misunderstanding 4: A thread always runs continuously once it starts.

Correction: It may be pre-empted, blocked, resumed or terminated.

Misunderstanding 5: When one thread terminates, the whole process must terminate.

Correction: Other threads in the same process may continue running.

7.12 Quick Revision

State or mechanism	Meaning
New	Thread is being created
Ready	Prepared to run, waiting for CPU time
Running	Currently executing on a CPU core
Blocked/Waiting	Waiting for an event or condition
Terminated	Thread has finished or been stopped
Scheduling	Selecting a thread to run
Dispatching	Starting or resuming the selected thread
Pre-emption	Interrupting a running thread so another can run
Context switching	Saving and restoring execution context when CPU execution changes

Remember: A thread moves through states during its lifetime. The scheduler determines which ready thread receives CPU time, while context switching allows execution to move between threads.
