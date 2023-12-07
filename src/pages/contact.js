import React from "react";
import "./contact.css"

export default function contact() {
  return (
    <div className="mainDiv">
        <h1>Meet The Crew</h1>
        <br />
        <br />
        <details>
          <summary>Sebastien Minassian</summary>
          <div>
            <img src="./images/image_67173121.jpg" alt="sebastien"/>
            <p>
              Hi, my name is Sebastien Minassian and I'm currently a junior at Cal
              State Fullerton. I am a computer science major and
            </p>
            <p>I have two cats named Lulu and Mitsy</p>
            <a href="https://github.com/smminassian">
              <img src="/images/github-mark.png" alt="githubImage"/>
            </a>
          </div>
        </details>
        <br />
        <details>
          <summary>Ali Omrani</summary>
          <img src="/images/Ali.jpg" alt="Ali"/>
          <p>My name is Ali im a senior comp sci CSUF student. I code and play tennis.</p>
          <a href="https://github.com/eynomr">
            <img src="/images/github-mark.png" alt="githubImage"/>
          </a>
        </details>
        <br />
        <details>
          <summary>Daniel Nyguyen</summary>
          <img src="/images/daniel.jpg" alt="daniel"/>
          <p>Hi, my name is Daniel Nguyen and I am a senior at Cal State Fullerton.
            My favorite thing to do outside of school and work is playing in amateur gaming tournaments with my friends. </p>
          <a href="https://github.com/dnguyen1250">
            <img src="/images/github-mark.png" alt="githubImage"/>
          </a>
        </details>
        <br />
        <details>
          <summary>Carson Szeder</summary>
          <img src="/images/carson.jpg" alt="carson"/>
          <p>I played junior college baseball my freshman and sophomore year</p>
          <a href="https://github.com/Carsoncantcode">
            <img src="/images/github-mark.png" alt="githubImage"/>
          </a>
        </details>
      </div>
  );
}
