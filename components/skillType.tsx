import {motion, useInView} from "framer-motion";
import {useRef} from "react";

type SkillTypeProps = {
  title: string;
  skills: string[];
  delay: number;
}

export default function SkillType({title, skills, delay}: SkillTypeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className={"w-full flex"} ref={ref}>
      <motion.h2 className={"text-xl w-2/12"}
        initial={{opacity: 0}}
        animate={isInView ? {opacity: 1} : {opacity: 0}}
        transition={{duration: 0.5, delay: isInView ? delay : 0}}
      >
        {title}
      </motion.h2>
      <div className="flex gap-8 w-10/12">
        {skills.map((el, i) => (
          <motion.span
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.5, delay: isInView ? (i / 10 + delay) : 0}}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </div>
    </div>
  );
}