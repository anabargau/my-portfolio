import React from 'react';
import Project from './Project';

function Projects() {
  const projectsArray = [
    {
      liveUrl: 'https://anabargau.github.io/phototagging-app/',
      codeUrl: 'https://github.com/anabargau/phototagging-app',
      name: "Where's Waldo Phototagging App",
      description:
        'An exciting game where you have to find Waldo and his friends in a series of different photos.',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/shopping-cart/',
      codeUrl: 'https://github.com/anabargau/shopping-cart',
      name: 'Shopping Cart',
      descritpion:
        'A site for an online pet shop, where you can purchase everything your pet needs: from food and toys to cleaning products.',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/memory-card/',
      codeUrl: 'https://github.com/anabargau/memory-card',
      name: 'Memory Card Game',
      descritpion:
        'A game where you can train your memory by travelling through space.',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/cv-project/',
      codeUrl: 'https://github.com/anabargau/cv-project',
      name: 'Create Your CV',
      descritpion:
        'A CV-builder app that lets you create your own CV by following a template.',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/battleship/',
      codeUrl: 'https://github.com/anabargau/battleship',
      name: 'Battleship',
      descritpion:
        'A classic game of battleship with a design that transports you right to the school years.',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/weather-app/',
      codeUrl: 'https://github.com/anabargau/weather-app',
      name: 'Weather App',
      descritpion:
        'A weather app that lets you find what the weather is like anywhere in the world.',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/todo-list/',
      codeUrl: 'https://github.com/anabargau/todo-list',
      name: 'To Do List',
      descritpion:
        'A useful app that you can use everyday to organise you personal project and every task you need to do to accomplish each one. Log each task in your app and get working.',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/my-library/',
      codeUrl: 'https://github.com/anabargau/my-library',
      name: 'My Library',
      descritpion: '',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/restaurant-page/',
      codeUrl: 'https://github.com/anabargau/restaurant-page',
      name: 'Restaurant Page',
      descritpion: '',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/tic-tac-toe-JS/',
      codeUrl: 'https://github.com/anabargau/tic-tac-toe-JS',
      name: 'Tic-Tac-Toe(JS)',
      descritpion: '',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/calculator/',
      codeUrl: 'https://github.com/anabargau/calculator',
      name: 'Calculator',
      descritpion: '',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/etch-a-sketch/',
      codeUrl: 'https://github.com/anabargau/etch-a-sketch',
      name: 'Etch a Sketch',
      descritpion: '',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/rock-paper-scissors/',
      codeUrl: 'https://github.com/anabargau/rock-paper-scissors',
      name: 'Rock-Paper-Scissors',
      descritpion: '',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/admin-dashboard/',
      codeUrl: 'https://github.com/anabargau/admin-dashboard',
      name: 'Admin Dashboard',
      descritpion: '',
      js: true,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Chess#main.rb',
      codeUrl: 'https://github.com/anabargau/chess',
      name: 'Chess',
      descritpion: '',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Tic-Tac-Toe#main.rb',
      codeUrl: 'https://github.com/anabargau/tic-tac-toe-ruby',
      name: 'Tic-Tac-Toe(Ruby)',
      descritpion: '',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Mastermind#main.rb',
      codeUrl: 'https://github.com/anabargau/mastermind',
      name: 'Mastermind',
      descritpion: '',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Hangman#main.rb',
      codeUrl: 'https://github.com/anabargau/hangman',
      name: 'Hangman',
      descritpion: '',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Connect-Four#main.rb',
      codeUrl: 'https://github.com/anabargau/connect-four',
      name: 'Connect-Four',
      descritpion: '',
      js: false,
    },
  ];
  return (
    <section className="work">
      <div className="work-title">My Work</div>
      <div className="projects-container">
        {projectsArray.map((project) => (
          <Project
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
            name={project.name}
            description={project.description}
            js={project.js}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
