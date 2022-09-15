<template>
  <div class="resume-root">
    <div class="inner">
      <section class="major-section education">
        <header>
          <h2 class="major-section-heading">Education</h2>
        </header>

        <section class="minor-section">
          <header class="minor-section-heading">
            <div class="minor-section-heading-line">
              <h3 class="upper-left">BS in Computer Science</h3>
              <span class="upper-right">Expected&nbsp;2023</span>
            </div>
            <div class="minor-section-heading-line">
              <h4 class="lower-left">Western Washington University</h4>
              <span class="lower-right">4.0&nbsp;GPA</span>
            </div>
          </header>
        </section>

        <section class="minor-section">
          <header class="minor-section-heading">
            <div class="minor-section-heading-line">
              <h3 class="upper-left">AS-T in Computer Science</h3>
              <span class="upper-right">2020&#8211;2021</span>
            </div>
            <div class="minor-section-heading-line">
              <h4 class="lower-left">Edmonds College</h4>
              <span class="lower-right">3.8&nbsp;GPA</span>
            </div>
          </header>
        </section>

        <section class="minor-section">
          <header class="minor-section-heading">
            <div class="minor-section-heading-line">
              <h3 class="upper-left">AAS in Commercial Photography</h3>
              <span class="upper-right">2013&#8211;2015</span>
            </div>
            <div class="minor-section-heading-line">
              <h4 class="lower-left">Seattle Central College</h4>
              <span class="lower-right">3.6&nbsp;GPA</span>
            </div>
          </header>
        </section>
      </section>

      <section class="major-section">
        <header>
          <h2 class="major-section-heading">Work</h2>
        </header>

        <section class="minor-section">
          <header class="minor-section-heading">
            <div class="minor-section-heading-line">
              <h3 class="upper-left">Freelancer</h3>
              <span class="upper-right">Bellingham,&nbsp;WA</span>
            </div>
            <div class="minor-section-heading-line">
              <h4 class="lower-left">Harding Imaging</h4>
              <span class="lower-right">2020&nbsp;Onward</span>
            </div>
          </header>

          <ul class="list">
            <li>
              Created a real-time, multiplayer game for a six-member executive
              team at T-Mobile using Firebase and VueJS
            </li>
            <li>
              Built a product demo consisting of Canvas API-based games for All
              Cylinders, a seed-stage construction startup, leading to a
              contract with Skanska
            </li>
          </ul>
        </section>

        <section class="minor-section">
          <header class="minor-section-heading">
            <ol>
              <li class="minor-section-heading-line">
                <h3 class="upper-left">Technical Artist</h3>
                <span class="upper-right">2019&#8211;2020</span>
              </li>
              <li class="minor-section-heading-line">
                <h3 class="upper-left">3D Generalist</h3>
                <span class="upper-right">2017&#8211;2019</span>
              </li>
              <li class="minor-section-heading-line">
                <h3 class="upper-left">Retoucher</h3>
                <span class="upper-right">2016&#8211;2017</span>
              </li>
            </ol>
            <div class="minor-section-heading-line">
              <h4 class="lower-left">Ten Gun Design</h4>
              <span class="lower-right">Edmonds,&nbsp;WA</span>
            </div>
          </header>

          <ul class="list">
            <li>
              Lead development of a yearlong Unity VR project, including
              gameplay, content creation tools, and a networked AR companion app
            </li>
            <li>
              Optimized Hololens graphics for the Holoisland demo to run at
              60FPS, up from as low as 10FPS
            </li>
            <li>
              Designed post-process-free, forward-rendered volumetric and bloom
              effects, improving frame rates from 20FPS to 60FPS for a VR game
            </li>
            <li>
              Created a system to record and replay VR inputs, enabling
              high-quality, offline-rendered gameplay capture and headset-free
              test reproduction
            </li>
            <li>
              Developed a point-and-click adventure game for training Microsoft
              retail employees, in collaboration with 3D, design, and writing
              talent
            </li>
            <li>
              Implemented a Unity-based toolkit for nontechnical users to create
              interactive, choose-your-ownadventure films, used at Microsoft for
              training content
            </li>
            <li>
              Created five standalone apps and websites to solve problems for
              management
            </li>
            <li>
              Wrote over thirty utilities, plugins, and shaders for Maya,
              Photoshop, InDesign, Deadline, and Arnold to automate common tasks
              and simplify workflows
            </li>
            <li>
              Delivered hundreds of beautiful images and videos for clients
              including Microsoft, Amazon, Paccar, Micron, Funko, and PowerA
              while working across wideranging disciplines including
              photography, image compositing, and 3D rendering
            </li>
          </ul>
        </section>

        <section class="minor-section">
          <header class="minor-section-heading">
            <div class="minor-section-heading-line">
              <h3 class="upper-left">3D Scanning Specialist</h3>
              <span class="upper-right">Seattle,&nbsp;WA</span>
            </div>
            <div class="minor-section-heading-line">
              <h4 class="lower-left">Prizmiq</h4>
              <span class="lower-right">2015&#8211;2016</span>
            </div>
          </header>

          <ul class="list">
            <li>
              Designed and ran a system to capture and process photogrammetry
              for web-based 3D experiences
            </li>
            <li>Deployed 100 assets to museum and e-commerce clients</li>
            <li>
              Developed an automated rendering system for sprite sheet fallbacks
              on WebGL-incapable browsers
            </li>
          </ul>
        </section>
      </section>

      <section class="major-section">
        <header>
          <h2 class="major-section-heading">Skills</h2>
        </header>

        <ul class="list">
          <li>
            Rust, Go, C, C++, C#, Java, Python, GLSL, Typescript, SQL, HTML, and
            CSS
          </li>
          <li>Linux, Git, and testing workflows</li>
          <li>Vue and Svelte frontend frameworks</li>
          <li>Express, Flask, and Rocket backend frameworks</li>
          <li>Postgres, Firebase, and MongoDB databases</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.resume-root {
  justify-self: center;
  max-width: var(--page-width);
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.inner {
  padding-left: 1rem;
  padding-right: 1rem;
}

.major-section-heading {
  font-size: 1.75rem;
  font-weight: 600;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 0.3rem;
  margin-bottom: 0.75rem;
}

.major-section {
  margin-bottom: 1.5rem;
}

.education .minor-section {
  margin-bottom: 1rem;
}

.minor-section-heading {
  margin-bottom: 0.25rem;
}

.minor-section-heading-line {
  grid-template-columns: 1fr min-content;
}

.upper-left {
  font-weight: 600;
}

.upper-right {
  font-variant-numeric: tabular-nums;
}

.lower-left {
  font-variant: small-caps;
  text-transform: lowercase;
}

.lower-right {
  font-variant-numeric: tabular-nums;
}

.list {
  margin-bottom: 1.5rem;
}

.list > *::before {
  content: "";
  background-color: var(--icon);
  width: 5px;
  height: 5px;
  border-radius: 10px;
  position: absolute;
  transform: translateX(-11px) translateY(11px);
}
</style>
