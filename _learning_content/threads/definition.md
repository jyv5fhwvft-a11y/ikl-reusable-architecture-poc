⸻
content_block_id: IKL-OS-003-CB-01
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-01
section_number: 1
section_title: Identity and Definition
block_type: html-section
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
