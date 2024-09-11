import React, { forwardRef, useEffect, useState } from 'react';
import ProfilePicture from '../img/profile.jpg';

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
    'professional netflixer 📺',
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => {
        if (prevIndex === 10) {
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
      <img className="about-img" src={ProfilePicture} alt="profile" />
      <div className="about-info">
        <div className="about-title">About Me</div>
        <div className="about-description">
          Hi! My name is Ana, I am an ex-neurology resident, full stack web developer with a comprehensive experience of 2 years and{' '}
          <div className="attribute">{attributeArray[index]}.</div>
        </div>
      </div>
    </section>
  );
});

export default About;
