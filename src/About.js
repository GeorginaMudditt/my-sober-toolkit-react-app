import React from "react";
import "./About.css";
import georgie from "./images/Georgie.jpeg";

function About() {
  return (
    <div id="about-section" className="About">
      <h1>About this project</h1>
      <div className="about-container">
        <div className="about-image">
          <img
            className="georgie-profile-pic"
            src={georgie}
            alt="Georgie who created the website"
          />
        </div>
        <div className="about-text">
          <p>
            My name is Georgie and I have been sober since 10 October 2022.
            <br />I struggled with my alcohol consumption for decades before
            finally facing the fact that I needed to do something about it. I
            managed to get sober without going to meetings, but with the support
            of some amazing, supportive Facebook groups. Other members of these
            communities frequently posted about books, films, podcasts, and so
            on, and I devoured everything I could get my hands on in the early
            days of sobriety.
            <br />
            However, not everyone is on Facebook and I have noticed an
            increasing movement away from social media. Lots of people - myself
            included - are looking to take a break from the constant scrolling
            and notifications. I wanted to create a resource that is accessible
            to everyone, regardless of whether they are on social media or not.
            <br />I was made redundant from my job in English language
            assessment in late 2023 and since then I have been retraining as a
            front-end developer. I created this project as a way to practise my
            skills, and to give back to the sober community that has helped me
            so much.
          </p>
        </div>
      </div>
      <p className="center">
        If you would like to suggest a resource to add, or give me some
        feedback, I would love to hear from you!
      </p>
      <button>
        <a href="mailto:hello@my-sober-toolkit.com">Email me</a>
      </button>
      <p className="center">
        If you have found this page useful, please consider making a small
        donation. I created this project with love - not for money - but being
        supported would mean the world.
      </p>
      <button>
        <a
          href="https://buymeacoffee.com/sobertoolkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy me a mocktail
        </a>
      </button>
    </div>
  );
}

export default About;
