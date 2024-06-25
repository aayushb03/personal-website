import React, { useState, useEffect } from "react"
import {motion, useMotionValue, useSpring} from "framer-motion"

export default function CustomCursor() {
  const CursorX = useMotionValue(-100);
  const CursorY = useMotionValue(-100);
  const SpringConfig = { damping: 50, stiffness: 1000 };
  const CursorXSpring = useSpring(CursorX, SpringConfig);
  const CursorYSpring = useSpring(CursorY, SpringConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      CursorX.set(e.clientX);
      CursorY.set(e.clientY);
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

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div
      className={"hidden md:block"}
    >
      <motion.div
        className={`fixed left-0 top-0 z-50`}
        style={{
          translateX: CursorXSpring,
          translateY: CursorYSpring,
          pointerEvents: "none",
        }}
      >
        {isHovering ?
          <motion.svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
               stroke={"#000"}
               strokeWidth={2}
               initial={hasAnimated ? "visible" : "hidden"}
               animate={"visible"}
          >
            <motion.path fill="#fff" stroke="#000" stroke-width="2" stroke-linejoin="round"
                  d="M10 11V8.99c0-.88.59-1.64 1.44-1.86h.05A1.99 1.99 0 0 1 14 9.05V12v-2c0-.88.6-1.65 1.46-1.87h.05A1.98 1.98 0 0 1 18 10.06V13v-1.94a2 2 0 0 1 1.51-1.94h0A2 2 0 0 1 22 11.06V14c0 .6-.08 1.27-.21 1.97a7.96 7.96 0 0 1-7.55 6.48 54.98 54.98 0 0 1-4.48 0 7.96 7.96 0 0 1-7.55-6.48C2.08 15.27 2 14.59 2 14v-1.49c0-1.11.9-2.01 2.01-2.01h0a2 2 0 0 1 2.01 2.03l-.01.97v-10c0-1.1.9-2 2-2h0a2 2 0 0 1 2 2V11Z"
                         variants={{
                           hidden: {
                             pathLength: 0,
                             fillOpacity: 0,
                           },
                           visible: {
                             pathLength: 1,
                             fillOpacity: 1,
                             transition: {
                               pathLength: { duration: 1, ease: "easeInOut", delay: 1 },
                               fillOpacity: { duration: 0.5, ease: "easeInOut", delay: 2}
                             }
                           }
                         }}/>
          </motion.svg> :
          <motion.svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                      stroke={"#000"}
                      strokeWidth={2}
                      initial={hasAnimated ? "visible" : "hidden"}
                      animate={"visible"}
          >
            <motion.path fill="#fff"
                         d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
                         variants={{
                           hidden: {
                             pathLength: 0,
                             fillOpacity: 0,
                           },
                           visible: {
                             pathLength: 1,
                             fillOpacity: 1,
                             transition: {
                               pathLength: { duration: 1, ease: "easeInOut", delay: 1 },
                               fillOpacity: { duration: 0.5, ease: "easeInOut", delay: 2}
                             }
                           }
                         }}
            />
          </motion.svg>
        }
      </motion.div>
    </div>
  );
}