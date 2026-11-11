---
content_block_id: IKL-OS-002-CB-01
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-01
section_number: 1
section_title: Identity and Definition
block_type: html-section
order: 1
---
<section id="concept-identity" class="concept-section" aria-labelledby="process-section-1-heading">

    <h2 id="process-section-1-heading">
        1. Concept Identity and Definition
    </h2>

    <div class="concept-identity-card">
        <p><strong>Concept ID:</strong> IKL-OS-002</p>
        <p><strong>Concept:</strong> Process</p>
        <p><strong>Subject:</strong> Operating Systems</p>
        <p><strong>Topic:</strong> Process Management</p>
    </div>

    <h3>What Is a Process?</h3>

    <p>
        A <strong>process</strong> is an instance of a program that has
        been started and is being managed by an operating system.
        It has its own execution context, address space, one or more
        threads, and associated resources and management information.
    </p>

    <div class="concept-note">
        <h4>In Simple Words</h4>
        <p>
            A program contains instructions. A process is an instance
            of that program being managed while it executes or waits
            to continue execution.
        </p>
    </div>

    <h3>Program vs Process: What Is the Difference?</h3>

    <div class="concept-comparison">

        <div class="comparison-item">
            <h4>Program</h4>
            <p>
                A program is a passive set of instructions stored
                in a file.
            </p>
            <ul>
                <li>Exists as stored code</li>
                <li>Does not execute by itself</li>
                <li>Waits to be started</li>
            </ul>
        </div>

        <div class="comparison-item">
            <h4>Process</h4>
            <p>
                A process is an active instance of a program
                managed by the operating system.
            </p>
            <ul>
                <li>Has an execution context</li>
                <li>Uses memory and other resources</li>
                <li>Can execute or wait</li>
            </ul>
        </div>

    </div>

    <h3>How Does a Program Become a Process?</h3>

    <p>
        When you start a program, the operating system creates a process.
        It allocates resources, sets up an address space, and prepares
        the program for execution.
    </p>

    <p>
        Important process information includes:
    </p>

    <ul>
        <li>Process identifier (PID)</li>
        <li>Process state</li>
        <li>Program counter</li>
        <li>CPU register context</li>
        <li>Address space</li>
        <li>Open files and other resources</li>
        <li>Scheduling information</li>
    </ul>

    <p>
        The operating system maintains this information, commonly
        represented through a Process Control Block (PCB).
    </p>

    <div class="concept-note">
        <h4>Important Distinction</h4>
        <p>
            A process is not simply an application window.
            An application may create multiple processes, and a process
            may continue running without a visible window.
            A process is an operating-system concept describing a
            program in execution.
        </p>
    </div>

</section>
