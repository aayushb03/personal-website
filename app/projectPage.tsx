import PageHeader from "@/components/pageHeader";
import {useRef, useState} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {motion, AnimatePresence, useInView} from "framer-motion";
import {wrap} from "popmotion";
import { GrGithub, GrLink } from "react-icons/gr";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export default function ProjectPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const projects = [
    {
      description: "Madhousing | UW-Madison Dorm Reviews",
      img: "projectThumbnails/madhousingThumbnail.png",
      link: "https://www.madhousing.com/"
    },
    {
      description: "Hand Hunch | Wordle-Style Poker Game",
      img: "projectThumbnails/handhunchThumbnail.png",
      github: "https://github.com/landerson02/Hand-Hunch",
      link: "https://hand-hunch.vercel.app/"
    },
    {
      description: "Yahtzee | Yahtzee Web App",
      img: "projectThumbnails/yahtzeeThumbnail.png",
      github: "https://github.com/aayushb03/yahtzee",
      link: "https://yahtzee-umber.vercel.app/"
    },
    {
      description: "MadMarket | UW-Madison Student Marketplace",
      img: "projectThumbnails/madmarket.webp",
      github: "https://github.com/landerson02/MadMarket",
    },
  ]

  const [[project, direction], setProject] = useState([0, 0]);
  const projectIndex = wrap(0, projects.length, project);
  const paginate = (newDirection: number) => {
    setProject([project + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
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
          <div className={"flex justify-center items-center h-12 w-12 rounded-full bg-app-red text-white cursor-pointer hover:bg-app-light-red hover:scale-110 transition ease-in-out"}
          onClick={() => {
            paginate(-1);
          }}>
            <FaArrowLeft className={"text-xl"}/>
          </div>
        </div>
        <div className={"flex justify-center items-center w-[90%] h-full relative overflow-hidden px-12"}>
          <AnimatePresence initial={false} custom={direction} mode={"popLayout"}>
            <motion.div className={"w-full h-full relative"}
              key={project}
              custom={direction}
              variants={variants}
              initial={"enter"}
              animate={"center"}
              exit={"exit"}
              transition={{
                x: {type: "spring", stiffness: 300, damping: 25},
                opacity: {duration: 0.5}
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <img src={projects[projectIndex].img} alt="Project" className="w-full h-full rounded-xl -z-10 object-cover shadow-md" draggable="false"/>
              {/*<div className={"bg-app-light-red w-full h-full"}></div>*/}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-stone-800 bg-opacity-90 text-white px-8 py-2 text-xl rounded-b-xl z-10 flex justify-between items-center"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5, duration: 0.5}}
              >
                <div>
                  {projects[projectIndex].description}
                </div>
                <div className={"flex gap-6 text-2xl"}>
                  {projects[projectIndex].github && <a href={projects[projectIndex].github} className={"hover:text-app-red transition ease-in-out duration-200"}><GrGithub/></a>}
                  {projects[projectIndex].link && <a href={projects[projectIndex].link} className={"hover:text-app-red transition ease-in-out duration-200"}><GrLink/></a>}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={"flex justify-center items-center w-[5%]"}>
          <div
            className={"flex justify-center items-center h-12 w-12 rounded-full bg-app-red text-white cursor-pointer hover:bg-app-light-red hover:scale-110 transition ease-in-out"}
            onClick={() => {
              paginate(1);
            }}>
            <FaArrowRight className={"text-xl"}/>
          </div>
        </div>
      </motion.div>
    </div>
  );
}