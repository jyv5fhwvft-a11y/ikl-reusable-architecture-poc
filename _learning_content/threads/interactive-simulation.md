---
content_block_id: IKL-OS-003-CB-08
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-08
section_number: 8
section_title: Interactive Thread Experiences
block_type: html-section
order: 8
---
<section id="threads-interactive-experiences" class="concept-section" aria-labelledby="threads-section-8-heading">
  <span id="ikl-experience-it"
        class="ikl-learning-anchor"
        aria-hidden="true"></span>

  <h2 id="threads-section-8-heading">8. Interactive Thread Experiences</h2>

  <h3>8.1 Experience How Threads Work</h3>

  <p>Reading about threads helps us understand the theory. Interacting with simulations helps us see what happens when threads execute, share resources and compete for CPU time.</p>

  <p>This section introduces three educational simulations:</p>

  <ol>
    <li>Thread Lifecycle and Scheduling.</li>
    <li>One CPU Core versus Multiple CPU Cores.</li>
    <li>Race Conditions and Synchronisation.</li>
  </ol>

  <p>Each simulation focuses on a different part of thread management.</p>

  <h4>Learning objectives</h4>

  <p>By the end of these experiences, you should be able to:</p>

  <ul>
    <li>Recognise the main states in a thread lifecycle.</li>
    <li>Understand how the scheduler gives threads CPU time.</li>
    <li>Distinguish concurrency from parallelism.</li>
    <li>Explain why shared data can produce race conditions.</li>
    <li>Understand how a mutex can protect a critical section.</li>
  </ul>

  <h3>8.2 Simulation 1 — Thread Lifecycle and Scheduling</h3>

  <h4>What will you explore?</h4>

  <p>Follow a thread as it moves through its lifecycle.</p>

  <p>You will see how a thread is created, becomes ready, receives CPU time, waits for an event, resumes execution and eventually terminates.</p>

  <h4>Simulation setup</h4>

  <p>The simulation should display one thread and its current state.</p>

  <p>It should provide these controls:</p>

  <ul>
    <li><strong>Start:</strong> Begin the thread lifecycle.</li>
    <li><strong>Pause:</strong> Temporarily stop the simulation.</li>
    <li><strong>Next Step:</strong> Advance to the next lifecycle event.</li>
    <li><strong>Reset:</strong> Return to the beginning.</li>
  </ul>

  <h4>Expected lifecycle</h4>

  <p>The simulation should demonstrate this simplified sequence:</p>

  <ol>
    <li><strong>New:</strong> A thread is created.</li>
    <li><strong>Ready:</strong> The thread is prepared to execute and waits for CPU time.</li>
    <li><strong>Running:</strong> The scheduler selects the thread and it executes.</li>
    <li><strong>Blocked/Waiting:</strong> The thread waits for an event or required condition.</li>
    <li><strong>Ready:</strong> The event occurs, so the thread becomes eligible to run again.</li>
    <li><strong>Running:</strong> The scheduler selects the thread again.</li>
    <li><strong>Terminated:</strong> The thread completes its task.</li>
  </ol>

  <p>The simulation should visually highlight the current state and show a short explanation whenever the thread changes state.</p>

  <div id="threads-lifecycle-simulation" class="threads-simulation" aria-live="polite"></div>

  <div class="concept-note">
    <h4>Important learning point</h4>
    <p>A thread that becomes Ready does not automatically become Running.</p>
    <p>It must still be selected by the scheduler.</p>
  </div>

  <h4>Questions to consider</h4>

  <ol>
    <li>What is the difference between Ready and Running?</li>
    <li>Why might a thread enter Blocked/Waiting?</li>
    <li>Does a thread immediately run when it becomes Ready?</li>
    <li>What happens when a thread terminates?</li>
  </ol>

  <h3>8.3 Simulation 2 — One CPU Core versus Multiple CPU Cores</h3>

  <h4>What will you explore?</h4>

  <p>Discover how a computer can manage several threads using one CPU core or multiple CPU cores.</p>

  <p>This simulation demonstrates the difference between concurrency and parallelism.</p>

  <h4>Simulation setup</h4>

  <p>The simulation should display three threads:</p>

  <ul>
    <li>Thread A</li>
    <li>Thread B</li>
    <li>Thread C</li>
  </ul>

  <p>Provide a CPU-core selector with three options:</p>

  <ul>
    <li>1 Core</li>
    <li>2 Cores</li>
    <li>4 Cores</li>
  </ul>

  <p>The learner should be able to start, pause and reset the simulation.</p>

  <h4>Experience with one CPU core</h4>

  <p>With one CPU core, only one thread can execute on that core at a time.</p>

  <p>The scheduler can rapidly switch between Thread A, Thread B and Thread C.</p>

  <p>The learner should see the threads making progress through interleaved execution.</p>

  <p>This demonstrates concurrency.</p>

  <h4>Experience with two CPU cores</h4>

  <p>With two CPU cores, two threads can execute at the same time, while the third waits for an available core.</p>

  <p>The simulation should show how the scheduler distributes work across the available cores.</p>

  <h4>Experience with four CPU cores</h4>

  <p>With four CPU cores, all three threads can potentially execute at the same time, assuming they are eligible and there are no other constraints.</p>

  <p>The fourth core may remain unused in this simplified three-thread example.</p>

  <p>This demonstrates parallelism.</p>

  <h4>Visual comparison</h4>

  <table>
    <thead>
      <tr>
        <th scope="col">Configuration</th>
        <th scope="col">What happens?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1 CPU core</td>
        <td>Threads take turns executing on one core</td>
      </tr>
      <tr>
        <td>2 CPU cores</td>
        <td>Up to two threads can execute simultaneously</td>
      </tr>
      <tr>
        <td>4 CPU cores</td>
        <td>Three eligible threads can potentially execute simultaneously</td>
      </tr>
    </tbody>
  </table>

