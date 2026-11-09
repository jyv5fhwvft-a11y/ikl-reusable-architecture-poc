
---
id: IKL-OS-002-CB-01
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-01
section_number: 1
section_title: Identity and Definition
block_type: definition
order: 1
---

# What is a Process?

## Simple definition

A process is a program that is currently executing.

It includes the program's instructions, its current execution state, and the resources the operating system manages for it.

## First-grader explanation

Imagine a recipe book.

The recipe is like a program: it contains instructions for preparing food.

When someone starts following that recipe, the activity of preparing the food is like a process.

The recipe itself is not doing anything. The process is the work actually happening.

## Analogy

Think of a program as a musical score and a process as a live performance.

- Musical score: Program.
- Musician performing it: Executing process.
- Current position in the music: Execution state.
- Instruments and equipment: Resources used during execution.

The same musical score can be performed multiple times. Similarly, the same program can have multiple processes running simultaneously.

## Beginner explanation

When you open an application, the operating system creates and manages a process for its execution.

A process needs resources such as:

- CPU execution time
- Memory
- Access to files
- Input and output resources

The operating system manages these resources and coordinates process execution.

## Technical explanation

A process is an active instance of a program.

It has an execution context and associated operating-system-managed resources.

Important process information includes:

- Process identifier (PID)
- Process state
- Program counter
- CPU register context
- Address space
- Open files and other resources
- Scheduling information

The operating system maintains process management information, commonly represented through a Process Control Block (PCB).

## Program versus Process

| Program | Process |
|---|---|
| Passive set of instructions | Active execution |
| Stored as a file | Managed execution instance |
| Does not need CPU time by itself | Requires CPU scheduling |
| Can create multiple processes | Has its own execution state |

## Important distinction

A process is not simply an application window.

An application may create multiple processes, and a process may continue running without a visible window.

A process is an operating-system concept describing a program in execution.
