import React, { forwardRef } from 'react';
import uniqid from 'uniqid';
import Project from './Project';

const Projects = forwardRef((props, ref) => {
  const projectsArray = [
    {
      codeUrl: 'https://github.com/anabargau/secret-club',
      name: 'Secret-Club',
      description:
        "An exclusive club, where you can sign up to see other people's messages, but you can't see their author until you enter the secret password to become an insider. You can also enter another password to become an admin and gain some extra benefits.",
      img: 'https://i.ibb.co/rwLQTm8/Screenshot-from-2022-11-25-23-38-42.png',
    },
    {
      codeUrl: 'https://github.com/anabargau/movieplex',
      name: 'Movieplex',
      description:
        'A simple movie libray, where you can save your favorite movies. You can create, update and delete movies and movie genres.',
      img: 'https://i.postimg.cc/SRk88PhH/Screenshot-from-2022-11-16-19-43-15.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/phototagging-app/',
      codeUrl: 'https://github.com/anabargau/phototagging-app',
      name: "Where's Waldo Phototagging App",
      description:
        'An app insipred by the popular game "Where\'s Waldo?", where you have to find Waldo and his friends in a photo cluttered with many other characters.',
      img: 'https://i.postimg.cc/zfmC4mz8/waldo.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/shopping-cart/',
      codeUrl: 'https://github.com/anabargau/shopping-cart',
      name: 'Happy Paws',
      description:
        'A site for an online pet shop, where you can purchase everything your pet needs: from food and toys to cleaning products.',
      img: 'https://i.postimg.cc/LmXksTGm/shopping-cart.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/memory-card/',
      codeUrl: 'https://github.com/anabargau/memory-card',
      name: 'Memory Card Game',
      description:
        'A space-themed memory game. The goal is to click on each individual card, without clicking on any of it twice.',
      img: 'https://i.postimg.cc/sVMJTcJT/memory-game.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/cv-project/',
      codeUrl: 'https://github.com/anabargau/cv-project',
      name: 'Create Your CV',
      description:
        'A CV-builder app that lets you create your own CV by following a template.',
      img: 'https://i.postimg.cc/zv7T43dg/cv.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/battleship/',
      codeUrl: 'https://github.com/anabargau/battleship',
      name: 'Battleship',
      description:
        'A classic game of battleship with a design that transports you right to the school years.',
      img: 'https://i.postimg.cc/QCJqsfMV/battleship.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/weather-app/',
      codeUrl: 'https://github.com/anabargau/weather-app',
      name: 'Weather App',
      description:
        'A weather app that lets you find what the weather is like anywhere in the world.',
      img: 'https://i.postimg.cc/DwJbPCKs/weather.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/todo-list/',
      codeUrl: 'https://github.com/anabargau/todo-list',
      name: 'To Do List',
      description:
        'A useful app that you can use everyday to organise you personal project and every task you need to do to accomplish each one. Log each task in your app and get working.',
      img: 'https://i.postimg.cc/wMws0Zv5/todo.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/my-library/',
      codeUrl: 'https://github.com/anabargau/my-library',
      name: 'My Library',
      description:
        'A library app that helps you keep track of the books you read or maybe want to read.',
      img: 'https://i.postimg.cc/gjmvM3Kp/library.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/admin-dashboard/',
      codeUrl: 'https://github.com/anabargau/admin-dashboard',
      name: 'Admin Dashboard',
      description: 'A dashboard created by following a given design template.',
      img: 'https://i.postimg.cc/BZB5jwqn/dashboard.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/restaurant-page/',
      codeUrl: 'https://github.com/anabargau/restaurant-page',
      name: 'Restaurant Page',
      description:
        'A simple site for your restaurant that provides a homepage, a page for your delicious menu and a contact page.',
      img: 'https://i.postimg.cc/jjywGL2S/restaurant.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/tic-tac-toe-JS/',
      codeUrl: 'https://github.com/anabargau/tic-tac-toe-JS',
      name: 'Tic-Tac-Toe(JS)',
      description:
        'The classic Tic-Tac-Toe game that you can play alone or with your friends when you are bored.',
      img: 'https://i.postimg.cc/RZNwbSw-W/tictactoe.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/calculator/',
      codeUrl: 'https://github.com/anabargau/calculator',
      name: 'Calculator',
      description:
        'A simple calculator that does basic math operations and which will be a great help in times of need.',
      img: 'https://i.postimg.cc/B4fwtdC4/calculator.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/etch-a-sketch/',
      codeUrl: 'https://github.com/anabargau/etch-a-sketch',
      name: 'Etch a Sketch',
      description:
        'A sketchpad on which you can draw masterpieces with any color that your heart desires. The possibilities are endless!',
      img: 'https://i.postimg.cc/bN6QTDSX/sketch.png',
    },
    {
      liveUrl: 'https://anabargau.github.io/rock-paper-scissors/',
      codeUrl: 'https://github.com/anabargau/rock-paper-scissors',
      name: 'Rock-Paper-Scissors',
      description:
        'The well known game of rock-paper-scissors, this time played in a chat with Doris.',
      img: 'https://i.postimg.cc/g2Q8CCKN/rock-paper-scissors.png',
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Chess#main.rb',
      codeUrl: 'https://github.com/anabargau/chess',
      name: 'Chess',
      description: 'The console version of the popular game chess.',
      img: 'https://i.postimg.cc/85hRBZMw/chess.png',
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Tic-Tac-Toe#main.rb',
      codeUrl: 'https://github.com/anabargau/tic-tac-toe-ruby',
      name: 'Tic-Tac-Toe(Ruby)',
      description: 'The classic tic-tac-toe game, now written in Ruby.',
      img: 'https://i.postimg.cc/yY6mcXdX/tic-tac-toe-ruby.png',
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Mastermind#main.rb',
      codeUrl: 'https://github.com/anabargau/mastermind',
      name: 'Mastermind',
      description:
        "A console version of the game Mastermind, a game where you have to guess your opponent's secret code within a certain number of turns (like hangman with colored pegs).",
      img: 'https://i.postimg.cc/NjMxq7vf/mastermind.png',
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Hangman#main.rb',
      codeUrl: 'https://github.com/anabargau/hangman',
      name: 'Hangman',
      description:
        'A console version of the popular game Hangman. It chooses a random word that you have to guess.',
      img: 'https://i.postimg.cc/W4q6tN4B/hangman.png',
    },
    {
      liveUrl: 'https://replit.com/@anabananaa/Connect-Four#main.rb',
      codeUrl: 'https://github.com/anabargau/connect-four',
      name: 'Connect-Four',
      description:
        'A console version of the game Connect-Four. It is a two-player connection board game, in which the players choose a color and then take turns dropping colored tokens into a grid. ',
      img: 'https://i.postimg.cc/52RSxYf5/connect-four.png',
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
