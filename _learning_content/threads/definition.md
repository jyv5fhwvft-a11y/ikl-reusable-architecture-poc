---
content_block_id: IKL-OS-003-CB-01
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-01
section_number: 1
section_title: Identity and Definition
block_type: html-section
order: 1
---

<section id="concept-identity" class="concept-section" aria-labelledby="threads-section-1-heading">

    <h2 id="threads-section-1-heading">
        1. Concept Identity and Definition
    </h2>

    <div class="concept-identity-card">
        <p><strong>Concept ID:</strong> IKL-OS-003</p>
        <p><strong>Concept:</strong> Threads</p>
        <p><strong>Subject:</strong> Operating Systems</p>
        <p><strong>Topic:</strong> Process and Thread Management</p>
    </div>

    <h3>What Is a Thread?</h3>

    <p>
        A <strong>thread</strong> is a path of execution within a process.
        It is the unit of work that the operating system schedules
        to run on a CPU.
    </p>

    <p>
        A process provides the execution environment and resources.
        One or more threads execute within that environment.
    </p>

    <p>
        A process can contain a single thread or multiple threads.
    </p>

    <div class="concept-note">
        <h4>The Central Principle</h4>

        <ul>
            <li>
                <strong>Process:</strong>
                Provides the environment and resources.
            </li>
            <li>
                <strong>Thread:</strong>
                Provides an individual path of execution.
            </li>
            <li>
                <strong>Operating system:</strong>
                Manages thread execution and CPU scheduling.
            </li>
        </ul>

        <p>
            Threads belonging to the same process share many process
            resources, but each thread maintains its own execution context.
        </p>
    </div>

    <h3>Why Do Threads Exist?</h3>

    <p>
        Threads allow a program to organise work into separate activities.
        This can improve responsiveness and, on suitable hardware,
        allow multiple activities to execute in parallel.
    </p>

</section>
