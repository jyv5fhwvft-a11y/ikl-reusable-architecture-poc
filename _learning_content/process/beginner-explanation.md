---
content_block_id: IKL-OS-002-CB-04
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-04
section_number: 4
section_title: Beginner Explanation
block_type: html-section
order: 4
---
<section id="beginner-explanation" class="concept-section" aria-labelledby="process-section-4-heading">

    <h2 id="process-section-4-heading">
        4. Beginner Explanation
    </h2>

    <h3>What Happens When You Open an App?</h3>

    <p>
        When you open an application, the operating system creates
        and manages a <strong>process</strong> for its execution.
    </p>

    <p>A process needs resources such as:</p>

    <ul>
        <li>CPU execution time</li>
        <li>Memory</li>
        <li>Access to files</li>
        <li>Input and output resources</li>
    </ul>

    <p>
        The operating system manages these resources and coordinates
        process execution so that many programs can share the computer
        fairly and safely.
    </p>

    <h3>Process States (A Simple View)</h3>

    <p>A process moves through different states during its life:</p>

    <ul>
        <li><strong>New</strong> — the process is being created</li>
        <li><strong>Ready</strong> — prepared and waiting for CPU time</li>
        <li><strong>Running</strong> — currently using the CPU</li>
        <li><strong>Waiting</strong> — paused until an event (such as I/O) completes</li>
        <li><strong>Terminated</strong> — finished or stopped</li>
    </ul>

    <h3>Why Processes Matter</h3>

    <p>
        Processes let the operating system:
    </p>

    <ul>
        <li>Run many programs at once</li>
        <li>Protect programs from interfering with each other</li>
        <li>Track which program is using which resources</li>
        <li>Stop or restart work when needed</li>
    </ul>

    <div class="concept-note">
        <h4>Remember</h4>
        <p>
            A process is the operating system’s way of managing
            a program while it is active. Understanding processes
            is the foundation for understanding multitasking,
            scheduling, and threads.
        </p>
    </div>

</section>
