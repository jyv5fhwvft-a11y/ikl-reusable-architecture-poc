---
content_block_id: IKL-OS-003-CB-02
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-02
section_number: 2
section_title: Threads Explained Like You’re Five
block_type: html-section
order: 2
---
2. Threads Explained Like You’re Five

What is a Thread?

Imagine you are playing a video game.

Your game has many things happening:

* Your character is moving.
* Music is playing.
* Enemies are moving around.
* The score is being updated.

All these activities are part of the same game.

A computer program can also organise its work into different activities. A thread is one path of work that can be carried out inside a running program’s process.

Think of a thread as one worker doing a particular job.

A Simple Art-Room Analogy

Imagine an art room where children are making a large picture together.

* The art room is like a process.
* The paints, paper and tables are shared resources.
* Each child working on a part of the picture is like a thread.

Each child has an individual task, but they share the same room and materials.

In a similar way, threads belonging to the same process share many resources, while each thread has its own execution information.

From Program to Process to Thread

Let’s understand how the three are connected.

Step 1 — Program

A program is a set of instructions stored on a computer. It is like a game waiting to be started.

Step 2 — Process

When the program starts running, the operating system creates a process to provide its execution environment and resources.

It is like opening the game and preparing everything needed to play.

Step 3 — Thread

The process contains one or more threads that carry out work.

It is like having different workers inside the game, each handling an activity.

Remember:

* A program is the instructions.
* A process is the running environment.
* A thread is a path of execution within that process.

Example: Watching a Video

Imagine watching a video on your device.

Several activities may need to happen:

1. The video needs to be displayed.
2. The sound needs to be played.
3. The captions may need to be shown.
4. The playback controls need to respond when you tap them.

A video application can use multiple threads to organise these activities.

This can help the application remain responsive while different tasks are being handled.

The exact way an application divides its work depends on its design and software environment.

Program vs Process vs Thread

Term	Simple meaning	Example
Program	Instructions stored on a computer	A video application before it starts
Process	A running instance with its own resources	The video application after it opens
Thread	A path of execution inside a process	A thread handling part of the video’s work

Check Your Understanding

Question 1: What is a program?

Answer: A set of instructions stored on a computer.

Explanation: A program contains instructions that can be executed when it is started.

Question 2: What happens when a program starts running?

Answer: The operating system creates a process.

Explanation: The process provides the environment and resources needed for the program to run.

Question 3: What is a thread?

Answer: A path of execution within a process.

Explanation: A thread carries out work inside the process.

Question 4: Can one process contain more than one thread?

Answer: Yes.

Explanation: A process can contain one thread or multiple threads.

Question 5: Do threads in the same process share resources?

Answer: Yes, they share many process resources.

Explanation: For example, they can share the process’s memory and open files, while each thread maintains its own execution context.
