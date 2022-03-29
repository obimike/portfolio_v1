import Internship from "../assets/img/internship.png";
import Taak from "../assets/img/taak.png";
import NewsCluster from "../assets/img/newsCluster.png";
import TODO from "../assets/img/todo.png";

export const workData = [
  {
    id: 1,
    name: "Internship",
    img: Internship,
    desc: "Use Internship's real-time community collaboration to reinforce what you've learned and get you ready for that big moment.",
    lang: ["React", "Chakra-UI", "Firebase"],
    links: [
      "https://github.com/obimike/internship",
      "https://internship-001.web.app/",
    ],
    number: 1,
  },
  {
    id: 2,
    name: "Taak",
    img: Taak,
    desc: "This platform to manage and track all projects of different types by breaking it down to smaller tasks that are assignable to any member of your  team. ",
    lang: ["React", "Material-UI", "Firebase"],
    links: [
      "https://github.com/obimike/TaskManager",
      "https://task-manager-6dd11.web.app/",
    ],
    number: 2,
  },

  {
    id: 3,
    name: "NewsCluster",
    img: NewsCluster,
    desc: "NewsCluster is an aggregated news app for almost all category of news. Users can share, bookmark or upvote a news articles. The news with the highest number of upvote becomes the News of the day. ",
    lang: ["Android", "Php", "Firebase"],
    links: ["http://github.com/obimike", "#"],
    number: 1,
  },

  {
    id: 4,
    name: "Todo List",
    img: TODO,
    desc: "The idea behind this project is to exploit the power of Django REST framework(DRF) as a backend api and the ease of class base view(CBV) implementation as to function base view(FBV) in writing.",
    lang: ["Django rest framework", "Javascript", "Python"],
    links: [
      "https://github.com/obimike/Todo-List-with-Django-Rest-Api-and-pure-Javascript",
      "https://tododrfapi.herokuapp.com/",
    ],
    number: 2,
  },
];
