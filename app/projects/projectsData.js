import { CheckSquare, Gamepad2, CircleDollarSign, Code2, Link} from "lucide-react";


export const projects = [
    {
  title: "BitLinks",
  category: "Full Stack Application",
  description:
    "A full-stack URL shortening application that allows users to create, manage and share shortened links through a responsive and user-friendly interface.",
  features: [
    "Create and shorten long URLs",
    "Manage generated short links",
    "Copy shortened links easily",
    "Redirect users to original URLs",
    "Backend API integration",
    "Responsive and modern UI",
  ],
  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  icon: <Link size={32} />,
  color: "blue",
  github: "https://github.com/ArafatAli-07",
  live: "https://bitlinks-seven-alpha.vercel.app/shorten",
  featured: true,
},


  {
    title: "Task Buddy",
    category: "Frontend Application",
    description:
      "A responsive todo management application where users can create, edit, delete and complete tasks. Todo data is persisted using browser localStorage.",
    features: [
      "Create, edit and delete todos",
      "Mark tasks as completed",
      "Persistent localStorage data",
      "Responsive Tailwind UI",
      "Toast notifications",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "LocalStorage",
    ],
    icon: <CheckSquare size={32} />,
    color: "green",
    github: "https://github.com/ArafatAli-07/Task-Buddy",
    live: "https://task-buddy-green.vercel.app/",
    featured: false,
  },
  {
    title: "Tic Tac Toe",
    category: "JavaScript Game",
    description:
      "An interactive two-player Tic Tac Toe game built with HTML, CSS and JavaScript. The application detects winners, handles draws and allows players to reset the game.",
    features: [
      "Player X vs Player O",
      "Automatic winner detection",
      "Draw detection",
      "Reset functionality",
      "Responsive interface",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    icon: <Gamepad2 size={32} />,
    color: "blue",
    github: "https://github.com/ArafatAli-07/TicTacToe",
    live: null,
    featured: false,
  },
  {
    title: "Rock Paper Scissors",
    category: "JavaScript Game",
    description:
      "A browser-based Rock Paper Scissors game where the user competes against the computer. The computer generates random moves and the scoreboard updates after every round.",
    features: [
      "User vs Computer",
      "Random computer moves",
      "Live score tracking",
      "Instant result display",
      "Reset functionality",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    icon: <Code2 size={32} />,
    color: "purple",
    github: "https://github.com/ArafatAli-07/Rock-Paper-Scissors",
    live: null,
    featured: false,
  },
  {
    title: "Currency Converter",
    category: "Web Application",
    description:
      "A simple currency conversion web application built with HTML, CSS and JavaScript for converting values between different currencies.",
    features: [
      "Currency conversion",
      "Simple user interface",
      "JavaScript-based functionality",
      "Responsive layout",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    icon: <CircleDollarSign size={32} />,
    color: "yellow",
    github: "https://github.com/ArafatAli-07/CurrencyConverter",
    live: null,
    featured: false,
  },
];