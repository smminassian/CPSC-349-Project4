import React from "react";
import "./AboutUs.css";
import Ali from "./images/Ali.jpg";
import Carson from "./images/carson.jpg";
import Daniel from "./images/daniel.jpg";
import github from "./images/github-mark.png";
import Sebie from "./images/image_67173121.jpg";

function contact() {
  return (
    <div className="mainBody">
      <h1 className="mainHeader">Meet The Team</h1>
      <br />
      <br />
      <details>
        <summary>Sebastien Minassian</summary>
        <div classname="member">
          <img className="memberPhoto" src={Sebie} alt="sebastien" />
          <p>
            Hi, my name is Sebastien Minassian and I'm currently a junior at Cal
            State Fullerton. I am a computer science major and
          </p>
          <p>I have two cats named Lulu and Mitsy</p>
          <a href="https://github.com/smminassian">
            <img className="gitPhoto" src={github} alt="githubImage" />
          </a>
        </div>
      </details>
      <br />
      <details>
        <summary>Ali Omrani</summary>
        <div className="member">
          <img className="memberPhoto" src={Ali} alt="Ali" />
          <p>My name is Ali im a senior comp sci CSUF student. I code and play tennis.</p>
          <a href="https://github.com/eynomr">
            <img className="gitPhoto" src={github} alt="githubImage" />
          </a>
        </div>
      </details>
      <br />
      <details>
        <summary>Daniel Nyguyen</summary>
        <div className="member">
          <img className="memberPhoto" src={Daniel} alt="daniel" />
          <p>Hi, my name is Daniel Nguyen and I am a senior at Cal State Fullerton.
            My favorite thing to do outside of school and work is playing in amateur gaming tournaments with my friends. </p>
          <a href="https://github.com/dnguyen1250">
            <img className="gitPhoto" src={github} alt="githubImage" />
          </a>
        </div>
      </details>
      <br />
      <details>
        <summary>Carson Szeder</summary>
        <div className="member">
          <img className="memberPhoto" src={Carson} alt="carson" />
          <p>I played junior college baseball my freshman and sophomore year</p>
          <a href="https://github.com/Carsoncantcode">
            <img className="gitPhoto" src={github} alt="githubImage" />
          </a>
        </div>
      </details>
    </div>
  );
}

export default contact;