import { motion } from "framer-motion";

type LogoSvgProps = {
  paths: string[];
  link: string;
  delay: number;
}

export default function LogoSvg({ paths, link, delay }: LogoSvgProps) {
  return (
    <a href={link} className={"flex cursor-none justify-center items-center p-1 w-9 h-9 hover:scale-110 hover:bg-app-red rounded-full transition-all duration-200 ease-in-out"}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-full h-full"
        stroke={"white"}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              delay: delay
            }
          }
        }}
        initial={"hidden"}
        animate={"visible"}
      >
        {paths.map((path, i) => (
          <motion.path
            fill="none"
            d={path}
            variants={{
              hidden: {
                pathLength: 0,
              },
              visible: {
                pathLength: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: delay
                }
              }
            }}
            key={i}
          />
        ))}
      </motion.svg>
    </a>

  )
}