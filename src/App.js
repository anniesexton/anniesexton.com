import React from 'react';
import headshot from './headshot.jpg'

const App = props => {
  function render() {
    return(
      <div>
        <header className="pattern-topo h-screen flex v-center justify-center items-center text-center flex-col border-b border-gray-300">
          <img src={headshot} className="rounded-full mb-16" alt="Annie Sexton headshot" style={{ width: 200, height: 200 }} />
          <h1>Hi! I'm Annie.</h1>
          <p>I’m a <strong>full-stack developer</strong> with a passion for <strong>user-centered design.</strong></p>
          <p className="w-3/5">I’ve worked with numerous languages and frameworks in my decade working as a software engineer,
            but these are my <strong>favorite flavors</strong> of code:</p>

            <ul className="flex w-3/5 justify-between items-center">
              <li>React JS</li>
              <li>Electron</li>
              <li>Atomic CSS libraries</li>
              <li>Ruby on Rails</li>
            </ul>
        </header>

        <section>
          <h2 name="projects">Projects</h2>

          <div>
            <h3>Flexnote<span>In Progress</span></h3>
            <p>A beautifully minimalist note-taking and writing app, powered by markdown.</p>
            <div>
              <span>React</span>
              <span>Electron</span>
              <span>Realm + MongoDB</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div>
            <h3>Gensho</h3>
            <p>Inline dictionary tool for building Japanese vocabulary</p>
            <div>
              <span>React</span>
              <span>Ruby on Rails</span>
              <span>Postgres</span>
              <span>Heroku</span>
            </div>
          </div>
        </section>

        <section>
          <h2>Work Experience</h2>
        </section>

        <section>
          <h2>About Me</h2>
          <p>I'm Annie Sexton, and I'm a full stack web developer.
            I was born and raised in the heart of Texas, where I survived solely on barbeque and live music.</p>

            <p>After college, I achieved my (at that point) life-long dream of working as an English instructor in Japan.
              I accidentally fell in love with the magical world of website-making when I was tasked with making tweaks to the school's website,
              and later I accepted my first-ever web design job in Osaka, Japan.</p>

            <p>These days my time is split between working for one of California's top design agencies, Digital Telepathy,
              and working on Okonomi Word, a translation app I built to help students of Japanese improve their vocabulary.</p>

            <p>When I'm not building kick-ass websites, I'm usually brushing up on my Japanese, reading, traveling, writing, camping, or let's face it – doing more programming.</p>
        </section>
      </div>
    )
  }

  return render()
}

export default App
