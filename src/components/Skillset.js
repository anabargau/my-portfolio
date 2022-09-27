import React, { forwardRef } from 'react';
import uniqid from 'uniqid';
import Skill from './Skill';

const Skillset = forwardRef((props, ref) => {
  const skillsArray = [
    {
      name: 'JavaScript',
      img: 'https://gistcdn.githack.com/anabargau/22c6a475e0d9b2daf9c0590d9ed1d9df/raw/ea5f21a1f16a93f4a36abd5fab9a1021f42c4888/js.svg',
    },
    {
      name: 'React',
      img: 'https://gistcdn.githack.com/anabargau/3aeb2707141cbfe084f8d9c966da4cec/raw/f70ae26163ebb44cb0d3abf5809507d78bdcbd0e/react.svg',
    },
    {
      name: 'React Router',
      img: 'https://i.postimg.cc/qR0hrNPZ/router.png',
    },
    {
      name: 'HTML',
      img: 'https://gistcdn.githack.com/anabargau/9e43c99175213a731a57c1fad8e571cd/raw/8e9c8014a9211a7c4032e67476138ac5e38e8e39/html.svg',
    },
    {
      name: 'CSS',
      img: 'https://gistcdn.githack.com/anabargau/54108b960c44750d80e9412f0fcfd4d6/raw/cd3eaf47849d739c743f88482b9e88722023c15d/css.svg',
    },
    {
      name: 'Firebase',
      img: 'https://gistcdn.githack.com/anabargau/f1655bddf7827427675b619c63c08465/raw/e58754d902fee02df9ae997506db2b4338a2f745/firebase.svg',
    },
    {
      name: 'Git',
      img: 'https://gistcdn.githack.com/anabargau/503d3a6f5361a56baf767128ac607f3e/raw/7c57361273ca028ca0a4450339365a871d516389/git.svg',
    },
    {
      name: 'SQL',
      img: 'https://gistcdn.githack.com/anabargau/9c7199e644c7133364a3a509e7ed074f/raw/2f5437595b27127e352edea0040436f8d5e09df5/sql.svg',
    },
    {
      name: 'Jest',
      img: 'https://i.postimg.cc/hGVzNL5d/jest.webp',
    },
    {
      name: 'NPM',
      img: 'https://gist.githubusercontent.com/anabargau/24ff4a90187392fa91491edca3750d79/raw/47bdf8733874cec083ae113bda150f4a1b620ff7/npm.svg',
    },
    {
      name: 'Webpack',
      img: 'https://gistcdn.githack.com/anabargau/c8c7c2e5b2ab5578e465f06ef45c4503/raw/7ef80ac3b56e6af1afd0ed9a08a1a34041bbbec6/webpack.svg',
    },
    {
      name: 'Ruby',
      img: 'https://gist.githubusercontent.com/anabargau/e7c98d14901d938844966241b6379cfc/raw/6ee7cb5680336d0a99828e27e9212a2c469464b3/ruby.svg',
    },
  ];
  return (
    <section className="skillset" ref={ref}>
      <div className="skillset-title">Skillset</div>
      <div className="icon-container">
        {skillsArray.map((skill) => (
          <Skill key={uniqid()} skill={skill} />
        ))}
      </div>
    </section>
  );
});

export default Skillset;
