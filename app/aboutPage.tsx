import PageHeader from "@/components/pageHeader"
import {motion, useInView} from "framer-motion";
import Image from "next/image";
import {useRef} from "react";
import SkillType from "@/components/skillType";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const languages = ["Java", "C#", "C/C++", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS", "R"];
  const frameworks = ["React", "Angular", "Next.js", "Node.js", "Spring", "Django", ".NET", "Bootstrap", "TailwindCSS"];
  const databases = ["MySQL", "PostgreSQL", "MongoDB", "SQLite"];

  return (
    <div className={"min-h-screen w-full flex flex-col items-center pt-12"} id={'about'}>
      <PageHeader title={"About"}/>
      <div className={"w-full flex justify-around gap-10 mb-8"} ref={ref}>
        <div className={"flex w-1/3"}>
          <motion.div
            variants={{hidden: {opacity: 0}, visible: {opacity: 1, y: 0, transition: {duration: 0.75}}}}
            initial="hidden"
            animate={isInView ? `visible` : `hidden`}>
            <Image src={"/aayushPicture.jpg"} alt={"aayushPicture"} width={400} height={400} className={"drop-shadow-md"}/>
          </motion.div>
        </div>
        <div className={"flex flex-col gap-4 w-2/3"}>
          <motion.p
            variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0, transition: {duration: 0.75}}}}
            initial="hidden"
            animate={isInView ? `visible` : `hidden`}>
            Hi, I&apos;m Aayush. I am a senior at the University of Wisconsin - Madison studying Computer Science, Data
            Science, and Economics. My academic and career interests have been fueled by a deep interest in technology
            and its potential to solve real-world problems.
          </motion.p>
          <motion.p
            variants={{
              hidden: {opacity: 0, y: 20},
              visible: {opacity: 1, y: 0, transition: {duration: 0.75, delay: isInView ? 0.7 : 0}}
            }}
            initial="hidden"
            animate={isInView ? `visible` : `hidden`}>
            Through my coursework, work experience, and personal projects, I have developed a strong foundation in
            software engineering, thriving on challenges and enjoying tackling complex problems. I am always looking for
            opportunities to learn and grow, and I am excited to see where my career takes me.
          </motion.p>
          <motion.p
            variants={{
              hidden: {opacity: 0, y: 20},
              visible: {opacity: 1, y: 0, transition: {duration: 0.75, delay: isInView ? 1.4 : 0}}
            }}
            initial="hidden"
            animate={isInView ? `visible` : `hidden`}>
            I am particularly interested in AI, and its practical applications in the real world. My passion for AI has
            driven me to learn about machine learning algorithms, neural networks, and natural language processing. I am
            excited to see how AI will continue to transform industries and improve people&apos;s lives.
          </motion.p>
        </div>
      </div>
      <div className={"flex flex-col gap-4"}>
        <SkillType title={"Languages"} skills={languages} delay={1}/>
        <SkillType title={"Frameworks"} skills={frameworks} delay={1.5}/>
        <SkillType title={"Databases"} skills={databases} delay={2}/>
      </div>

    </div>
  );
}