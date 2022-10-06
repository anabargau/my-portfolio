import React, { forwardRef } from 'react';
import uniqid from 'uniqid';
import Project from './Project';

const Projects = forwardRef((props, ref) => {
  const projectsArray = [
    {
      liveUrl: 'https://anabargau.github.io/phototagging-app/',
      codeUrl: 'https://github.com/anabargau/phototagging-app',
      name: "Where's Waldo Phototagging App",
      description:
        'An app insipred by the popular game "Where\'s Waldo?", where you have to find Waldo and his friends in a photo cluttered with many other characters.',
      img: 'https://i.postimg.cc/zfmC4mz8/waldo.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/shopping-cart/',
      codeUrl: 'https://github.com/anabargau/shopping-cart',
      name: 'Shopping Cart',
      description:
        'A site for an online pet shop, where you can purchase everything your pet needs: from food and toys to cleaning products.',
      img: 'https://i.postimg.cc/LmXksTGm/shopping-cart.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/memory-card/',
      codeUrl: 'https://github.com/anabargau/memory-card',
      name: 'Memory Card Game',
      description:
        'A game where you can train your memory by travelling through space.',
      img: 'https://i.postimg.cc/sVMJTcJT/memory-game.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/cv-project/',
      codeUrl: 'https://github.com/anabargau/cv-project',
      name: 'Create Your CV',
      description:
        'A CV-builder app that lets you create your own CV by following a template.',
      img: 'https://i.postimg.cc/zv7T43dg/cv.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/battleship/',
      codeUrl: 'https://github.com/anabargau/battleship',
      name: 'Battleship',
      description:
        'A classic game of battleship with a design that transports you right to the school years.',
      img: 'https://i.postimg.cc/QCJqsfMV/battleship.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/weather-app/',
      codeUrl: 'https://github.com/anabargau/weather-app',
      name: 'Weather App',
      description:
        'A weather app that lets you find what the weather is like anywhere in the world.',
      img: 'https://i.postimg.cc/DwJbPCKs/weather.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/todo-list/',
      codeUrl: 'https://github.com/anabargau/todo-list',
      name: 'To Do List',
      description:
        'A useful app that you can use everyday to organise you personal project and every task you need to do to accomplish each one. Log each task in your app and get working.',
      img: 'https://i.postimg.cc/wMws0Zv5/todo.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/my-library/',
      codeUrl: 'https://github.com/anabargau/my-library',
      name: 'My Library',
      description:
        'A library app that helps you keep track of the books you read or maybe want to read.',
      img: 'https://i.postimg.cc/gjmvM3Kp/library.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/admin-dashboard/',
      codeUrl: 'https://github.com/anabargau/admin-dashboard',
      name: 'Admin Dashboard',
      description: 'A dashboard created by following a given design template.',
      img: 'https://i.postimg.cc/BZB5jwqn/dashboard.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/restaurant-page/',
      codeUrl: 'https://github.com/anabargau/restaurant-page',
      name: 'Restaurant Page',
      description:
        'A simple site for your restaurant that provides a homepage, a page for your delicious menu and a contact page.',
      img: 'https://i.postimg.cc/jjywGL2S/restaurant.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/tic-tac-toe-JS/',
      codeUrl: 'https://github.com/anabargau/tic-tac-toe-JS',
      name: 'Tic-Tac-Toe(JS)',
      description:
        'The classic Tic-Tac-Toe game that you can play alone or with your friends when you are bored.',
      img: 'https://i.postimg.cc/RZNwbSw-W/tictactoe.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/calculator/',
      codeUrl: 'https://github.com/anabargau/calculator',
      name: 'Calculator',
      description:
        'A simple calculator that does basic math operations and which will be a great help in times of need.',
      img: 'https://i.postimg.cc/B4fwtdC4/calculator.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/etch-a-sketch/',
      codeUrl: 'https://github.com/anabargau/etch-a-sketch',
      name: 'Etch a Sketch',
      description:
        'A sketchpad on which you can draw masterpieces with any color that your heart desires. The possibilities are endless!',
      img: 'https://i.postimg.cc/bN6QTDSX/sketch.png',
      js: true,
    },
    {
      liveUrl: 'https://anabargau.github.io/rock-paper-scissors/',
      codeUrl: 'https://github.com/anabargau/rock-paper-scissors',
      name: 'Rock-Paper-Scissors',
      description:
        'The well known game of rock-paper-scissors, this time played in a chat with Doris. Think you can beat her?',
      img: 'https://i.postimg.cc/g2Q8CCKN/rock-paper-scissors.png',
      js: true,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Chess#main.rb',
      codeUrl: 'https://github.com/anabargau/chess',
      name: 'Chess',
      description:
        'You can now play the complex game of chess in the comfort of your own console. Think you are good enough?',
      img: 'https://i.postimg.cc/85hRBZMw/chess.png',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Tic-Tac-Toe#main.rb',
      codeUrl: 'https://github.com/anabargau/tic-tac-toe-ruby',
      name: 'Tic-Tac-Toe(Ruby)',
      description:
        'The classic tic-tac-toe game, now written in Ruby for a change.',
      img: 'https://i.postimg.cc/yY6mcXdX/tic-tac-toe-ruby.png',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Mastermind#main.rb',
      codeUrl: 'https://github.com/anabargau/mastermind',
      name: 'Mastermind',
      description:
        'Mastermind, the challenging game of logic and deduction. Do you think you can crack the code? You can be the codebreaker or the codemaker.',
      img: 'https://i.postimg.cc/NjMxq7vf/mastermind.png',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Hangman#main.rb',
      codeUrl: 'https://github.com/anabargau/hangman',
      name: 'Hangman',
      description: 'Test your vocabulary with this fun game of Hangman.',
      img: 'https://i.postimg.cc/W4q6tN4B/hangman.png',
      js: false,
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Connect-Four#main.rb',
      codeUrl: 'https://github.com/anabargau/connect-four',
      name: 'Connect-Four',
      description:
        'The original vertical four-in-a-row checkers game. Come play with your friends!',
      img: 'https://i.postimg.cc/52RSxYf5/connect-four.png',
      js: false,
    },
  ];
  return (
    <section className="work" ref={ref}>
      <div className="work-title">My Work</div>
      <div className="projects-container">
        {projectsArray.map((project) => (
          <Project key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
});

export default Projects;
