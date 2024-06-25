import PageHeader from "@/components/pageHeader";
import {useRef, useState} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {motion, useInView} from "framer-motion";
import ProjectType from "@/components/projectType";
import {getTotalPageViews, getTotalUsers} from "@/services/madhousingAnalytics";

export default function ProjectPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [users, setUsers] = useState("");
  const [views, setViews] = useState("");

  getTotalUsers().then((data) => {
    return setUsers(data as string);
  });

  getTotalPageViews().then((data) => {
    return setViews(data as string);
  });

  const projects = [
    {
      description: "Madhousing | UW-Madison Dorm Reviews",
      img: "projectThumbnails/madhousingThumbnail.png",
      link: "https://www.madhousing.com/",
      paragraphs: [
        `Madhousing has ${users} users and ${views} page views.`,
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      ]
    },
    {
      description: "Hand Hunch | Wordle-Style Poker Game",
      img: "projectThumbnails/handhunchThumbnail.png",
      github: "https://github.com/landerson02/Hand-Hunch",
      link: "https://hand-hunch.vercel.app/",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      ]
    },
    {
      description: "Yahtzee | Yahtzee Web App",
      img: "projectThumbnails/yahtzeeThumbnail.png",
      github: "https://github.com/aayushb03/yahtzee",
      link: "https://yahtzee-umber.vercel.app/",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      ]
    },
    {
      description: "MadMarket | UW-Madison Student Marketplace",
      img: "projectThumbnails/madmarket.webp",
      github: "https://github.com/landerson02/MadMarket",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
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
      <motion.div className={"flex justify-center items-center h-[75%] w-full"}
                  initial={{opacity: 0}}
                  animate={{opacity: isInView ? 1 : 0}}
                  transition={{duration:1, ease: 'easeInOut'}}
                  ref={ref}>
        <div className={"flex justify-center items-center w-[5%]"}>
          <button className={"flex justify-center items-center h-12 w-12 rounded-full bg-app-red text-white cursor-none hover:bg-app-light-red hover:scale-110 transition ease-in-out"}
          onClick={() => {
            paginate(-1);
          }}>
            <FaArrowLeft className={"text-xl"}/>
          </button>
        </div>
        <div className={"flex justify-center items-center w-[90%] h-full relative overflow-hidden px-12"}>
          <ProjectType project={project} direction={direction} projects={projects} paginate={paginate}/>
        </div>

        <div className={"flex justify-center items-center w-[5%]"}>
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