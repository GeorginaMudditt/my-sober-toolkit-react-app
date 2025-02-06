import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h1>About this project</h1>
      <p>
        If you would like to suggest a resource to add, or give me some
        feedback, I would love to hear from you!
      </p>
      <button>
        <a href="mailto:g.k.mudditt@gmail.com">Email me</a>
      </button>
      <p>
        If you have found this page useful, please consider making a small
        donation. I created this project with love, not for money, but being
        supported would mean the world
      </p>
      <button>
        <a
          href="https://buymeacoffee.com/sobertoolkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support me
        </a>
      </button>
    </div>
  );
}

export default About;
