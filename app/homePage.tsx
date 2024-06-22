import {motion, useInView} from "framer-motion";
import {AnimatedText} from "@/components/animatedText";
import {useRef} from "react";

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className={"min-h-screen w-full flex flex-col justify-center items-center gap-4"} id={'home'} ref={ref}>
      <AnimatedText text={"Aayush Bharadwaj"} el={"h1"} className={"text-7xl text-app-light-red [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]"}/>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: isInView ? 1 : 0, y: isInView ? 20 :0}}
        transition={{duration: 0.5, delay: 1}}
      >
        <h2 className={"text-6xl text-app-red [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]"}>Software Engineer</h2>
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: isInView ? 1 : 0, y: isInView ? 20 :0}}
        transition={{duration: 0.5, delay: 1.5}}
      >
        <p className={"text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"}>Student at University of Wisconsin - Madison</p>
      </motion.div>
    </div>
  );
}