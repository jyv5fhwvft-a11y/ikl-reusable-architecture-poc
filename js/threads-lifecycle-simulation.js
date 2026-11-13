/* =========================================================
   IKL — THREADS LIFECYCLE SIMULATION
   File: threads-lifecycle-simulation.js

   Purpose:
   Demonstrate the main stages in a thread's lifecycle.

   Educational model:
   New → Ready → Running → Blocked/Waiting
   → Ready → Running → Terminated
   ========================================================= */

(function () {
  "use strict";

  const mount = document.getElementById(
    "threads-lifecycle-simulation"
  );

  // Stop safely if the simulation area is not on the page.
  if (!mount) {
    return;
  }

  const steps = [
    {
      state: "New",
      title: "A thread is created",
      explanation:
        "A new thread has been created inside a process. " +
        "The operating system prepares the information it needs " +
        "to manage the thread.",
      detail:
        "The thread exists, but it has not yet been placed in the Ready state."
    },
    {
      state: "Ready",
      title: "The thread is ready to run",
      explanation:
        "The thread is ready to execute and is waiting for the " +
        "CPU scheduler to select it.",
      detail:
        "Ready does not mean the thread is currently executing. " +
        "It is waiting for CPU time."
    },
    {
      state: "Running",
      title: "The thread gets CPU time",
      explanation:
        "The scheduler selects the thread, and the CPU begins " +
        "executing its instructions.",
      detail:
        "On a single CPU core, only one thread can execute on that " +
        "core at a time."
    },
    {
      state: "Blocked / Waiting",
      title: "The thread must wait",
      explanation:
        "The thread cannot continue yet because it is waiting " +
        "for an event, resource or operation to finish.",
      detail:
        "For example, it might be waiting for data from a file or " +
        "for another event to occur."
    },
    {
      state: "Ready",
      title: "The thread becomes ready again",
      explanation:
        "The event the thread was waiting for has occurred. " +
        "The thread can now compete for CPU time again.",
      detail:
        "It returns to the Ready state. It does not automatically " +
        "start executing."
    },
    {
      state: "Running",
      title: "The thread runs again",
      explanation:
        "The scheduler selects the thread again, allowing it to " +
        "continue executing its instructions.",
      detail:
        "The thread resumes its work using its saved execution context."
    },
    {
      state: "Terminated",
      title: "The thread has finished",
      explanation:
        "The thread has completed its work and is no longer " +
        "eligible for execution.",
      detail:
        "The operating system can release resources associated " +
        "with the finished thread."
    }
  ];

  let currentStep = 0;
  let timer = null;
  let isRunning = false;

  // Build the simulation interface.
  mount.innerHTML = `
    <section class="threads-simulation"
             aria-label="Thread lifecycle simulation">

      <div class="threads-simulation-progress">
        <div class="threads-simulation-progress-label">
          <span id="threads-lifecycle-step-count">
            Step 1 of 7
          </span>
          <span id="threads-lifecycle-progress-text">
            14%
          </span>
        </div>

        <div class="threads-simulation-progress-track"
             role="progressbar"
             aria-label="Lifecycle progress"
             aria-valuemin="1"
             aria-valuemax="7"
             aria-valuenow="1"
             id="threads-lifecycle-progress">
          <div class="threads-simulation-progress-fill"
               id="threads-lifecycle-progress-fill">
          </div>
        </div>
      </div>

      <div class="threads-lifecycle-state"
           aria-live="polite"
           aria-atomic="true">

        <p class="threads-simulation-label">
          CURRENT THREAD STATE
        </p>

        <h3 id="threads-lifecycle-state">
          New
        </h3>

        <h4 id="threads-lifecycle-title">
          A thread is created
        </h4>

        <p id="threads-lifecycle-explanation">
          A new thread has been created inside a process.
        </p>

        <div class="threads-lifecycle-detail">
          <strong>What does this mean?</strong>
          <p id="threads-lifecycle-detail">
            The thread exists, but it has not yet been placed
            in the Ready state.
          </p>
        </div>
      </div>

      <div class="threads-simulation-controls">
        <button type="button"
                id="threads-lifecycle-start">
          Start
        </button>

        <button type="button"
                id="threads-lifecycle-pause"
                disabled>
          Pause
        </button>

        <button type="button"
                id="threads-lifecycle-next">
          Next Step
        </button>

        <button type="button"
                id="threads-lifecycle-reset">
          Reset
        </button>
      </div>

      <p id="threads-lifecycle-status"
         class="threads-simulation-status"
         role="status"
         aria-live="polite">
        Ready to begin. Select Start or Next Step.
      </p>

    </section>
  `;

  // Find the interface elements.
  const stateElement = document.getElementById(
    "threads-lifecycle-state"
  );

  const titleElement = document.getElementById(
    "threads-lifecycle-title"
  );

  const explanationElement = document.getElementById(
    "threads-lifecycle-explanation"
  );

  const detailElement = document.getElementById(
    "threads-lifecycle-detail"
  );

  const stepCountElement = document.getElementById(
    "threads-lifecycle-step-count"
  );

  const progressTextElement = document.getElementById(
    "threads-lifecycle-progress-text"
  );

  const progressElement = document.getElementById(
    "threads-lifecycle-progress"
  );

  const progressFillElement = document.getElementById(
    "threads-lifecycle-progress-fill"
  );

  const statusElement = document.getElementById(
    "threads-lifecycle-status"
  );

  const startButton = document.getElementById(
    "threads-lifecycle-start"
  );

  const pauseButton = document.getElementById(
    "threads-lifecycle-pause"
  );

  const nextButton = document.getElementById(
    "threads-lifecycle-next"
  );

  const resetButton = document.getElementById(
    "threads-lifecycle-reset"
  );

  // Stop automatic playback.
  function stopTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    isRunning = false;
  }

  // Display the current lifecycle stage.
  function render() {
    const step = steps[currentStep];

    const progress = Math.round(
      ((currentStep + 1) / steps.length) * 100
    );

    stateElement.textContent = step.state;
    titleElement.textContent = step.title;
    explanationElement.textContent = step.explanation;
    detailElement.textContent = step.detail;

    stepCountElement.textContent =
      `Step ${currentStep + 1} of ${steps.length}`;

    progressTextElement.textContent = `${progress}%`;

    progressElement.setAttribute(
      "aria-valuenow",
      String(currentStep + 1)
    );

    progressFillElement.style.width = `${progress}%`;

    startButton.disabled =
      isRunning || currentStep === steps.length - 1;

    pauseButton.disabled = !isRunning;

    nextButton.disabled =
      isRunning || currentStep === steps.length - 1;
  }

  // Move to the next lifecycle stage.
  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep += 1;
      render();

      statusElement.textContent =
        `Step ${currentStep + 1}: ${steps[currentStep].state}.`;
    }

    if (currentStep === steps.length - 1) {
      stopTimer();
      render();

      statusElement.textContent =
        "Simulation complete. The thread has terminated.";
    }
  }

  // Start automatic playback.
  function startSimulation() {
    if (isRunning || currentStep === steps.length - 1) {
      return;
    }

    isRunning = true;
    render();

    statusElement.textContent =
      "Simulation running. Watch the thread move through its states.";

    timer = setInterval(function () {
      nextStep();
    }, 1800);
  }

  // Pause automatic playback.
  function pauseSimulation() {
    if (!isRunning) {
      return;
    }

    stopTimer();
    render();

    statusElement.textContent =
      "Simulation paused. Select Start to continue or Next Step to advance.";
  }

  // Return the simulation to its beginning.
  function resetSimulation() {
    stopTimer();

    currentStep = 0;

    render();

    statusElement.textContent =
      "Simulation reset. Ready to begin.";
  }

  // Connect the controls to their actions.
  startButton.addEventListener(
    "click",
    startSimulation
  );

  pauseButton.addEventListener(
    "click",
    pauseSimulation
  );

  nextButton.addEventListener(
    "click",
    nextStep
  );

  resetButton.addEventListener(
    "click",
    resetSimulation
  );

  // Show the initial state.
  render();

})();
