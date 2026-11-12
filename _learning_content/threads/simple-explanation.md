---
content_block_id: IKL-OS-003-CB-02
concept_id: IKL-OS-003
section_id: IKL-OS-003-SEC-02
section_number: 2
section_title: Threads Explained Like You’re Five
block_type: html-section
order: 2
---
<section id="threads-simple-explanation" class="concept-section" aria-labelledby="threads-section-2-heading">

    <h2 id="threads-section-2-heading">
        2. Threads Explained Like You’re Five
    </h2>

    <h3>What Is a Thread?</h3>

    <p>
        Imagine you are playing a video game.
    </p>

    <p>
        Your game has many things happening:
    </p>

    <ul>
        <li>Your character is moving.</li>
        <li>Music is playing.</li>
        <li>Enemies are moving around.</li>
        <li>The score is being updated.</li>
    </ul>

    <p>
        All these activities are part of the same game.
    </p>

    <p>
        A computer program can also organise its work into different
        activities. A <strong>thread</strong> is one path of work that
        can be carried out inside a running program’s process.
    </p>

    <p>
        Think of a thread as one worker doing a particular job.
    </p>

    <h3>A Simple Art-Room Analogy</h3>

    <p>
        Imagine an art room where children are making a large picture
        together.
    </p>

    <ul>
        <li>The art room is like a process.</li>
        <li>The paints, paper and tables are shared resources.</li>
        <li>Each child working on a part of the picture is like a thread.</li>
    </ul>

    <p>
        Each child has an individual task, but they share the same room
        and materials.
    </p>

    <p>
        In a similar way, threads belonging to the same process share
        many resources, while each thread has its own execution
        information.
    </p>

    <h3>From Program to Process to Thread</h3>

    <p>
        Let’s understand how the three are connected.
    </p>

    <div class="concept-note">
        <h4>Step 1 — Program</h4>

        <p>
            A program is a set of instructions stored on a computer.
            It is like a game waiting to be started.
        </p>

        <h4>Step 2 — Process</h4>

        <p>
            When the program starts running, the operating system
            creates a process to provide its execution environment
            and resources.
        </p>

        <p>
            It is like opening the game and preparing everything
            needed to play.
        </p>

        <h4>Step 3 — Thread</h4>

        <p>
            The process contains one or more threads that carry out work.
        </p>

        <p>
            It is like having different workers inside the game,
            each handling an activity.
        </p>
    </div>

    <h4>Remember</h4>

    <ul>
        <li>A program is the instructions.</li>
        <li>A process is the running environment.</li>
        <li>A thread is a path of execution within that process.</li>
    </ul>

    <h3>Example: Watching a Video</h3>

    <p>
        Imagine watching a video on your device.
    </p>

    <p>
        Several activities may need to happen:
    </p>

    <ol>
        <li>The video needs to be displayed.</li>
        <li>The sound needs to be played.</li>
        <li>The captions may need to be shown.</li>
        <li>The playback controls need to respond when you tap them.</li>
    </ol>

    <p>
        A video application can use multiple threads to organise
        these activities.
    </p>

    <p>
        This can help the application remain responsive while
        different tasks are being handled.
    </p>

    <p>
        The exact way an application divides its work depends on
        its design and software environment.
    </p>

    <h3>Program vs Process vs Thread</h3>

    <div class="concept-table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Term</th>
                    <th>Simple meaning</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Program</td>
                    <td>Instructions stored on a computer</td>
                    <td>A video application before it starts</td>
                </tr>
                <tr>
                    <td>Process</td>
                    <td>A running instance with its own resources</td>
                    <td>The video application after it opens</td>
                </tr>
                <tr>
                    <td>Thread</td>
                    <td>A path of execution inside a process</td>
                    <td>A thread handling part of the video’s work</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>Check Your Understanding</h3>

    <div class="concept-knowledge-check">

        <h4>Question 1: What is a program?</h4>

        <p><strong>Answer:</strong> A set of instructions stored on a computer.</p>

        <p>
            <strong>Explanation:</strong> A program contains instructions
            that can be executed when it is started.
        </p>

        <h4>Question 2: What happens when a program starts running?</h4>

        <p><strong>Answer:</strong> The operating system creates a process.</p>

        <p>
            <strong>Explanation:</strong> The process provides the
            environment and resources needed for the program to run.
        </p>

        <h4>Question 3: What is a thread?</h4>

        <p><strong>Answer:</strong> A path of execution within a process.</p>

        <p>
            <strong>Explanation:</strong> A thread carries out work
            inside the process.
        </p>

        <h4>Question 4: Can one process contain more than one thread?</h4>

        <p><strong>Answer:</strong> Yes.</p>

        <p>
            <strong>Explanation:</strong> A process can contain one
            thread or multiple threads.
        </p>

        <h4>Question 5: Do threads in the same process share resources?</h4>

        <p><strong>Answer:</strong> Yes, they share many process resources.</p>

        <p>
            <strong>Explanation:</strong> For example, they can share
            the process’s memory and open files, while each thread
            maintains its own execution context.
        </p>

    </div>

</section>
