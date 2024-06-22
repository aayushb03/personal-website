import {motion, useInView} from "framer-motion";
import {AnimatedText} from "@/components/animatedText";
import {useRef} from "react";

type pageHeaderProps = {
  title: string
}

export default function PageHeader({title}: pageHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className={"w-full flex flex-col pb-8 mt-4"}>
      <div className={"flex justify-center"}>
        <AnimatedText text={title} el={"h2"} className={"text-2xl"}/>
      </div>
      <motion.div
        ref={ref}
        className={"bg-app-red w-0 h-1 relative left-1/2 transform -translate-x-1/2 rounded"}
        initial={{width: 2}}
        animate={isInView ? {width: '100%'} : {width: 2}}
        transition={{duration: 1, ease: 'easeInOut'}}
      />
    </div>

  )
    ;
}