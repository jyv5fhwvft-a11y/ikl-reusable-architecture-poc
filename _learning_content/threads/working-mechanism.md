---
content_block_id: IKL-OS-003-CB-07
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-07
section_number: 7
section_title: How a Thread Works
block_type: html-section
order: 7
---

<section id="threads-working-mechanism" class="concept-section" aria-labelledby="threads-section-7-heading">

  <h2 id="threads-section-7-heading">7. How a Thread Works</h2>

  <div class="concept-identity-card">
    <h3>Understanding the Thread Lifecycle</h3>
    <p>A thread does not simply start running and continue forever. During its lifetime, it moves through different states depending on whether it is ready to use the CPU, currently executing, waiting for something, or finished.</p>
  </div>

  <h3>7.1 Understanding the Thread Lifecycle</h3>

  <p>The operating system manages these transitions using its thread-management and scheduling mechanisms.</p>

  <p>A simplified thread lifecycle includes:</p>

  <ul>
    <li><strong>New:</strong> The thread is being created.</li>
    <li><strong>Ready:</strong> The thread is prepared to run but is waiting for CPU time.</li>
    <li><strong>Running:</strong> The thread is currently executing on a CPU core.</li>
    <li><strong>Blocked/Waiting:</strong> The thread cannot continue until an event or required condition occurs.</li>
    <li><strong>Terminated:</strong> The thread has finished or has been stopped.</li>
  </ul>

  <p>Different operating systems may use different state names and more detailed state models. This is a teaching model of the main ideas.</p>

  <h3>7.2 Step 1 — Thread Creation</h3>

  <p>A program or runtime requests that a new thread be created.</p>

  <p>The operating system or threading runtime establishes the information and resources needed to manage the thread.</p>

  <p>For example, when a browser starts a background task, it may create or use a thread to perform that work.</p>

  <p>The new thread begins in a creation stage before becoming eligible to run.</p>

  <h3>7.3 Step 2 — Ready State</h3>

  <p>Once a thread is prepared to execute, it can enter the Ready state.</p>

  <p>This means:</p>

  <ul>
    <li>The thread is able to run.</li>
    <li>It is not currently executing.</li>
    <li>It is waiting for the scheduler to select it for CPU execution.</li>
  </ul>

  <p>A ready thread is not necessarily waiting because it has a problem. It may simply be waiting for its turn.</p>

  <h3>7.4 Step 3 — Scheduling and Dispatch</h3>

  <p>The CPU scheduler determines which eligible thread should receive CPU time.</p>

  <p>When a thread is selected and given a CPU core, it is dispatched for execution.</p>

  <div class="concept-note">
    <p><strong>Scheduling:</strong> The decision about which thread should run.</p>
    <p><strong>Dispatching:</strong> The action of starting or resuming the selected thread on a CPU.</p>
    <p>These are related but different operations.</p>
  </div>

  <h3>7.5 Step 4 — Running State</h3>

  <p>When a thread is executing instructions on a CPU core, it is in the Running state.</p>

  <p>It uses its own execution context, including:</p>

  <ul>
    <li>Program Counter.</li>
    <li>CPU Registers.</li>
    <li>Stack.</li>
    <li>Thread-specific information.</li>
  </ul>

  <p>It can also access shared process resources, subject to the program’s synchronisation and access rules.</p>

  <p>A running thread may continue until it finishes, waits for something, or is interrupted or pre-empted so another eligible thread can run.</p>

  <h3>7.6 Step 5 — Blocked or Waiting State</h3>

  <p>Sometimes a running thread cannot continue immediately.</p>

  <p>For example, it may need to:</p>

  <ul>
    <li>Wait for data from a file.</li>
    <li>Receive information from a network.</li>
    <li>Wait for user input.</li>
    <li>Wait for a lock or another synchronisation condition.</li>
    <li>Wait for an event to occur.</li>
  </ul>

  <p>The thread enters a Blocked or Waiting state.</p>

  <p>It is not currently using the CPU to execute its task.</p>

  <p>When the event or condition it needs is satisfied, the thread can become ready to run again.</p>

  <h3>7.7 Step 6 — Returning to Ready</h3>

  <p>Suppose a thread was waiting for information from a file.</p>

  <p>Once the required information becomes available, the thread can move from Blocked/Waiting to Ready.</p>

  <p>It does not automatically start running at that moment.</p>

  <p>It must still be selected by the scheduler before it can execute again.</p>

  <div class="concept-note">
    <strong>Important distinction:</strong> Becoming ready does not mean immediately receiving the CPU.
  </div>

  <h3>7.8 Step 7 — Pre-emption and Context Switching</h3>

  <p>A running thread may lose the CPU even though it has not finished its task.</p>

  <p>For example, the scheduler may allow another ready thread to run.</p>

  <p>This is called pre-emption when the running thread is interrupted or displaced by the scheduling mechanism.</p>

  <p>The operating system may perform a context switch to move CPU execution from one thread to another.</p>

  <p>During a context switch, the system preserves the execution information needed to resume the previous thread and restores the information needed by the next thread.</p>

  <p>This allows a thread to continue later from the appropriate point.</p>

  <h4>Important Distinction</h4>

  <ul>
    <li><strong>Scheduling:</strong> Deciding which thread should run.</li>
    <li><strong>Pre-emption:</strong> Taking the CPU away from a running thread before it finishes.</li>
    <li><strong>Context switching:</strong> Saving and restoring execution context when CPU execution changes.</li>
  </ul>

  <p>A context switch has overhead because the system must perform this management work.</p>

  <h3>7.9 Step 8 — Thread Termination</h3>

  <p>A thread reaches the Terminated state when it finishes its work or is stopped.</p>

  <p>Its remaining resources and management information are handled according to the operating system and threading API.</p>

  <p>A thread’s termination does not always mean the entire process terminates. Other threads in the same process may continue running.</p>

  <p>However, process termination can affect all threads belonging to that process. The precise behavior depends on the operating system and runtime.</p>

  <h3>7.10 Practical Example: A Web Browser</h3>

  <p>Imagine a browser loading a website while you interact with its interface.</p>

  <p>Different threads may help perform different tasks:</p>

  <ol>
    <li>A thread handles part of the user-interface work.</li>
    <li>Another thread performs background processing.</li>
    <li>A thread waits for network data.</li>
    <li>When the network data arrives, the waiting thread becomes ready.</li>
    <li>The scheduler selects it when CPU time is available.</li>
    <li>It resumes execution and helps process the received data.</li>
  </ol>

  <p>This helps explain how a browser can remain responsive while background tasks are taking place.</p>

  <p>This is a simplified example. Real browsers use more complex process and thread architectures.</p>

  <h3>7.11 Common Misunderstandings</h3>

  <div class="concept-note">
    <h4>Misunderstanding 1: A Ready thread is already running.</h4>
    <p><strong>Correction:</strong> A Ready thread is eligible to run but is waiting for CPU time.</p>
  </div>

  <div class="concept-note">
    <h4>Misunderstanding 2: A Blocked thread is simply waiting for its turn on the CPU.</h4>
    <p><strong>Correction:</strong> A Blocked thread is waiting for an event or condition. A Ready thread is waiting for CPU allocation.</p>
  </div>

  <div class="concept-note">
    <h4>Misunderstanding 3: Every context switch means a thread has finished.</h4>
    <p><strong>Correction:</strong> A context switch often allows a thread to pause and resume later.</p>
  </div>

  <div class="concept-note">
    <h4>Misunderstanding 4: A thread always runs continuously once it starts.</h4>
    <p><strong>Correction:</strong> It may be pre-empted, blocked, resumed or terminated.</p>
  </div>

  <div class="concept-note">
    <h4>Misunderstanding 5: When one thread terminates, the whole process must terminate.</h4>
    <p><strong>Correction:</strong> Other threads in the same process may continue running.</p>
  </div>

  <h3>7.12 Quick Revision</h3>

  <div class="concept-table-wrapper">
    <table>
      <thead>
        <tr>
          <th scope="col">State or mechanism</th>
          <th scope="col">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>New</td><td>Thread is being created</td></tr>
        <tr><td>Ready</td><td>Prepared to run, waiting for CPU time</td></tr>
        <tr><td>Running</td><td>Currently executing on a CPU core</td></tr>
        <tr><td>Blocked/Waiting</td><td>Waiting for an event or condition</td></tr>
        <tr><td>Terminated</td><td>Thread has finished or been stopped</td></tr>
        <tr><td>Scheduling</td><td>Selecting a thread to run</td></tr>
        <tr><td>Dispatching</td><td>Starting or resuming the selected thread</td></tr>
        <tr><td>Pre-emption</td><td>Interrupting a running thread so another can run</td></tr>
        <tr><td>Context switching</td><td>Saving and restoring execution context when CPU execution changes</td></tr>
      </tbody>
    </table>
  </div>

  <div class="concept-note">
    <strong>Key principle:</strong> A thread moves through states during its lifetime. The scheduler determines which ready thread receives CPU time, while context switching allows execution to move between threads.
  </div>

</section>
