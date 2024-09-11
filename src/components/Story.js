import React, { forwardRef } from 'react';

const Story = forwardRef((props, ref) => {
  return (
    <section className="story" ref={ref}>
      <div className="story-title">My Story</div>
      <div className="story-content">
        My journey has been anything but straightforward. In high school, I developed a love for <strong>math</strong> and <strong>coding</strong>, even competing in programming competitions. However, I had a change of heart and pursued <strong>medicine</strong> in Bucharest, driven by a desire to <strong>help</strong> people directly. <br />
        After <strong>six challenging year</strong>s and a year as a neurology resident, I realized medicine wasn’t for me. I reconnected with my passion for <strong>coding</strong>, diving into web development through <strong>
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            'The Odin Project'
          </a>
        </strong>. I started going through lesson after lesson, <strong>project after project</strong>, no matter how difficult it got and finally I got where I aspired to be. <br />
        I view my medical school experience as valuable, having taught me discipline, perseverance, adaptability, how to work hard for what I want, perseverance, how to tackle difficult times, how to work under pressure, deliver good work fast, team work. It made me a fast, determined and efficient learner, a hard worker, and most of all, it taught me how to always <strong> keep pushing</strong>. <br />
        For the <strong>past two years</strong>, I’ve been a full-stack <strong>web developer</strong>, growing immensely and learning a lot. I am now a very well-rounded developer and I am very <strong>eager</strong> to apply my skills in software development.
      </div>
    </section>
  );
});

export default Story;
