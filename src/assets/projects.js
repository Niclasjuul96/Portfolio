import NoteEase from "./project-images/NoteEase.png";
import SimonGame from "./project-images/SimonGame.png";
import Password from "./project-images/password.png";


const projects = [
  {
    id: 1,
    title: "NoteEase ",
    imgURL:
      NoteEase,
    detail: 
      "NoteEase was one of my first projects, that i was doing while learning react. a simple note taking app that is saving your notes to remember for another time, i am using json and local storage to retrieve and save notes and able to delete aswell",
    githuburl: 
      "https://github.com/Niclasjuul96/NoteEase",
    livepreviewurl:
      "http://noteease.niclasjuul.com/",
    tech:
      ["react", "javascript", "node.js","json"]
  },
  {
    id: 2, 
    title: 
      "Simon Says Game",
    imgURL: 
      SimonGame,
    detail: 
      "Simon game was a little funny project that i was testing if i would be able to do. it's just envolving the basic html, css and javascript. ",
    githuburl: 
      "https://github.com/Niclasjuul96/SimonGame", 
    livepreviewurl: 
      "http://simongame.niclasjuul.com/",
    tech: 
      ["Html", "CSS", "JavaScript"]
  },
  {
    id: 3, 
    title: 
      "Password Generator", 
    imgURL: 
      Password,
    detail: 
      "Password generator is a small and simple tool to generate password that includes what ever you like. to solve solve one of the hardest stuff in life, finding a password to use. and ofc the copy to clipboard doesn't work on the website cause it's not possible. but iif you download the project from github, you will be able to use that feature aswell.",
    githuburl: 
      "https://github.com/Niclasjuul96/PasswordGenerator/tree/main",
    livepreviewurl: 
      "http://passwordgenerator.niclasjuul.com/",
    tech: 
      [ "html", "CSS", "JavaScript"]
  }
]

export default projects;
  