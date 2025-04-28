import React, { forwardRef, useEffect, useState } from 'react';
import ProfilePicture from '../img/profile-photo.jpg';
import '../styles/about.css';
import FadeIn from './FadeIn';
import Typewriter from './Typewriter';

const About = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const attributeArray = [
    'snowboarder 🏂',
    'spontaneous baker 🧁',
    'sports enthusiast 🎾',
    'animal lover 🐶',
    'hiker ⛰️',
    'occasional cook 🍜',
    'boardgame expert 🃏',
    'yoga practitioner 🧘‍♀️',
    'perfume connoisseur  🎀',
    'wine drinker 🍷',
    'coffee addict ☕',
    'bookworm 📚',
    'music lover 🎶',
    'movie buff 🎬',
    'foodie 🍕',
    'travel addict ✈️',
    'gym goer 💪🏻',
    'professional netflixer 📺',
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => {
        if (prevIndex === 17) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 4000);
    return () => clearTimeout(timer);
  });
  return (
    <section className="about" ref={ref}>
      <FadeIn>
        <img className="about-img" src={ProfilePicture} alt="profile" />
      </FadeIn>
      <FadeIn>
        <div className="about-info">
          <div className="about-title neon-pink">About Me</div>
          <div className="about-description">
            Hi! My name is Ana! I am passionate about creating scalable, responsive web apps with clean code, blending technical expertise with attention to detail and also a {' '} <br className="mobile" />
            <Typewriter className="attribute neon-green" attributeArray={attributeArray} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
});

export default About;
