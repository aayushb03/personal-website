import {AnimatePresence, motion} from "framer-motion";
import {GrGithub, GrLink} from "react-icons/gr";
import {wrap} from "popmotion";
import {useState} from "react";
import BackArrowSvg from "@/components/backArrowSvg";

type ProjectTypeProps = {
  project: number;
  direction: number;
  projects: {
    description: string;
    paragraphs: JSX.Element[];
    img: string;
    github?: string;
    link?: string;
  }[];
  paginate: (newDirection: number) => void;
}

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

const transition = {
  x: {type: "spring", stiffness: 300, damping: 25},
  opacity: {duration: 0.5}
}

export default function ProjectType({project, direction, projects, paginate}: ProjectTypeProps) {
  const [isToggled, setIsToggled] = useState(false);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const projectIndex = wrap(0, projects.length, project);

  return (
    <AnimatePresence initial={false} custom={direction} mode={"popLayout"}>
      <motion.div className={"w-full h-full relative"} key={project} custom={direction} variants={variants} initial={"enter"}
                  animate={"center"} exit={"exit"} transition={transition} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  onClick={() => {if (!isToggled) setIsToggled(true)}}
      >
        <a>
          <img src={projects[projectIndex].img} alt="Project" className="w-full h-full rounded-xl -z-10 object-cover shadow-md hover:opacity-70 ease-in-out duration-200" draggable="false"/>
        </a>
        <motion.div
          className="text-xs md:text-xl absolute bottom-0 left-0 right-0 bg-stone-800 bg-opacity-90 text-white px-2 md:px-8 py-2 rounded-b-xl z-20 flex justify-between items-center"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.5, duration: 0.5}}
        >
          <div>
            {projects[projectIndex].description}
          </div>
          <div className={"flex gap-6 text-2xl"}>
            {projects[projectIndex].github && <a href={projects[projectIndex].github} className={"hover:text-app-red transition ease-in-out cursor-none duration-200"}><GrGithub/></a>}
            {projects[projectIndex].link && <a href={projects[projectIndex].link} className={"hover:text-app-red transition ease-in-out cursor-none duration-200"}><GrLink/></a>}
          </div>
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-0 w-0 bg-white bg-opacity-95 flex justify-center items-center z-10"
          initial={{ width: isToggled ? '100%': 0, height: isToggled ? '100%' : 0, borderRadius: isToggled ? '12px' : '50%', opacity: isToggled ? 1 : 0}}
          animate={{
            width: isToggled ? '100%' : 0,
            height: isToggled ? '100%' : 0,
            borderRadius: isToggled ? '12px' : '50%',
            opacity: isToggled ? 1 : 0
          }}
          transition={{
            width: { duration: 0.2, ease: 'easeInOut'},
            height: { duration: 0.2, ease: 'easeInOut'},
            borderRadius: { duration: 0.2, ease: 'easeInOut'},
            opacity: { duration: 0.2, ease: 'easeInOut' }
          }}
        >
          <div className={"relative flex flex-col w-full h-full pl-16 pr-8 py-5 pb-12 overflow-y-auto text-xs md:text-lg"}>
            {projects[projectIndex].paragraphs.map((paragraph, i) => (
              <motion.p
                key={i} className={"mb-2 md:mb-4 md:text-justify"}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: isToggled? 1 : 0, y: isToggled ? 0 : 20}}
                transition={{delay: 0.2 * i, duration: 0.5, ease: 'easeInOut'}}
              >
                {paragraph}
              </motion.p>
            ))}
            <button className={"w-8 h-8 flex justify-center items-center absolute top-0 left-0 mt-4 ml-4 rounded-full cursor-none hover:bg-app-red hover:scale-105 ease-in-out duration-200"}
            onClick={() => setIsToggled(false)}>
              <BackArrowSvg isToggled={isToggled} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}