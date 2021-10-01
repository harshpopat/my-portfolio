import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/1jFirfpsmYPfIcI006IiRWtpO2kr78t2UI-tDBM9Zbu0/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'GitHub Finder Web App',
    info: "It is a React.js web app which uses the Github API to fetch data. With this app we can easily find github users by directly searching their username. In the search result we can see the user's profile picture, bio, recent 5 repos, followers, following etc.",
    info2: '',
    url: 'https://github-finder-1-0-1.netlify.app/',
    repo: 'https://github.com/harshpopat/github-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'ToDo List Web App',
    info: 'An app to improve your productivity, add the list of the tasks to complete, check the tasks which are completed. The completed tasks become a bit faded so as to differ from the pending ones.',
    info2: '',
    url: 'https://github.com/harshpopat/todo-list-app',
    repo: 'https://github.com/harshpopat/todo-list-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'star-wars.jpg',
    title: 'StarWars Name Generator Web App',
    info: 'A web app that generates names of the characters from the movie StarWars. It uses StarWars API to fetch the data and displays on our screen.',
    info2: '',
    url: 'https://github.com/harshpopat/starwars-name-generator',
    repo: 'https://github.com/harshpopat/starwars-name-generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'harshpopat75@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/harshpopat99',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/harshpopat',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/harshpopat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
