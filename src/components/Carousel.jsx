import "../styles/hero.css";
import Particles from "./Particles";
import HoverButton from "./HoverButton";
import HeroBadge from "./HeroBadge";
import SplitTextAnimate from "../components/SplitTextAnimate";

/* videos */

import v1 from "../assets/videos/LQ/hero-v-2L.mp4";
import v2 from "../assets/videos/LQ/hero-v-3L.mp4";
import v3 from "../assets/videos/LQ/hero-v-4L.mp4";
import v4 from "../assets/videos/LQ/hero-v-5L.mp4";

/* film strip */

import filmStrip from "../assets/images/film-strip.png";

function Carousel() {
  return (
    <section className="hero">
      <Particles />

      <div className="hero-content">
        <HeroBadge />

        <p className="subtitle">not just a</p>

        <h1 className="hero-title">
          <SplitTextAnimate text="Film Production Studio" />
        </h1>

        {/* FILM STRIP SECTION */}

        <div className="film-wrapper">
          <div
            className="film-strip top"
            style={{ backgroundImage: `url(${filmStrip})` }}
          ></div>

          <div className="video-row">
            <div className="video-track">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v1}
              ></video>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v2}
              ></video>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v3}
              ></video>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v4}
              ></video>

              {/* duplicate for smooth loop */}

              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v1}
              ></video>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v2}
              ></video>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v3}
              ></video>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src={v4}
              ></video>
            </div>
          </div>

          <div
            className="film-strip bottom"
            style={{ backgroundImage: `url(${filmStrip})` }}
          ></div>
        </div>

        <p className="hero-text">
          Crafting cinematic stories, commercials and films that leave a lasting
          impact.
        </p>

        <HoverButton className="hero-btn">View our work</HoverButton>
      </div>
    </section>
  );
}

export default Carousel;
