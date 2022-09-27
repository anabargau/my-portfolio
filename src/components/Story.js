import React, { forwardRef } from 'react';

const Story = forwardRef((props, ref) => {
  return (
    <section className="story" ref={ref}>
      <div className="story-title">My Story</div>
      <div className="story-content">
        My story isn't as straight forward as I would have liked. It all started
        in high school, when I got in math and computer scienece class. I got
        quite interested in <strong>math, computer scienece and coding</strong>,
        even trying my luck in competitions. I always had an{' '}
        <strong>analytical</strong> mind and thought this was the path I will
        pursue. But, when time came to go to university, I had a last moment{' '}
        <strong>change of heart</strong> and because of my new found wish to be
        able to feel like I am <strong>helping people</strong> directly, I went
        to <strong>medical school</strong>, in Bucharest. <br /> Then started
        the most difficult 6 years of my life, when I worked and studied like
        never before. I had thought of quitting many times, but what kept me
        going was the belief that in the end{' '}
        <strong>it will be worth it</strong>...Well, it wasn't, at least not for
        me. <br /> I <strong>graduated</strong> with high grades and without any
        failed exams and when residency finally came, I was so full of{' '}
        <strong>hope</strong> and ready to do what I was preparing for so many
        hard years to do. But, sadly, nothing was like I expected it to be.
        Every day at the hospital felt like another{' '}
        <strong>disappointment</strong>. I had been working for a year and a few
        months as a <strong>neurology</strong> resident, when I decided that
        this was
        <strong> NOT what I wanted to do</strong>.
        <br />
        After many sleepless nights of thinking what to do next, I remembered my
        long lost love for <strong>coding</strong>. I took a leap of faith and
        started learning <strong>web-development</strong> through the best
        course I could find online, which was{' '}
        <strong>
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            'The Odin Project'
          </a>
        </strong>
        . It was love at first sight. I started going through lesson after
        lesson, <strong>project after project</strong>, no matter how difficult
        it got and now, here I am, at the end of the front-end path of the
        course. <br /> I try to think of the med school years, not as lost
        years, but an{' '}
        <strong>
          experience that taught me discipline, modesty, how to work hard for
          what I want, perseverance, how to tackle difficult times, how to work
          under pressure, deliver good work fast, team work. It made me a fast,
          determined and efficient learner, a hard worker
        </strong>
        , and most of all, it taught me how to always
        <strong> keep pushing</strong>. <br /> I hope that I will soon be given
        the <strong>chance</strong> to prove myself in the field of{' '}
        <strong>software development</strong> and put all my experience and what
        I learned to good use.
      </div>
    </section>
  );
});

export default Story;
