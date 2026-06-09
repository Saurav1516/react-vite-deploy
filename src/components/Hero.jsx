import "../styles/hero.css";

/* video */
import v1 from "../assets/videos/wmt-showreel.mp4";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="film-wrapper">
        {/* Video */}
        <div className="video-row">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src={v1}
          ></video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
