import React from 'react';
import './App.css';
import './style.css';


function App() {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <header>
        <h1>Sudhir's Dummy Portfolio</h1>
      </header>
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </nav>
      <div className="container" id="about">
      <div className="container2" id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm <b>Sudhir</b>. I'm a web developer. This is a Dummy portfolio created using React.
        </p>
        </div>
        <div className="container3" id="about"><h3>***Some other info***</h3></div>
        
      </div>
      <div className="container" id="projects">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>This is a description of my first project.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>This is a description of my second project.</p>
        </div>
      </div>
      <div className="container" id="contact">
        <h2>Contact Me</h2>
        <p>Email: sudhir.venkatesh@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