<div id="threads-cpu-cores-simulation" class="threads-simulation" aria-live="polite"></div>
  <div class="concept-note">
    <h4>Important learning point</h4>
    <ul>
      <li><strong>Concurrency:</strong> Multiple tasks make progress during overlapping periods.</li>
      <li><strong>Parallelism:</strong> Multiple tasks execute at the same time on different processing resources.</li>
    </ul>
    <p>Concurrency does not require multiple CPU cores. Parallel execution requires suitable processing resources and conditions.</p>
  </div>

  <p>The simulation is a simplified teaching model. Real scheduling also depends on thread priority, workload, operating-system policy, processor availability and other factors.</p>

  <h4>Questions to consider</h4>

  <ol>
    <li>Can three threads make progress on one CPU core?</li>
    <li>Can two threads execute simultaneously on two CPU cores?</li>
    <li>Does concurrency always mean parallel execution?</li>
    <li>Why might adding CPU cores improve performance for some workloads but not others?</li>
  </ol>

  <h3>8.4 Simulation 3 — Race Conditions and Synchronisation</h3>

  <h4>What will you explore?</h4>

  <p>Discover what happens when two threads attempt to update the same shared data without proper coordination.</p>

  <p>This simulation uses a shared bank account to demonstrate a race condition.</p>

  <h4>Simulation setup</h4>

  <p>The starting account balance is:</p>

  <p><strong>$100</strong></p>

  <p>Two threads attempt to deposit $10 each:</p>

  <ul>
    <li>Thread A deposits $10.</li>
    <li>Thread B deposits $10.</li>
  </ul>

  <p>The correct final balance should be:</p>

  <p><strong>$120</strong></p>

  <p>The learner should be able to compare two scenarios:</p>

  <ol>
    <li>Without a mutex.</li>
    <li>With a mutex.</li>
  </ol>

  <h4>Scenario A — Without a Mutex</h4>

  <p>Both threads access the same shared account balance.</p>

  <p>For this demonstration, assume each deposit is implemented as a non-atomic read-modify-write operation.</p>

  <p>The simulation should allow this sequence:</p>

  <ol>
    <li>Thread A reads the balance: $100.</li>
    <li>Thread B reads the balance: $100.</li>
    <li>Thread A calculates $110.</li>
    <li>Thread B calculates $110.</li>
    <li>Thread A writes $110.</li>
    <li>Thread B writes $110.</li>
  </ol>

  <p>The final balance becomes:</p>

  <p><strong>$110</strong></p>

  <p>But both deposits were intended to happen.</p>

  <p>One update has been lost.</p>

  <p>This is an example of a race condition.</p>

  <h4>Scenario B — With a Mutex</h4>

  <p>Now introduce a mutex, which is a mutual-exclusion lock.</p>

  <p>A mutex ensures that only one thread at a time can enter the protected critical section when all relevant accesses follow the same locking discipline.</p>

  <p>The simulation should demonstrate:</p>

  <ol>
    <li>Thread A acquires the mutex.</li>
    <li>Thread A reads $100 and calculates $110.</li>
    <li>Thread A writes $110.</li>
    <li>Thread A releases the mutex.</li>
    <li>Thread B acquires the mutex.</li>
    <li>Thread B reads $110 and calculates $120.</li>
    <li>Thread B writes $120.</li>
    <li>Thread B releases the mutex.</li>
  </ol>

  <p>The final balance becomes:</p>

  <p><strong>$120</strong></p>

  <p>Both deposits are correctly included.</p>

  <h4>Visual comparison</h4>

  <table>
    <thead>
      <tr>
        <th scope="col">Scenario</th>
        <th scope="col">Final balance</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Without mutex</td>
        <td>$110</td>
        <td>One update is lost</td>
      </tr>
      <tr>
        <td>With mutex</td>
        <td>$120</td>
        <td>Both updates are included</td>
      </tr>
    </tbody>
  </table>

  <div id="threads-race-condition-simulation" class="threads-simulation" aria-live="polite"></div>


  <div class="concept-note">
    <h4>Important learning point</h4>
    <p>A race condition occurs when the result depends on the timing or ordering of concurrent operations accessing shared data.</p>
    <p>A mutex can protect a critical section by controlling access to shared data.</p>
    <p>However, a mutex must be used correctly. All relevant accesses must follow the same protection rules. Incorrect locking can introduce other problems, including deadlocks.</p>
  </div>

  <h4>Questions to consider</h4>

  <ol>
    <li>Why did the balance become $110 without a mutex?</li>
    <li>What is a race condition?</li>
    <li>What is a critical section?</li>
    <li>How does a mutex protect shared data?</li>
    <li>Why must threads coordinate when accessing shared resources?</li>
  </ol>

  <h3>8.5 Connect the Simulations to Real Applications</h3>

  <p>These three experiences represent common challenges in real software.</p>

  <table>
    <thead>
      <tr>
        <th scope="col">Simulation</th>
        <th scope="col">Practical connection</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thread Lifecycle and Scheduling</td>
        <td>Operating-system thread management</td>
      </tr>
      <tr>
        <td>CPU Core Comparison</td>
        <td>Multicore processors and concurrent applications</td>
      </tr>
      <tr>
        <td>Race Conditions and Synchronisation</td>
        <td>Banking systems, shared counters, databases and other shared-data applications</td>
      </tr>
    </tbody>
  </table>

  <p>Real applications may use additional techniques, including semaphores, condition variables, atomic operations and other synchronisation mechanisms.</p>

  <p>The simulations introduce the core ideas without attempting to reproduce every detail of a real operating system.</p>

  <h3>8.6 What You Should Understand After These Experiences</h3>

  <p>You should now be able to explain:</p>

  <ul>
    <li>How a thread moves through its lifecycle.</li>
    <li>Why a Ready thread may have to wait for CPU time.</li>
    <li>How a scheduler manages CPU execution.</li>
    <li>How one CPU core can support concurrent progress.</li>
    <li>How multiple CPU cores can support parallel execution.</li>
    <li>Why shared data can produce race conditions.</li>
    <li>How a mutex can protect a critical section.</li>
  </ul>

  <h3>8.7 Simulation Design and Accuracy Notes</h3>

  <p>The following principles should guide the eventual implementation:</p>

  <ol>
    <li>The simulations must be educational models, not claims that they reproduce a complete operating-system implementation.</li>
    <li>The lifecycle simulation must distinguish Ready, Running and Blocked/Waiting.</li>
    <li>The CPU simulation must distinguish concurrent progress from simultaneous execution.</li>
    <li>The race-condition simulation must show the individual read and write operations so the lost update is understandable.</li>
    <li>The mutex simulation must show lock acquisition and release.</li>
    <li>Each simulation should provide clear explanations, controls and a reset option.</li>
    <li>The simulations should work on mobile and tablet screens as well as larger screens.</li>
    <li>The learner should be able to explore at their own pace.</li>
  </ol>

  <div class="concept-note">
    <p><strong>Remember:</strong> Threads make applications capable of performing multiple tasks, but effective thread management requires scheduling, coordination and safe access to shared resources.</p>
  </div>

</section>
