import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SplitTextAnimate({ text, className = "" }) {
  const textRef = useRef();

  useEffect(() => {
    const el = textRef.current;

    const content = text
      .split("")
      .map((char) => {
        if (char === " ") {
          return `<span class="split-char">&nbsp;</span>`;
        }
        return `<span class="split-char">${char}</span>`;
      })
      .join("");

    el.innerHTML = content;

    const chars = el.querySelectorAll(".split-char");

    gsap.from(chars, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.04,

      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [text]);

  return (
    <span ref={textRef} className={className}>
      {text}{" "}
    </span>
  );
}

export default SplitTextAnimate;
