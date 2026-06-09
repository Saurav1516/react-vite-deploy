import "../styles/about.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextAnimate from "../components/SplitTextAnimate";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Select ALL paragraphs inside about-content
    const paragraphs = container.querySelectorAll("p");

    let allWords = [];

    paragraphs.forEach((p) => {
      const words = p.innerText.split(" ");

      p.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      allWords = [...allWords, ...p.querySelectorAll(".word")];
    });

    // 🔥 ONE CONTINUOUS ANIMATION
    gsap.fromTo(
      allWords,
      {
        color: "#555",
      },
      {
        color: "#fff",
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true, // 🔥 smooth continuous scroll
        },
      },
    );
  }, []);

  return (
    <section id="about" className="wmt-about">
      <div className="about-wrapper">
        <h2 className="outline-heading outline-black">
          <SplitTextAnimate text="About" />
        </h2>
        <p className="mb-5 text-white">
          <SplitTextAnimate text="I don’t just edit videos, I craft experiences" />
        </p>

        {/*  IMPORTANT: wrap with ref */}
        <div className="about-content" ref={containerRef}>
          <p>
            Creative and detail-oriented Video Editor with hands-on experience
            in crafting engaging content for reels, promotional videos, and
            cinematic edits. Skilled in storytelling, pacing, and visual
            aesthetics, with a strong ability to transform raw footage into
            impactful and visually compelling narratives.
          </p>

          <p>
            Proficient in Adobe Premiere Pro and After Effects, with a deep
            understanding of motion, rhythm, and audience retention. Adept at
            creating dynamic edits, seamless transitions, and emotionally driven
            content that resonates with viewers.
          </p>

          <p>
            Passionate about pushing creative boundaries and continuously
            exploring new editing styles, trends, and techniques to deliver
            high-quality content that not only captures attention but also
            leaves a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
