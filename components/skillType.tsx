import {motion, useInView} from "framer-motion";
import {useRef} from "react";

type SkillTypeProps = {
  title: string;
  skills: string[];
  n: number;
}

export default function SkillType({title, skills, n}: SkillTypeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const colors = ["bg-app-light-red bg-opacity-20 text-app-red border border-app-red border-opacity-50",
    "bg-app-blue bg-opacity-15 text-app-blue border-app-blue border border-opacity-50",
    "bg-app-yellow bg-opacity-30 text-[#6C480F] border border-[#6C480F] border-opacity-50",];

  return (
    <div className={"w-full flex justify-center items-center"} ref={ref}>
      <motion.h2 className={"text-sm md:text-xl w-32 md:w-48"}
        initial={{opacity: 0}}
        animate={isInView ? {opacity: 1} : {opacity: 0}}
        transition={{duration: 0.5, delay: 1}}
      >
        {title}
      </motion.h2>
      <div className="flex flex-wrap gap-1 md:gap-4 w-10/12">
        {skills.map((el, i) => (
          <motion.span
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.5, delay: isInView ? 1.2 + (i / 6) : 0}}
            key={i}
          >
            <div className={`text-xs md:text-sm px-1 md:px-2 py-1 ${colors[n]} rounded-xl`}>{el}</div>
          </motion.span>
        ))}
      </div>
    </div>
  );
}