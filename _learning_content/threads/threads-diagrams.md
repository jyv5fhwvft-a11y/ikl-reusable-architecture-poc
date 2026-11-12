---
content_block_id: IKL-OS-003-CB-09
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-09
section_number: 9
section_title: Thread Lifecycle, Flowcharts and Sequence Diagrams
block_type: html-section
order: 9
---

<section id="threads-diagrams" class="concept-section" aria-labelledby="threads-section-9-heading">

  <h2 id="threads-section-9-heading">9. Thread Lifecycle, Flowcharts and Sequence Diagrams</h2>

  <h3>9.1 Why Use Diagrams to Understand Threads?</h3>

  <p>Threads involve several components and activities working together.</p>

  <p>Text explains what happens, but diagrams help us visualise:</p>

  <ul>
    <li>How threads relate to their parent process.</li>
    <li>How a thread moves between lifecycle states.</li>
    <li>How the scheduler and CPU cooperate.</li>
    <li>How race conditions occur when threads access shared data.</li>
    <li>How synchronisation helps protect shared resources.</li>
  </ul>

  <p>This section introduces four diagrams.</p>

  <h3>9.2 Diagram 1 — Process and Thread Architecture</h3>

  <h4>Understanding the relationship</h4>

  <p>A process provides a shared environment for its threads.</p>

  <p>Threads belonging to the same process commonly share program code, global and static data, heap memory and process-associated resources.</p>

  <p>Each thread maintains its own execution context.</p>

  <h4>Conceptual architecture diagram</h4>

```mermaid
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
```

  <h4>How to understand the diagram</h4>

  <ol>
    <li>The process is the overall resource environment.</li>
    <li>The shared resources are available to threads belonging to that process, subject to access and synchronisation rules.</li>
    <li>Each thread has its own program counter, CPU registers, stack, state and thread-local storage.</li>
    <li>The threads are separate execution paths operating within the same process.</li>
  </ol>

  <div class="concept-note">
    <h4>Important distinction</h4>
    <p>Sharing a process does not mean that threads share everything.</p>
    <p>They share many process resources, but they maintain separate execution contexts.</p>
  </div>

  <h3>9.3 Diagram 2 — Thread Lifecycle Flowchart</h3>

  <h4>Understanding the lifecycle</h4>

  <p>A thread moves through different states during its lifetime.</p>

  <p>The following flowchart illustrates a simplified lifecycle, including creation, execution, waiting, resuming and termination.</p>

  <h4>Thread lifecycle flowchart</h4>

```mermaid
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
```

  <h4>Step-by-step explanation</h4>

  <ol>
    <li><strong>New:</strong> A thread is created.</li>
    <li><strong>Ready:</strong> It is eligible to run but is waiting for CPU time.</li>
    <li><strong>Running:</strong> The scheduler selects it and it executes.</li>
    <li><strong>Blocked/Waiting:</strong> It cannot continue until a required event or condition occurs.</li>
    <li><strong>Ready again:</strong> Once the event occurs, it becomes eligible for CPU time.</li>
    <li><strong>Terminated:</strong> It completes its work or is stopped.</li>
  </ol>

  <h4>Understanding pre-emption</h4>

  <p>A running thread may be pre-empted before it finishes.</p>

  <p>It returns to the Ready state so that another eligible thread can receive CPU time.</p>

  <p>A context switch may occur when execution moves to another thread.</p>

  <div class="concept-note">
    <h4>Important distinction</h4>
    <p>A thread becoming Ready does not mean it immediately starts Running.</p>
    <p>The scheduler must select it.</p>
  </div>

  <h3>9.4 Diagram 3 — Thread Scheduling Sequence Diagram</h3>

  <h4>Understanding scheduling</h4>

  <p>A sequence diagram shows how different parts of a system interact over time.</p>

  <p>Here we examine a simplified example involving:</p>

  <ul>
    <li>Thread 1.</li>
    <li>Thread 2.</li>
    <li>The operating-system scheduler.</li>
    <li>The CPU.</li>
  </ul>

  <h4>Thread scheduling sequence</h4>

