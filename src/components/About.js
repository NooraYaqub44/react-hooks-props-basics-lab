import React from "react";
import Links from "./Links";

function About({bio,linkedin, github}) {
    
  return (
    <div id="about">
      <h2>About Me</h2>
     {/*<p>Put the bio in here</p>*/}
      {bio  ? <p>{bio}</p>: null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={linkedin} github={github} />
    </div>
  );// 
}

export default About;
