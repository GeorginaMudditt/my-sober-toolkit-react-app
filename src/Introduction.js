import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="Introduction">
      <h1>Welcome</h1>
      <ul>
        <li>Is alcohol holding you back from reaching your full potential?</li>
        <li>
          Do you often drink more than you had intended, feeling like you don't
          have an off switch?
        </li>
        <li>
          Do you feel like your mental and/or physical health suffers because of
          drinking?
        </li>
        <li>
          Do you ever feel ashamed or embarrassed of the way you have behaved
          when drinking?
        </li>
      </ul>
      <p>
        If you answered any of those questions with a "yes", it would be
        beneficial to take a break from alcohol or stop drinking altogether.
        <br />
        Getting sober is <strong>so hard</strong>, and staying sober is even
        harder. There is no magic pill and there is no one-size-fits-all
        solution. But you are not alone. There are many people who have been
        where you are and have come out the other side, and you can do it too.
        You just need to fill your toolkit with all the tools you can find and
        keep trying until you find what works for you.
        <br />
        The good news is that there are a growing number of resources available
        to help you on your journey, and this website is one of them. Here you
        will find a collection of resources to help you get and stay sober.
      </p>
      <p>
        <strong>Warning:</strong> This website is intended for individuals
        seeking support in reducing or quitting alcohol who are {}
        <strong>not</strong> medically dependent. If you are physically addicted
        to alcohol, quitting suddenly can be dangerous and even
        life-threatening. Please seek help from a medical professional
        immediately to ensure your safety and well-being.
      </p>
    </div>
  );
}

export default Introduction;
