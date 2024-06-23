import {motion} from "framer-motion";

type BackArrowSvgProps = {
  isToggled: boolean;
}

export default function BackArrowSvg({isToggled}: BackArrowSvgProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 524 524"
      className="w-full h-full"
      stroke={"black"}
      strokeWidth={20}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: isToggled ? 1 : 0,
          transition: {
            duration: 1,
          }
        }
      }}
      initial={"hidden"}
      animate={"visible"}
    >
      <motion.path
        d="M262 0c72,0 138,29 185,77 48,47 77,113 77,185 0,72 -29,138 -77,185 -47,48 -113,77 -185,77 -72,0 -138,-29 -185,-77 -48,-47 -77,-113 -77,-185 0,-72 29,-138 77,-185 47,-48 113,-77 185,-77zm177 85c-45,-45 -108,-73 -177,-73 -69,0 -132,28 -177,73 -45,45 -73,108 -73,177 0,69 28,132 73,177 45,45 108,73 177,73 69,0 132,-28 177,-73 45,-45 73,-108 73,-177 0,-69 -28,-132 -73,-177z"
        fill="none"
        variants={{
          hidden: {
            pathLength: 0,
          },
          visible: {
            pathLength: isToggled ? 1 : 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            }
          }
        }}
      />
      <motion.path
        d="M208 368c2,3 2,7 0,9 -3,2 -6,2 -9,0l-110 -111c-3,-2 -3,-6 0,-8l110 -111c3,-2 6,-2 9,0 2,2 2,6 0,9l-107 106 107 106z"
        fill="none"
        variants={{
          hidden: {
            pathLength: 0,
          },
          visible: {
            pathLength: isToggled ? 1 : 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            }
          }
        }}
      />
      <motion.path
        d="M93 268c-3,0 -6,-3 -6,-6 0,-3 3,-6 6,-6l338 0c3,0 6,3 6,6 0,3 -3,6 -6,6l-338 0z"
        fill="none"
        variants={{
          hidden: {
            pathLength: 0,
          },
          visible: {
            pathLength: isToggled ? 1 : 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            }
          }
        }}
      />
    </motion.svg>
  );
}