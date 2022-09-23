import React from 'react';
import ProfilePicture from '../img/profile.jpg';

function About() {
  return (
    <section className="about">
      <img className="about-img" src={ProfilePicture} alt="profile" />
      <div className="about-info">
        <div className="about-title">About Me</div>
        <div className="about-description">
          Hi! My name is Ana, I am an ex-neurologist and an aspiring front-end
          developer.
        </div>
      </div>
    </section>
  );
}

export default About;