```mermaid
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
```

  <h4>How to read the sequence</h4>

  <ol>
    <li>Thread 1 becomes Ready.</li>
    <li>The scheduler selects Thread 1.</li>
    <li>The CPU begins executing Thread 1.</li>
    <li>A scheduling event causes execution to move away from Thread 1.</li>
    <li>The scheduler selects Thread 2.</li>
    <li>The required execution context is saved and restored.</li>
    <li>Thread 2 begins executing.</li>
    <li>When another scheduling event occurs, Thread 1 may resume if it is Ready and selected.</li>
  </ol>

  <h4>What is a context switch?</h4>

  <p>A context switch is the process of preserving the execution context of one thread and restoring the context of another when CPU execution changes.</p>

  <p>The saved information allows a thread to resume its work later.</p>

  <div class="concept-note">
    <h4>Important distinction</h4>
    <p><strong>Scheduling</strong> is the decision about which thread should run.</p>
    <p><strong>Context switching</strong> is the mechanism that allows CPU execution to move between threads.</p>
  </div>

  <p>The diagram is a simplified teaching sequence. Actual operating systems may involve additional components and more complex scheduling events.</p>

  <h3>9.5 Diagram 4 — Race Condition and Synchronisation Sequence</h3>

  <h4>Understanding the problem</h4>

  <p>Threads may share data inside a process.</p>

  <p>If two threads access and modify the same data without suitable coordination, their operations can interfere with one another.</p>

  <p>This can produce a race condition.</p>

  <p>We will use a shared bank account to demonstrate the problem.</p>

  <p><strong>Starting balance: $100</strong></p>

  <p>Two threads each attempt to deposit $10.</p>

  <h4>Scenario A — Without a Mutex</h4>

  <p>The deposit is assumed to use separate read, calculate and write operations.</p>

  <h4>Race condition sequence</h4>

```mermaid
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
```

  <h4>What happened?</h4>

  <ol>
    <li>Thread A reads $100.</li>
    <li>Thread B also reads $100.</li>
    <li>Both calculate a new balance of $110.</li>
    <li>Thread A writes $110.</li>
    <li>Thread B writes $110.</li>
    <li>The final balance remains $110.</li>
  </ol>

  <p>The intended final balance was $120.</p>

  <p>One deposit was lost because the operations interfered with one another.</p>

  <p>This is a race condition caused by an unsafe read-modify-write sequence.</p>

  <h4>Scenario B — With a Mutex</h4>

  <p>A mutex protects the critical section so that only one thread at a time can perform the protected update.</p>

  <h4>Synchronisation sequence</h4>

```mermaid
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
```

  <h4>What changed?</h4>

  <ol>
    <li>Thread A acquires the mutex.</li>
    <li>Thread A performs the protected update.</li>
    <li>Thread A releases the mutex.</li>
    <li>Thread B acquires the mutex.</li>
    <li>Thread B reads the updated balance.</li>
    <li>Thread B performs its update.</li>
    <li>Thread B releases the mutex.</li>
    <li>The final balance is $120.</li>
  </ol>

  <p>Both deposits are included.</p>

  <div class="concept-note">
    <h4>Important learning point</h4>
    <p>A mutex provides mutual exclusion for a protected critical section.</p>
    <p>It works correctly only when all relevant accesses follow the same locking discipline.</p>
    <p>A mutex does not automatically make every part of an application thread-safe.</p>
  </div>

  <h3>9.6 Compare the Four Diagrams</h3>

  <table>
    <thead>
      <tr>
        <th scope="col">Diagram</th>
        <th scope="col">What it teaches</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Process and Thread Architecture</td>
        <td>What threads share and what remains individual</td>
      </tr>
      <tr>
        <td>Thread Lifecycle Flowchart</td>
        <td>How a thread changes state</td>
      </tr>
      <tr>
        <td>Scheduling Sequence Diagram</td>
        <td>How scheduling and context switching work</td>
      </tr>
      <tr>
        <td>Race Condition Sequence</td>
        <td>Why synchronisation is needed for shared data</td>
      </tr>
    </tbody>
  </table>

  <p>Each diagram explains a different aspect of multithreading.</p>

  <p>Together, they provide a broader understanding of how threads are organised, executed and coordinated.</p>

  <h3>9.7 Quick Revision</h3>

  <p>Remember these four ideas:</p>

  <ol>
    <li><strong>Architecture:</strong> Threads share many process resources but have individual execution contexts.</li>
    <li><strong>Lifecycle:</strong> Threads move between states such as Ready, Running and Blocked/Waiting.</li>
    <li><strong>Scheduling:</strong> The scheduler selects eligible threads, while context switching allows execution to move between them.</li>
    <li><strong>Synchronisation:</strong> Mutexes can protect critical sections and help prevent unsafe concurrent updates.</li>
  </ol>

  <div class="concept-note">
    <p><strong>Final takeaway:</strong> Understanding threads requires understanding both their individual execution paths and the shared environment in which they operate.</p>
  </div>

</section>
