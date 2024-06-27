import {motion, useInView} from "framer-motion";
import {useRef} from "react";

type WorkTypeProps = {
  company: string;
  role: string;
  time: string;
  description: string;
  img: string;
}

export default function WorkType({company, role, time, description, img}: WorkTypeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const spring = {
    type: "spring",
    stiffness: 50,  // Lower stiffness for slower animation
    damping: 20,    // Higher damping to reduce oscillation
    mass: 1,        // Default mass
    duration: 1.5     // You can specify the duration directly if needed
  };

  return (
    <motion.div className={`w-full flex justify-around`} ref={ref} layout>
      <motion.div
        className={"hidden md:flex justify-center items-center bg-white rounded-lg md:rounded-xl w-[16rem] h-48 md:h-40 shadow-md"}
        initial={{opacity: 0, x: 400}}
        animate={{opacity: isInView ? 1 : 0, x: isInView ? 0 : 400}}
        layout transition={spring}
      >
        <div className={"flex justify-center items-center h-full"}>
          <img src={img} alt={"Barclays Logo"} className="max-w-[90%] max-h-[95%] object-contain"/>
        </div>
      </motion.div>
      <motion.div
        className={"flex flex-col text-white bg-app-gray py-1 md:px-3 px-1 rounded-lg md:rounded-xl w-[45rem] h-56 md:h-40 shadow-md"}
        initial={{opacity: 0, scaleX: 0}}
        animate={{opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0}}
        layout transition={spring}
      >
        <div className={"hidden md:flex w-full gap-2 text-lg text-red-200"}>
          {[role, "|", time].map((el, i) => (
            <motion.span
              initial={{opacity: 0}}
              animate={isInView ? {opacity: 1} : {opacity: 0}}
              transition={{duration: 0.5, delay: isInView ? (i / 3 + 1.2) : 0}}
              key={i}
            >
              <h2>{el}</h2>
            </motion.span>
          ))}
        </div>
        <div className={"md:hidden flex flex-col text-sm md:text-lg text-red-200"}>
          <motion.span
            className={`text-base`}
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.5, delay: isInView ? 1 : 0}}
          >
            {company}
          </motion.span>
          {[role, time].map((el, i) => (
            <motion.span
              initial={{opacity: 0}}
              animate={isInView ? {opacity: 1} : {opacity: 0}}
              transition={{duration: 0.5, delay: isInView ? (i / 3 + 1.2) : 0}}
              key={i}
            >
              <h2>{el}</h2>
            </motion.span>
          ))}
        </div>
        <motion.p
          className={"md:leading-5 md:text-justify text-xs md:text-base"}
          initial={{opacity: 0}}
          animate={isInView ? {opacity: 1} : {opacity: 0}}
          transition={{duration: 1, delay: isInView ? 2.2 : 0}}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>

  );
}