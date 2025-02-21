import React, { useEffect } from "react";
import "./Introduction.css";
import sad from "./images/sad.png";
import Typewriter from "typewriter-effect/dist/core";

function Introduction() {
  useEffect(() => {
    new Typewriter("#welcome", {
      strings: "Welcome to My Sober Toolkit",
      autoStart: true,
      cursor: "",
    });
  }, []);

  return (
    <div className="Introduction">
      <h1 id="welcome">Welcome to My Sober Toolkit</h1>
      <div className="questions-container">
        <div className="questions-image">
          <img className="sad-lady" src={sad} alt="sad lady sitting down" />
        </div>
        <div className="questions-text">
          <p>Is alcohol holding you back from reaching your full potential?</p>
          <p>
            Do you often drink more than you had intended, feeling like you
            don't have an "off switch"?
          </p>
          <p>
            Do you feel like your mental and/or physical health suffers because
            of drinking?
          </p>
          <p>
            Do you ever feel ashamed or embarrassed of the way you have behaved
            when drinking?
          </p>
        </div>
      </div>
      <p>
        You don't have to hit rock bottom before realising you have a problem
        with your alcohol consumption. If you answered "yes" to any of the
        questions above, you probably already know that it's time for you to
        take a break from alcohol, or try to stop drinking altogether.
        <br />
        <br />
        Getting sober is <strong>so hard</strong>, and staying sober is even
        harder. There is no magic pill and there is no one-size-fits-all
        solution. But you are not alone. There are many people who have been
        where you are and have come out the other side. You will need to fill
        your toolkit with all the tools you can find and keep trying until you
        find what works for you - the tools to help you build the life you
        deserve.
        <br />
        <br />
        The good news is that there are a growing number of resources available
        to help you on your journey, and this website is one of them. Here you
        will find a collection of resources to help you get and stay sober.
      </p>
      <br />
      <br />
      <p className="warning">
        <strong>Warning:</strong> This website is intended for individuals
        seeking support in reducing or quitting alcohol who are {}
        <strong>not</strong> medically dependent. If you are physically addicted
        to alcohol, quitting suddenly can be dangerous and even
        life-threatening. If this is the case for you, please seek help from a
        medical professional immediately to ensure your safety and well-being.
      </p>
      <br />
      <br />
    </div>
  );
}

export default Introduction;
