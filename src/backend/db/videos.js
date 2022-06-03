/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import create from "prompt-sync";
import { v4 as uuid } from "uuid"

export const videos = [
  {
    id: uuid(),
    src: "DYtYyFOfpBY",
    title: "Redux For Beginners | Redux Tutorial with Redux Toolkit",
    description:
      "Beginner Redux tutorial using Redux Toolkit. Learn React Redux from scratch using real-world examples of Redux hooks, Redux Thunk, and learn why and when we should use Redux.",
    creator: "Lama Dev",
    view: "63k"
  },
  {
    id: uuid(),
    src: "F_Riqjdh2oM",
    title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    view: "34k"
  },
  {
    id: uuid(),
    src: "0riHps91AzE",
    title: "Learn React JS with Project in 2 Hours",
    creator: "Dipesh Malviya",
    description: " This video is a complete React Crash Course for beginners. The video covers different React Topics and implementation in one single project. The video showcase the React concepts and their use in practical project.",
    view: "300k"
  },
  {
    id: uuid(),
    src: "EHTWMpD6S_0",
    title: "Complete React JS Tutorial in Hindi with 5 Projects in 2022",
    creator: "Thapa Technical",
    description: "Welcome, Complete React JS Tutorial for Beginners In Hindi In 2022. Learn Complete React with 5 Projects from Basic to Advanced in Hindi in 2022. ",
    view: "450k"
  },

  {
    id: uuid(),
    src: "HcOc7P5BMi4",
    title: "HTML Tutorial for Beginners | Complete HTML with Notes & Code",
    creator: "Apna College",
    description: "Notes + Code: https://drive.google.com/drive/folder...",
    view: "670K"
  },

  {
    id: uuid(),
    src: "Edsxf_NBFrw",
    title: "CSS Tutorial In Hindi (With Notes) 🔥",
    creator: "CodeWithHarry",
    description: " CSS Tutorial For Beginners in Hindi: In this CSS3 tutorial in Hindi we will learn everything you need to learn about CSS from scratch. We will first discuss why we need CSS and what CSS is after which we will gradually build pace and learn several intermediate to advanced level concepts.",
    view: "480k"
  },

  {
    id: uuid(),
    src: "chx9Rs41W6g",
    title: "JavaScript | Beginning to Mastery Complete Tutorial (Part 1)",
    creator: "Harshit vashisth",
    description: "Complete modern javascript/es6 tutorial in Hindi (2021),Source code : https://github.com/harshitvee/javascr...",
    view:"37k"
  },

  {
    id: uuid(),
    src: "byTOONVJn-k",
    title: "Complete HTML Tutorial for Beginners in Hindi in 2022 🔥",
    creator: "Thapa Technical",
    description: "Welcome, to Complete HTML Tutorial for beginners in Hindi with Free Notes and Projects.  In this complete HTML tutorial course in Hindi video,  we will cover complete HTML and HTML5 syntax with the best practices, tips & tricks, and shortcuts on how-to code faster in HTML",
    view:"600k"
  },

  {
    id: uuid(),
    src: "yfoY53QXEnI",
    title: "CSS Crash Course For Absolute Beginners",
    creator: "Traversy Media",
    description: " In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a CSS cheat sheet that you can keep as a resource and we will also create a basic website layout.",
    view:"300k"
  },

  {
    id: uuid(),
    src: "g4oEUP4Ztas",
    title: "श्रीमद भगवत गीता सार- अध्याय 3 |Shrimad Bhagawad Geeta With Narration |Chapter 3 |",
    creator: "Saregama Bhakti",
    description: "Listen to Chapter 3 of  Shrimad Bhagwad Geeta 'Karma Yoga' explained and narrated by Shailendra Bharti.",
    view:"1.5M"
  },

  {
    id: uuid(),
    src: "o1IaduQICO0",
    title: "JavaScript Full Course | JavaScript Tutorial For Beginners |",
    creator: "edureka!",
    description: "This Edureka video on JavaScript full course is a complete guide to JavaScript which covers in-depth knowledge about data types, variables, functions, event handling, form validation, etc using JavaScript.",
    view:"200k"
  },

  {
    id: uuid(),
    src: "k68j9xlbHHk",
    title: "React Redux Tutorial For Beginners | Redux Toolkit Tutorial 2021",
    creator: "PedroTech",
    description: "Hey everyone, In this video I will go over the basics of Redux using the React-Redux and Redux-Toolkit libraries. I wanted to make this tutorial as simple as possible so I use real-life examples to explain when you might need to use redux.",
    view:"345k"
  },

  {
    id: uuid(),
    src: "iBUJVy8phqw",
    title: "Redux Tutorial (with Redux Toolkit)",
    creator: "The Net Ninja",
    description: "Hey gang, in this tutorial, Anthony will sow you how to get up and running with Redux using Redux Toolkit. ",
    view:"287k"
  },

  {
    id: uuid(),
    src: "_9Gsy6c-UIA",
    title: "श्रीमद भगवत गीता सार- अध्याय १ |Shrimad Bhagawad Geeta With Narration |Chapter 1 |",
    creator: "Saregama Bhakti",
    description: " Presenting Shrimad Bhagwad Geeta Chapter 01 'Vishada Yoga' explained and narrated by Shailendra Bharti.",
    view:"4.7M"
  },

  {
    id: uuid(),
    src: "mBjAzqoKJoI",
    title: "श्रीमद भगवत गीता सार- अध्याय 2 |Shrimad Bhagawad Geeta With Narration |Chapter 2 |",
    creator: "Saregama Bhakti",
    description: "Listen to Shrimad Bhagwad Gita Chapter 2 'Sankhya Yoga' narrated by Shailendra Bharti.",
    view:"3.9M"
  },

  {
    id: uuid(),
    src: "W6NZfCO5SIk",
    title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    creator: "Programming with Mosh",
    description: "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. ",
    view:"1.5M"
  },

  {
    id: uuid(),
    src: "6L-PAmZajfA",
    title: "CSS FlexBox in 30 Minutes in Hindi 2022",
    creator: "Thapa Technical",
    description: " Welcome, all we will see CSS FlexBox tutorial in Hindi in One video. CSS3  FlexBox in Hindi in 30 Minutes in 2022."
  },

  {
    id: uuid(),
    src: "z7lkDctYqq8",
    title: "Create Website Layout with CSS Flexbox - I in Hindi/Urdu",
    creator: "Yahoo Baba",
    description: " In this tutorial you will learn how to create a website layout with CSS flexbox.You can also learn new CSS3 properties related to 'Display flex' like flex-basis, align-items, justify-content , flex-direction, flex practically to make a basic webpage."
  },

  {
    id: uuid(),
    src: "1WjyIZ3YIBo",
    title: "Complete CSS GRID Tutorial In ONE VIDEO In HINDI 2019",
    creator: "Thapa Technical",
    description: " Welcome, to Complete CSS GRID Tutorial In ONE VIDEO In HINDI 2019. CSS3 Grid System in Hindi. "
  },

  {
    id: uuid(),
    src: "qz0aGYrrlhU",
    title: "HTML Tutorial for Beginners: HTML Crash Course",
    creator: "Programming with Mosh",
    description: "HTML Tutorial for Beginners - Learn HTML for a career in web development. This HTML tutorial teaches you everything you need to get started."
  },

  {
    id: uuid(),
    src: "9FPAdxhYZIc",
    title: "O Meri Zohrajabeen Lyrical Video Song | Phir Hera Pheri",
    creator: "Bollywood Classics",
    description: " Presenting 'O Meri Zohrajabeen' Lyrical Video in the voice of Himesh Reshammiya from Hindi movie 'Phir Hera Pheri' starring Akshay Kumar, Sunil Shetty, Paresh Rawal, Bipasa Basu, Johny Lever, Rajpal Yadav on T-Series Classics."
  },

  {
    id: uuid(),
    src: "3f8tFtcuIkI",
    title: "Mujhko Yaad Sataye Teri Lyrical Video Song | Phir Hera Pheri",
    creator: "Bollywood Classics",
    description: "Presenting 'Mujhko Yaad Sataye Teri' Lyrical Video in the voice of Himesh Reshammiya from Hindi movie 'Phir Hera Pheri' starring Akshay Kumar, Rimi Sen on T-Series Classics."
  },
  {
    id:uuid(),
    src:"QpxWE_a9tnA",
    title:"The World is F*cked - Abhijit Chavda Geopolitics Update ",
    creator:"BeerBiceps",
    description:"Today BeerBiceps is the home for The Ranveer Show or TRS - India's smartest podcast. A show where we host the country's greatest success stories and try digging out their secrets to success. "

  },
  {
    id:uuid(),
    src:"oZH70U5t55M",
    title:"Real TRUTH Behind Mahabharata, Ramayana & Spaceships ft. Dr. Vineet",
    creator:"BeerBiceps",
    description:"Today BeerBiceps is the home for The Ranveer Show or TRS - India's smartest podcast. A show where we host the country's greatest success stories and try digging out their secrets to success. "

  }
];
