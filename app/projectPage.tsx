import PageHeader from "@/components/pageHeader";
import {useEffect, useRef, useState} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {motion, useInView} from "framer-motion";
import ProjectType from "@/components/projectType";
import {getTotalPageViews, getTotalUsers} from "@/services/madhousingAnalytics";

export default function ProjectPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [users, setUsers] = useState("");
  const [views, setViews] = useState("");

  useEffect(() => {
    getTotalUsers().then((data) => {
      setUsers(data as string);
    });

    getTotalPageViews().then((data) => {
      setViews(data as string);
    });
  }, []);

  const projects = [
    {
      description: "Madhousing | UW-Madison Dorm Reviews",
      img: "projectThumbnails/madhousingThumbnail.png",
      link: "https://www.madhousing.com/",
      paragraphs: [
        <span key={0}>Madhousing.com was a project initially launched in Spring 2022 by a group of 3 students at UW-Madison, with the goal of helping incoming students to decide which dorm to live at. Since then, Madhousing has accumulated <span className={"text-app-red"}>{users}</span> users and <span className={"text-app-red"}>{views} </span>page views (Google Analytics API).</span>,
        <span key={1}>We were also featured in 3 prominent Madison publications, including <a className={"text-blue-500 underline cursor-none"} href={"https://captimes.com/news/education/uw-madison-students-create-madhousing-dorm-review-website/article_e7e718f8-2eb3-550b-8f00-87a3aaef63e8.html"}>The Cap Times</a>, <a className={"text-blue-500 underline cursor-none"} href={"https://www.dailycardinal.com/article/2023/02/madhousing-helps-make-dorm-selection-easier-for-incoming-students"}>The Daily Cardinal</a>, and <a className={"text-blue-500 underline cursor-none"} href={"https://badgerherald.com/news/2023/02/14/uw-students-create-website-to-review-residence-halls/"}>The Badger Herald</a>, along with being featured by <a className={"text-blue-500 underline cursor-none"} href={"https://uwalumni.com/news/raving-residence-hall-reviews/"}>The UW-Madison Alumni Network</a>.</span>,
        <span key={2}>Originally developed using EJS templating, we refactored and redesigned our entire codebase in April 2024 using Next.js and React with the help of 3 additional team members. Our goal was to create a more dynamic and user-friendly UI and to give us opportunities to scale up our project in the future.</span>
      ]
    },
    {
      description: "Hand Hunch | Wordle-Style Poker Game",
      img: "projectThumbnails/handhunchThumbnail.png",
      github: "https://github.com/landerson02/Hand-Hunch",
      link: "https://hand-hunch.vercel.app/",
      paragraphs: [
        <span key={0}>Hand Hunch is a Wordle-style poker mini game where the goal is to guess the mystery Texas Hold&apos;em Hand based on repeatedly drawn rows of cards which have a corresponding hand strength.</span>,
        <span key={1}>The player first starts with two cards face down (the mystery hand), and is dealt 5 cards face up. The strength of the hand is calculated and shown to the user, where they have to take their first guess. For each card guessed, the card lights up green if it is the correct card, yellow if the number or suite matches, or red if neither match. The user gets 6 total chances to select the correct mystery hand.</span>,
        <span key={2}>Additional features of this app include stat saving, appearance settings, and an encryption based sign-in feature.</span>
      ]
    },
    {
      description: "Yahtzee | Yahtzee Web App",
      img: "projectThumbnails/yahtzeeThumbnail.png",
      github: "https://github.com/aayushb03/yahtzee",
      link: "https://yahtzee-umber.vercel.app/",
      paragraphs: [
        <span key={0}>This web application includes all features of the popular board game, Yahtzee, and supports both local and online multiplayer options. This project was developed by 5 students in 3 2-week Agile sprints, and went through rigorous unit testing and a comprehensive CI/CD Pipeline. Some of the tools that were used include Next.js (React and TypeScript) and SQL for the tech stack, Jest for unit testing, Web Sockets for online mode, and Docker for containerization</span>,
        <span key={1}>Some of the additional features include encryption-based sign-in using NextAuth, an all time leaderboard, and user stats. The game also offers a fully functional optimal AI Player for the local game mode, which was web scraped from <a className={"text-blue-500 underline cursor-none"} href={"https://www-set.win.tue.nl/~wstomv/misc/yahtzee/osyp.php"}>Optimal Solitaire Yahtzee Player</a> using Puppeteer. Each time its the AI&apos;s turn, the Web Scraper class simulates user inputs into the solver and extracts the optimal move.</span>,
      ]
    },
    {
      description: "MadMarket | UW-Madison Student Marketplace",
      img: "projectThumbnails/madmarket.webp",
      github: "https://github.com/landerson02/MadMarket",
      paragraphs: [
        <span key={0}>MadMarket is a project created by 4 students as a part of MadHacks, Wisconsin&apos;s largest hackathon, in Fall 2023. The goal of this application is to allow students at UW-Madison to buy and sell items with other students, without the fear of getting scammed on Facebook Marketplace.</span>,
        <span key={1}> Users can create listings, add items to their cart, and contact the sellers through the app. There are several categories of items buyers can browse, including UW student section tickets, appliances, furniture, subleases, clothing, and technology.</span>,
        <span key={2}>The application was built using Angular, Spring, and PostgresSQL, and was hosted on Google Cloud.</span>
      ]
    },
  ]

  const [[project, direction], setProject] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setProject([project + newDirection, newDirection]);
  };

  return (
    <div className={"w-full flex flex-col justify-center items-center min-h-screen pt-12"} id={'projects'}>
      <PageHeader title={"Personal Projects"}/>
      <motion.div className={"flex justify-center items-center h-[17rem] md:h-[30rem] w-full"}
                  initial={{opacity: 0}}
                  animate={{opacity: isInView ? 1 : 0}}
                  transition={{duration: 1, ease: 'easeInOut'}}
                  ref={ref}>
        <div className={"hidden md:flex justify-center items-center w-12"}>
          <button
            className={"flex justify-center items-center h-12 w-12 rounded-full bg-app-red text-white cursor-none hover:bg-app-light-red hover:scale-110 transition ease-in-out"}
            onClick={() => {
              paginate(-1);
            }}>
            <FaArrowLeft className={"text-xl"}/>
          </button>
        </div>
        <div
          className={"flex flex-col justify-center items-center w-full md:w-[60rem] h-full relative overflow-hidden md:px-8"}>
          <ProjectType project={project} direction={direction} projects={projects} paginate={paginate}/>
          <motion.div className={"md:hidden text-sm pt-2"}
                      initial={{opacity: 1}}
                      animate={{opacity: isInView ? 0 : 1}}
                      transition={{duration: 10, ease: 'easeInOut'}}
          >
            Tap for description, swipe to see more...
          </motion.div>
        </div>

        <div className={"hidden md:flex justify-center items-center w-12"}>
          <button
            className={"flex justify-center items-center h-12 w-12 rounded-full bg-app-red cursor-none text-white hover:bg-app-light-red hover:scale-110 transition ease-in-out"}
            onClick={() => {
              paginate(1);
            }}>
            <FaArrowRight className={"text-xl"}/>
          </button>
        </div>
      </motion.div>
    </div>
  );
}