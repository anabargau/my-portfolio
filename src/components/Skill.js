import React from 'react';

function Skill(props) {
  const { skill } = props;
  return (
    <div className="skill">
      <img src={skill.img} alt={skill.name} />
      <div className="skill-title">{skill.name}</div>
    </div>
  );
}

export default Skill;
