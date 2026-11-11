---
content_block_id: IKL-OS-002-CB-05
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-05
section_number: 5
section_title: Technical Explanation
block_type: html-section
order: 5
---
<section id="technical-explanation" class="concept-section">
    <h2>5. Technical Explanation</h2>

    <h3>What Is a Process, Technically?</h3>
    <p>
        A process is an active instance of a program. It has an execution
        context and associated operating-system-managed resources.
    </p>

    <h3>Key Technical Elements</h3>
    <ul>
        <li><strong>Process ID (PID)</strong> — unique identifier</li>
        <li><strong>Process state</strong> — New, Ready, Running, Waiting, Terminated</li>
        <li><strong>Program counter</strong> — next instruction address</li>
        <li><strong>CPU registers</strong> — saved execution context</li>
        <li><strong>Address space</strong> — virtual memory regions</li>
        <li><strong>Process Control Block (PCB)</strong> — OS management record</li>
    </ul>

    <h3>Program versus Process</h3>
    <table>
        <thead>
            <tr><th>Program</th><th>Process</th></tr>
        </thead>
        <tbody>
            <tr><td>Passive set of instructions</td><td>Active execution</td></tr>
            <tr><td>Stored as a file</td><td>Managed execution instance</td></tr>
            <tr><td>Does not need CPU time by itself</td><td>Requires CPU scheduling</td></tr>
            <tr><td>Can create multiple processes</td><td>Has its own execution state</td></tr>
        </tbody>
    </table>

    <div class="concept-note">
        <p>
            The operating system maintains process management information,
            commonly represented through a Process Control Block (PCB).
        </p>
    </div>
</section>
