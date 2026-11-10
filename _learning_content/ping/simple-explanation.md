---
content_block_id: IKL-CN-001-CB-02
concept_id: IKL-CN-001
section_id: IKL-CN-001-SEC-02
section_number: 2
section_title: First-Grader Explanation
block_type: html-section
order: 2
---

<section id="simple-explanation">
    <h2>2. Ping Explained Like You're Five</h2>

    <h3>Imagine Two Friends</h3>

    <p>
        Imagine you are standing in your house
        and your friend is standing in another house.
    </p>

    <p>
        You shout:
        <strong>"Hello! Can you hear me?"</strong>
    </p>

    <p>
        Your friend shouts back:
        <strong>"Yes, I can hear you!"</strong>
    </p>
    <p>
        Now you know your friend received your
        message and replied.
    </p>

    <!-- SECTION 2 — INTERACTIVE FRIEND ANALOGY -->

    <div class="friend-analogy" id="friend-analogy">

        <h3>Watch the Message Travel</h3>

        <p>
            Follow the message as it travels from you
            to your friend and the reply comes back.
        </p>

        <div class="friend-analogy-scene">
            <div class="friend-home">
                <div class="friend-home-icon">🏠</div>
                <strong>You</strong>
                <span>Sending a message</span>
            </div>

            <div class="friend-message-route">

                <div class="friend-message" id="friend-message">
                    Hello! Can you hear me?
                </div>

                <div class="friend-route-line">
                    <span class="friend-message-dot"
                          id="friend-message-dot"></span>
                </div>
                <div class="friend-reply" id="friend-reply">
                    Yes! I can hear you!
                </div>

            </div>

            <div class="friend-home">
                <div class="friend-home-icon">🏠</div>
                <strong>Your Friend</strong>
                <span>Receiving a message</span>
            </div>

        </div>

        <div class="friend-analogy-explanation"
             aria-live="polite">

            <p id="friend-step-number">Step 1 of 4</p>
            <h4 id="friend-step-title">
                You send a message
            </h4>

            <p id="friend-step-description">
                You call out to your friend to see whether
                they can hear you.
            </p>

        </div>

        <div class="friend-analogy-controls">

            <button type="button" id="friend-previous">
                Previous
            </button>

            <button type="button" id="friend-play">
                Play
            </button>
            <button type="button" id="friend-next">
                Next
            </button>

            <button type="button" id="friend-reset">
                Reset
            </button>

        </div>

        <p id="friend-analogy-status"
           class="friend-analogy-status"
           aria-live="polite">
            Ready to begin.
        </p>

    </div>

    <!-- END SECTION 2 INTERACTIVE FRIEND ANALOGY -->

    <h3>How Does This Relate to Computers?</h3>
    <p>
        Computers can do something similar using Ping.
        One computer sends a small test message to
        another computer and waits for a reply.
    </p>

    <p>
        If a reply comes back, it tells us that
        communication worked for that test.
    </p>

    <h3>What Should You Remember?</h3>
    <ul>
        <li>A computer sends a test message.</li>
        <li>Another computer may respond.</li>
        <li>Ping helps test network reachability.</li>
        <li>A successful reply does not prove every
            application or service is working.</li>
    </ul>

</section>
