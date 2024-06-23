import React, { useState, useEffect } from "react"
import {motion, useMotionValue, useSpring} from "framer-motion"

export default function CustomCursor() {
  const mainCursorX = useMotionValue(-100);
  const mainCursorY = useMotionValue(-100);
  const mainSpringConfig = { damping: 40, stiffness: 800 };
  const mainCursorXSpring = useSpring(mainCursorX, mainSpringConfig);
  const mainCursorYSpring = useSpring(mainCursorY, mainSpringConfig);

  const secondCursorX = useMotionValue(-100);
  const secondCursorY = useMotionValue(-100);
  const secondSpringConfig = { damping: 30, stiffness: 350 };
  const secondCursorXSpring = useSpring(secondCursorX, secondSpringConfig);
  const secondCursorYSpring = useSpring(secondCursorY, secondSpringConfig);

  const thirdCursorX = useMotionValue(-100);
  const thirdCursorY = useMotionValue(-100);
  const thirdSpringConfig = { damping: 30, stiffness: 250 };
  const thirdCursorXSpring = useSpring(thirdCursorX, thirdSpringConfig);
  const thirdCursorYSpring = useSpring(thirdCursorY, thirdSpringConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      mainCursorX.set(e.clientX - 8);
      mainCursorY.set(e.clientY - 8);
      secondCursorX.set(e.clientX - 6);
      secondCursorY.set(e.clientY - 6);
      thirdCursorX.set(e.clientX - 4);
      thirdCursorY.set(e.clientY - 4);
    };
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);
    window.addEventListener('mousemove', moveCursor);
    const clickableElements = document.querySelectorAll("a, button, .clickable");
    clickableElements.forEach(el => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clickableElements.forEach(el => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    }
  });

  return (
    <motion.div
      className={"hidden md:block"}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 1.5, ease: "easeInOut"}}
    >
      <motion.div
        className={`fixed left-0 top-0 w-4 h-4 z-40 bg-stone-600 ${isHovering ? "rounded-full" : "rounded"} opacity-80`}
        style={{
          translateX: mainCursorXSpring,
          translateY: mainCursorYSpring,
          pointerEvents: "none",
        }}
      />
      <motion.div
        className={`fixed left-0 top-0 w-3 h-3 z-50 bg-app-red ${isHovering ? "rounded-full scale-50" : "rounded"} opacity-80`}
        style={{
          translateX: secondCursorXSpring,
          translateY: secondCursorYSpring,
          pointerEvents: "none",
        }}
      />
      <motion.div
        className={`fixed left-0 top-0 w-2 h-2 z-30 bg-app-light-red ${isHovering ? "rounded-full" : "rounded"} opacity-80`}
        style={{
          translateX: thirdCursorXSpring,
          translateY: thirdCursorYSpring,
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}