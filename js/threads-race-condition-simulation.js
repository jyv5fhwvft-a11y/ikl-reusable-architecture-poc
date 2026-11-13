/* =========================================================
   INTERACTIVE KNOWLEDGE LEXICON
   CONCEPT 003 — THREADS
   Simulation 3: Race Conditions and Synchronisation
   File: threads-race-condition-simulation.js
   ========================================================= */

(function () {
    "use strict";

    /* 1. FIND THE SIMULATION MOUNT POINT */

    const mount = document.getElementById(
        "threads-race-condition-simulation"
    );

    if (!mount) {
        return;
    }

    /* 2. CREATE THE SIMULATION INTERFACE */

    mount.innerHTML = `
        <section class="threads-simulation">
            <div class="threads-simulation-panel">

                <h3>Explore Race Conditions</h3>

                <p>
                    Two threads will deposit $10 each into the
                    same shared bank account. Follow their
                    operations to discover why coordination matters.
                </p>

                <div class="threads-race-scenarios">
                    <button
                        type="button"
                        id="threads-race-without-mutex">
                        Without a Mutex
                    </button>

                    <button
                        type="button"
                        id="threads-race-with-mutex"
                        class="threads-button-secondary">
                        With a Mutex
                    </button>
                </div>

                <div class="threads-race-balance">
                    <span>Shared account balance</span>
                    <strong id="threads-race-balance">$100</strong>
                </div>

                <div class="threads-simulation-grid">
                    <div class="threads-simulation-panel
                                threads-race-thread">
                        <h4>Thread A</h4>
                        <p id="threads-race-thread-a">
                            Waiting to begin
                        </p>
                    </div>

                    <div class="threads-simulation-panel
                                threads-race-thread">
                        <h4>Thread B</h4>
                        <p id="threads-race-thread-b">
                            Waiting to begin
                        </p>
                    </div>
                </div>

                <div class="threads-race-lock">
                    <strong>Mutex status:</strong>
                    <span id="threads-race-lock-status">
                        Not used in this scenario
                    </span>
                </div>

                <h4>Operation sequence</h4>

                <ol
                    id="threads-race-operation-list"
                    class="threads-race-operation-list">
                </ol>

                <div class="threads-simulation-controls">
                    <button
                        type="button"
                        id="threads-race-start">
                        Start
                    </button>

                    <button
                        type="button"
                        id="threads-race-next"
                        class="threads-button-secondary">
                        Next Step
                    </button>

                    <button
                        type="button"
                        id="threads-race-pause"
                        class="threads-button-secondary">
                        Pause
                    </button>

                    <button
                        type="button"
                        id="threads-race-reset"
                        class="threads-button-secondary">
                        Reset
                    </button>
                </div>

                <div
                    id="threads-race-status"
                    class="threads-simulation-status"
                    role="status"
                    aria-live="polite">
                    Choose a scenario, then press Start or Next Step.
                </div>

                <div
                    id="threads-race-result"
                    class="threads-race-result"
                    aria-live="polite">
                </div>

            </div>
        </section>
    `;

    /* 3. FIND THE DISPLAY ELEMENTS */

    const balanceDisplay = mount.querySelector(
        "#threads-race-balance"
    );

    const threadADisplay = mount.querySelector(
        "#threads-race-thread-a"
    );

    const threadBDisplay = mount.querySelector(
        "#threads-race-thread-b"
    );

    const lockDisplay = mount.querySelector(
        "#threads-race-lock-status"
    );

    const operationList = mount.querySelector(
        "#threads-race-operation-list"
    );

    const statusDisplay = mount.querySelector(
        "#threads-race-status"
    );

    const resultDisplay = mount.querySelector(
        "#threads-race-result"
    );

    const withoutMutexButton = mount.querySelector(
        "#threads-race-without-mutex"
    );

    const withMutexButton = mount.querySelector(
        "#threads-race-with-mutex"
    );

    const startButton = mount.querySelector(
        "#threads-race-start"
    );

    const nextButton = mount.querySelector(
        "#threads-race-next"
    );

    const pauseButton = mount.querySelector(
        "#threads-race-pause"
    );

    const resetButton = mount.querySelector(
        "#threads-race-reset"
    );

    /* 4. DEFINE THE TWO EDUCATIONAL SCENARIOS */

    const scenarios = {
        withoutMutex: [
            {
                thread: "A",
                action: "read",
                description: "Thread A reads the balance: $100."
            },
            {
                thread: "B",
                action: "read",
                description: "Thread B reads the balance: $100."
            },
            {
                thread: "A",
                action: "calculate",
                description: "Thread A calculates $100 + $10 = $110."
            },
            {
                thread: "B",
                action: "calculate",
                description: "Thread B calculates $100 + $10 = $110."
            },
            {
                thread: "A",
                action: "write",
                description: "Thread A writes $110 to the account."
            },
            {
                thread: "B",
                action: "write",
                description: "Thread B writes $110 to the account."
            }
        ],

        withMutex: [
            {
                thread: "A",
                action: "lock",
                description: "Thread A acquires the mutex."
            },
            {
                thread: "A",
                action: "read",
                description: "Thread A reads the balance: $100."
            },
            {
                thread: "A",
                action: "calculate",
                description: "Thread A calculates $100 + $10 = $110."
            },
            {
                thread: "A",
                action: "write",
                description: "Thread A writes $110 to the account."
            },
            {
                thread: "A",
                action: "unlock",
                description: "Thread A releases the mutex."
            },
            {
                thread: "B",
                action: "lock",
                description: "Thread B acquires the mutex."
            },
            {
                thread: "B",
                action: "read",
                description: "Thread B reads the updated balance: $110."
            },
            {
                thread: "B",
                action: "calculate",
                description: "Thread B calculates $110 + $10 = $120."
            },
            {
                thread: "B",
                action: "write",
                description: "Thread B writes $120 to the account."
            },
            {
                thread: "B",
                action: "unlock",
                description: "Thread B releases the mutex."
            }
        ]
    };

    /* 5. INITIAL SIMULATION STATE */

    let scenario = "withoutMutex";
    let stepIndex = 0;
    let sharedBalance = 100;
    let localValues = {
        A: null,
        B: null
    };
    let mutexOwner = null;
    let timer = null;

    function getSteps() {
        return scenarios[scenario];
    }

    function stopTimer() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    }

    /* 6. APPLY ONE THREAD OPERATION */

    function applyOperation(step) {
        const thread = step.thread;

        if (step.action === "lock") {
            mutexOwner = thread;
        }

        if (step.action === "read") {
            localValues[thread] = sharedBalance;
        }

        if (step.action === "calculate") {
            localValues[thread] += 10;
        }

        if (step.action === "write") {
            sharedBalance = localValues[thread];
        }

        if (step.action === "unlock") {
            mutexOwner = null;
        }
    }

    /* 7. DISPLAY THE CURRENT SIMULATION */

    function render() {
        balanceDisplay.textContent =
            "$" + sharedBalance;

        threadADisplay.textContent =
            localValues.A === null
                ? "Waiting to begin"
                : "Local value: $" + localValues.A;

        threadBDisplay.textContent =
            localValues.B === null
                ? "Waiting to begin"
                : "Local value: $" + localValues.B;

        if (scenario === "withoutMutex") {
            lockDisplay.textContent =
                "Not used — both threads can access shared data.";
        } else if (mutexOwner !== null) {
            lockDisplay.textContent =
                "Locked by Thread " + mutexOwner;
        } else {
            lockDisplay.textContent = "Available";
        }

        const steps = getSteps();

        operationList.innerHTML = steps.map(
            function (step, index) {
                const completed = index < stepIndex;
                const current = index === stepIndex;

                return `
                    <li class="${
                        completed ? "is-complete" : ""
                    } ${
                        current ? "is-current" : ""
                    }">
                        <strong>Thread ${step.thread}:</strong>
                        ${step.description}
                    </li>
                `;
            }
        ).join("");

        if (stepIndex === steps.length) {
            if (scenario === "withoutMutex") {
                resultDisplay.innerHTML = `
                    <strong>Race condition demonstrated.</strong>
                    <p>
                        The final balance is $110, not $120.
                        Thread B overwrote Thread A's update.
                        One deposit was lost.
                    </p>
                `;
            } else {
                resultDisplay.innerHTML = `
                    <strong>Both deposits succeeded.</strong>
                    <p>
                        The final balance is $120.
                        The mutex allowed each thread to complete
                        its protected update safely.
                    </p>
                `;
            }
        } else {
            resultDisplay.innerHTML = "";
        }
    }

    /* 8. ADVANCE ONE STEP */

    function nextStep() {
        const steps = getSteps();

        if (stepIndex >= steps.length) {
            stopTimer();
            return;
        }

        const step = steps[stepIndex];

        applyOperation(step);
        stepIndex++;

        render();

        if (stepIndex === steps.length) {
            stopTimer();
            statusDisplay.textContent =
                "Scenario complete. Compare the final balance with the other scenario.";
        } else {
            statusDisplay.textContent =
                step.description;
        }
    }

    /* 9. START, PAUSE AND RESET */

    function startSimulation() {
        if (timer !== null || stepIndex >= getSteps().length) {
            return;
        }

        nextStep();

        if (stepIndex < getSteps().length) {
            timer = setInterval(nextStep, 1400);
        }
    }

    function pauseSimulation() {
        stopTimer();

        statusDisplay.textContent =
            "Simulation paused. Use Next Step or Start to continue.";
    }

    function resetSimulation() {
        stopTimer();

        stepIndex = 0;
        sharedBalance = 100;

        localValues = {
            A: null,
            B: null
        };

        mutexOwner = null;

        resultDisplay.innerHTML = "";

        render();

        statusDisplay.textContent =
            "Reset complete. The shared account balance is $100.";
    }

    /* 10. CHANGE SCENARIO */

    function chooseScenario(nextScenario) {
        scenario = nextScenario;

        withoutMutexButton.classList.toggle(
            "threads-button-secondary",
            scenario !== "withoutMutex"
        );

        withMutexButton.classList.toggle(
            "threads-button-secondary",
            scenario !== "withMutex"
        );

        resetSimulation();

        statusDisplay.textContent =
            scenario === "withoutMutex"
                ? "Without a mutex: watch how the two updates can overlap."
                : "With a mutex: watch how the lock protects each update.";
    }

    /* 11. CONNECT THE CONTROLS */

    withoutMutexButton.addEventListener(
        "click",
        function () {
            chooseScenario("withoutMutex");
        }
    );

    withMutexButton.addEventListener(
        "click",
        function () {
            chooseScenario("withMutex");
        }
    );

    startButton.addEventListener(
        "click",
        startSimulation
    );

    nextButton.addEventListener(
        "click",
        nextStep
    );

    pauseButton.addEventListener(
        "click",
        pauseSimulation
    );

    resetButton.addEventListener(
        "click",
        resetSimulation
    );

    /* 12. INITIAL DISPLAY */

    render();

})();
