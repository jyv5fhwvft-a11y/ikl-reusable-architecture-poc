---
content_block_id: IKL-OS-002-CB-02
concept_id: IKL-OS-002
section_id: IKL-OS-002-SEC-02
section_number: 2
section_title: Process Explained Like You're Five
block_type: html-section
order: 2
---
<section id="first-grader-explanation" class="concept-section" aria-labelledby="process-section-2-heading">

    <h2 id="process-section-2-heading">
        2. Process Explained Like You're Five
    </h2>

    <!-- BLOCK 2.1: SIMPLE EXPLANATION -->

    <h3>2.1 What Is a Process?</h3>

    <p>
        Imagine you have a colour-by-number book.
        It contains pictures and instructions telling
        you which colours to use.
    </p>

    <p>
        When the book is sitting on your table,
        the instructions are there, but nobody
        is colouring the picture.
    </p>

    <p>
        Now imagine picking up your crayons and
        following the instructions. You are actively
        doing something: colouring the picture.
    </p>

    <p>
        A computer works in a similar way.
        A <strong>program</strong> is a set of
        instructions stored on the computer.
        When the operating system starts managing
        an executing instance of that program,
        it is called a <strong>process</strong>.
    </p>

    <div class="concept-note">
        <h4>Think of It This Way</h4>

        <p>
            <strong>Program:</strong>
            The instructions waiting to be followed.
        </p>

        <p>
            <strong>Process:</strong>
            Those instructions being carried out
            by the computer.
        </p>
    </div>

    <!-- BLOCK 2.2: THREE SIMPLE STEPS -->

    <h3>2.2 How Does a Program Become a Process?</h3>

    <p>
        Let's follow what happens when you open
        an application on your computer.
    </p>

    <ol>
        <li>
            <strong>First: A program exists.</strong>
            <p>
                The program is stored on the computer.
                It contains instructions that tell
                the computer what to do.
            </p>
        </li>

        <li>
            <strong>Second: You ask the computer to open it.</strong>
            <p>
                You tap or click an application,
                such as Calculator.
            </p>
        </li>

        <li>
            <strong>Third: The operating system creates
            and manages a process.</strong>
            <p>
                The operating system prepares an
                executing instance of the program
                and manages the resources it needs
                to do its work.
            </p>
        </li>
    </ol>

    <!-- BLOCK 2.3: THREE-STAGE VISUAL -->

    <h3>2.3 See How a Program Becomes a Process</h3>

    <p>
        This simple visual shows the journey
        from stored instructions to an executing
        program.
    </p>

    <figure class="process-concept-visual">
        <div class="process-visual-scroll"
             role="region"
             aria-label="Scrollable three-stage program-to-process diagram"
             tabindex="0">

            <svg viewBox="0 0 900 250"
                 width="900"
                 height="250"
                 role="img"
                 aria-labelledby="program-process-title program-process-description"
                 xmlns="http://www.w3.org/2000/svg">

                <title id="program-process-title">
                    From a stored program to a process
                </title>

                <desc id="program-process-description">
                    Three stages: a program is stored,
                    a user requests the application to open,
                    and the operating system creates and
                    manages a process.
                </desc>

                <rect x="15" y="25" width="250" height="185"
                      rx="18" fill="#EAF1FF"
                      stroke="#2563EB" stroke-width="2"/>

                <text x="140" y="65" text-anchor="middle"
                      font-size="17" font-weight="700"
                      fill="#102A43">
                    1. Stored Program
                </text>

                <rect x="105" y="88" width="70" height="70"
                      rx="10" fill="#FFFFFF"
                      stroke="#2563EB" stroke-width="2"/>

                <path d="M122 105 H158 M122 117 H158 M122 129 H150"
                      stroke="#2563EB" stroke-width="4"
                      stroke-linecap="round"/>

                <text x="140" y="185" text-anchor="middle"
                      font-size="14" fill="#334155">
                    Instructions are stored
                </text>

                <path d="M278 118 H315 M304 107 L315 118 L304 129"
                      fill="none" stroke="#475569"
                      stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <rect x="325" y="25" width="250" height="185"
                      rx="18" fill="#E6F6F3"
                      stroke="#0D9488" stroke-width="2"/>

                <text x="450" y="65" text-anchor="middle"
                      font-size="17" font-weight="700"
                      fill="#102A43">
                    2. Open the App
                </text>

                <rect x="415" y="88" width="70" height="58"
                      rx="8" fill="#FFFFFF"
                      stroke="#0D9488" stroke-width="2"/>

                <path d="M415 104 H485"
                      stroke="#0D9488" stroke-width="3"/>

                <circle cx="425" cy="96" r="3" fill="#0D9488"/>
                <circle cx="435" cy="96" r="3" fill="#0D9488"/>

                <path d="M450 151 V165 M438 165 H462"
                      stroke="#0D9488" stroke-width="3"
                      stroke-linecap="round"/>

                <text x="450" y="190" text-anchor="middle"
                      font-size="14" fill="#334155">
                    You request it to run
                </text>

                <path d="M588 118 H625 M614 107 L625 118 L614 129"
                      fill="none" stroke="#475569"
                      stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round"/>

                <rect x="635" y="25" width="250" height="185"
                      rx="18" fill="#FFF4DF"
                      stroke="#F59E0B" stroke-width="2"/>

                <text x="760" y="65" text-anchor="middle"
                      font-size="17" font-weight="700"
                      fill="#102A43">
                    3. Process
                </text>

                <rect x="715" y="88" width="90" height="58"
                      rx="10" fill="#FFFFFF"
                      stroke="#D97706" stroke-width="2"/>

                <path d="M733 107 H787 M733 120 H787"
                      stroke="#D97706" stroke-width="4"
                      stroke-linecap="round"/>

                <circle cx="760" cy="133" r="5" fill="#0D9488"/>

                <text x="760" y="190" text-anchor="middle"
                      font-size="14" fill="#334155">
                    OS manages execution
                </text>
            </svg>
        </div>

        <figcaption>
            A stored program is opened, and the operating
            system creates and manages a process.
        </figcaption>
    </figure>

    <!-- BLOCK 2.4: EVERYDAY COMPUTER EXAMPLE -->

    <h3>2.4 An Everyday Example: Opening Calculator</h3>

    <p>
        Imagine tapping the Calculator application
        on your computer or tablet.
    </p>

    <ol>
        <li>The Calculator program is stored on your device.</li>
        <li>You tap the Calculator icon.</li>
        <li>The operating system starts and manages an executing instance of Calculator.</li>
        <li>The Calculator process uses computer resources to perform its work.</li>
        <li>You can now enter numbers and perform calculations.</li>
    </ol>

    <!-- BLOCK 2.5: CPU CLARIFICATION -->

    <div class="concept-note">
        <h4>Does a Process Use the CPU Every Moment?</h4>

        <p>
            Not necessarily. A process does not have
            to use the CPU continuously from the
            moment it starts until it finishes.
        </p>

        <p>
            Sometimes it waits for its turn to use
            the CPU. At other times, it may wait
            for something such as user input.
        </p>

        <p>
            The operating system manages these
            activities. We will explore the different
            process states in a later section.
        </p>
    </div>

    <!-- BLOCK 2.6: PROGRAM VS PROCESS -->

    <div class="concept-note">
        <h4>Remember This Simple Difference</h4>

        <p>
            <strong>Program:</strong>
            A set of instructions stored on a computer.
        </p>

        <p>
            <strong>Process:</strong>
            An executing instance of a program,
            managed by the operating system.
        </p>

        <p>
            <strong>In one sentence:</strong>
            A program is the instructions;
            a process is an instance of those
            instructions being executed.
        </p>
    </div>

    <!-- BLOCK 2.7: UNDERSTANDING CHECK -->

    <h3>2.5 Can You Understand the Difference?</h3>

    <p>
        Imagine Calculator is stored on your computer,
        but you have not opened it.
    </p>

    <p>
        <strong>Think about it:</strong>
        Is Calculator already running as a process?
    </p>

    <details class="concept-note">
        <summary>
            <strong>Reveal the answer</strong>
        </summary>

        <p>
            <strong>No.</strong>
            The stored Calculator application is a program.
            When the operating system starts managing
            an executing instance of it, that instance
            is a process.
        </p>
    </details>

    <!-- BLOCK 2.8: LEARNING OUTCOME -->

    <h3>2.6 What You Should Understand</h3>

    <p>
        By the end of this section, you should be able
        to explain the difference between a stored
        program and a process, describe how an
        application becomes a process, and understand
        that a process does not need to use the CPU
        continuously.
    </p>

    <!-- ADDITIONAL EXAMPLE PRESERVED FROM THE EXISTING POC DRAFT -->

    <div class="concept-note">
        <h4>Another Simple Example: A Recipe</h4>

        <p>
            A recipe book contains instructions, just as
            a program contains instructions. The recipe
            is not cooking by itself. Cooking begins when
            someone follows the instructions. In the same
            way, a process is an executing instance of a
            program, managed by the operating system.
        </p>
    </div>

</section>
