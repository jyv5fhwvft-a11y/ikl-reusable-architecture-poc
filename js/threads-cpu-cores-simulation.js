/* =========================================================
   INTERACTIVE KNOWLEDGE LEXICON
   CONCEPT 003 — THREADS
   Simulation 2: One CPU Core versus Multiple CPU Cores
   File: threads-cpu-cores-simulation.js
   ========================================================= */

(function () {
    "use strict";

    /* 1. FIND THE SIMULATION MOUNT POINT */

    const mount = document.getElementById(
        "threads-cpu-cores-simulation"
    );

    if (!mount) {
        return;
    }

    /* 2. CREATE THE SIMULATION INTERFACE */

    mount.innerHTML = `
        <section class="threads-simulation">
            <div class="threads-simulation-panel">

                <h3>Explore CPU Core Scheduling</h3>

                <p>
                    Choose how many CPU cores are available.
                    Watch how the three threads receive execution time.
                </p>

                <label for="threads-cpu-core-count">
                    Number of CPU cores
                </label>

                <select id="threads-cpu-core-count">
                    <option value="1">1 CPU Core</option>
                    <option value="2">2 CPU Cores</option>
                    <option value="4">4 CPU Cores</option>
                </select>

                <div
                    id="threads-cpu-core-display"
                    class="threads-simulation-grid"
                    aria-live="polite">
                </div>

                <h3>Thread Progress</h3>

                <div
                    id="threads-cpu-thread-display"
                    class="threads-simulation-grid">
                </div>

                <div class="threads-simulation-controls">
                    <button
                        type="button"
                        id="threads-cpu-start">
                        Start
                    </button>

                    <button
                        type="button"
                        id="threads-cpu-pause"
                        class="threads-button-secondary">
                        Pause
                    </button>

                    <button
                        type="button"
                        id="threads-cpu-reset"
                        class="threads-button-secondary">
                        Reset
                    </button>
                </div>

                <div
                    id="threads-cpu-status"
                    class="threads-simulation-status"
                    role="status"
                    aria-live="polite">
                    Choose a CPU configuration, then press Start.
                </div>

            </div>
        </section>
    `;

    /* 3. FIND THE DISPLAY ELEMENTS */

    const coreSelector = mount.querySelector(
        "#threads-cpu-core-count"
    );

    const coreDisplay = mount.querySelector(
        "#threads-cpu-core-display"
    );

    const threadDisplay = mount.querySelector(
        "#threads-cpu-thread-display"
    );

    const startButton = mount.querySelector(
        "#threads-cpu-start"
    );

    const pauseButton = mount.querySelector(
        "#threads-cpu-pause"
    );

    const resetButton = mount.querySelector(
        "#threads-cpu-reset"
    );

    const status = mount.querySelector(
        "#threads-cpu-status"
    );

    /* 4. INITIAL SIMULATION DATA */

    const initialThreads = [
        { name: "A", progress: 0 },
        { name: "B", progress: 0 },
        { name: "C", progress: 0 }
    ];

    let threads = createInitialThreads();
    let coreCount = 1;
    let tickCount = 0;
    let timer = null;
    let currentAssignments = [];

    function createInitialThreads() {
        return initialThreads.map(function (thread) {
            return {
                name: thread.name,
                progress: thread.progress
            };
        });
    }

    function isComplete(thread) {
        return thread.progress >= 100;
    }

    function allComplete() {
        return threads.every(isComplete);
    }

    /* 5. SELECT THREADS FOR THE AVAILABLE CORES */

    function scheduleThreads() {
        const selected = [];

        for (let offset = 0; offset < threads.length; offset++) {
            const index =
                (tickCount * coreCount + offset) % threads.length;

            const thread = threads[index];

            if (!isComplete(thread) && selected.length < coreCount) {
                selected.push(thread);
            }
        }

        return selected;
    }

    /* 6. DISPLAY THE CPU CORES */

    function renderCores() {
        let html = "";

        for (let core = 0; core < coreCount; core++) {
            const assignedThread = currentAssignments[core];

            if (assignedThread) {
                html += `
                    <div class="threads-simulation-panel
                                threads-cpu-core is-active">
                        <strong>CPU Core ${core + 1}</strong>
                        <p>
                            Executing Thread
                            <strong>${assignedThread.name}</strong>
                        </p>
                        <span class="threads-cpu-active-label">
                            Running
                        </span>
                    </div>
                `;
            } else {
                html += `
                    <div class="threads-simulation-panel
                                threads-cpu-core">
                        <strong>CPU Core ${core + 1}</strong>
                        <p>No thread assigned</p>
                        <span class="threads-cpu-idle-label">
                            Idle
                        </span>
                    </div>
                `;
            }
        }

        coreDisplay.innerHTML = html;
    }

    /* 7. DISPLAY THREAD PROGRESS */

    function renderThreads() {
        threadDisplay.innerHTML = threads.map(function (thread) {
            const completed = isComplete(thread);

            return `
                <div class="threads-simulation-panel
                            threads-cpu-thread">
                    <h4>Thread ${thread.name}</h4>

                    <p>
                        ${completed ? "Completed" : "Progress"}
                    </p>

                    <div class="threads-simulation-progress-track">
                        <div
                            class="threads-simulation-progress-fill"
                            style="width: ${thread.progress}%">
                        </div>
                    </div>

                    <p>
                        <strong>${thread.progress}%</strong>
                    </p>
                </div>
            `;
        }).join("");
    }

    /* 8. UPDATE THE COMPLETE DISPLAY */

    function render() {
        renderCores();
        renderThreads();
    }

    /* 9. ADVANCE ONE SIMULATION TICK */

    function runTick() {
        currentAssignments = scheduleThreads();

        currentAssignments.forEach(function (thread) {
            thread.progress = Math.min(
                thread.progress + 10,
                100
            );
        });

        render();

        if (allComplete()) {
            stopTimer();

            status.textContent =
                "All three threads have completed. " +
                "You can change the number of CPU cores or reset the simulation.";

            return;
        }

        const activeNames = currentAssignments.map(function (thread) {
            return "Thread " + thread.name;
        });

        if (coreCount === 1) {
            status.textContent =
                activeNames[0] +
                " is executing. The other threads wait for their turn. " +
                "This illustrates concurrent progress through time-sharing.";
        } else {
            status.textContent =
                activeNames.join(" and ") +
                " are executing simultaneously on separate CPU cores. " +
                (coreCount === 4
                    ? "The fourth core has no thread to execute."
                    : "The remaining thread waits for an available core.");
        }

        tickCount++;
    }

    /* 10. START THE SIMULATION */

    function startSimulation() {
        if (timer !== null || allComplete()) {
            return;
        }

        status.textContent = "Simulation running.";

        runTick();

        if (!allComplete()) {
            timer = setInterval(runTick, 900);
        }
    }

    /* 11. PAUSE THE SIMULATION */

    function stopTimer() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    }

    function pauseSimulation() {
        stopTimer();

        status.textContent = allComplete()
            ? "All threads have completed."
            : "Simulation paused. Press Start to continue.";
    }

    /* 12. RESET THE SIMULATION */

    function resetSimulation() {
        stopTimer();

        threads = createInitialThreads();
        tickCount = 0;
        currentAssignments = [];

        render();

        status.textContent =
            "Simulation reset. All three threads are ready at 0% progress.";
    }

    /* 13. CHANGE THE NUMBER OF CPU CORES */

    function changeCoreCount() {
        coreCount = Number(coreSelector.value);

        currentAssignments = [];

        render();

        status.textContent =
            "Configuration changed to " +
            coreCount +
            (coreCount === 1 ? " CPU core." : " CPU cores.") +
            " Press Start to explore this configuration.";
    }

    /* 14. CONNECT THE CONTROLS */

    startButton.addEventListener("click", startSimulation);
    pauseButton.addEventListener("click", pauseSimulation);
    resetButton.addEventListener("click", resetSimulation);

    coreSelector.addEventListener("change", changeCoreCount);

    /* 15. INITIAL DISPLAY */

    render();

})();
