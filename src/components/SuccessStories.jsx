import "../styles/success-stories.css";
import SplitTextAnimate from "../components/SplitTextAnimate";

const stories = [
  {
    text: "Working with WMT Films was an incredible experience for our brand. Their team understood our vision from the very beginning and transformed it into a powerful visual story. The production quality and cinematic storytelling elevated our campaign and helped us reach a wider audience across digital platforms.",
    name: "Rahul Mehta",
    img: "https://i.pravatar.cc/80?img=1",
  },
  {
    text: "Our collaboration with WMT Films exceeded expectations. From concept development to final editing, their team handled everything with professionalism and creativity. The film captured our brand story beautifully and became one of the most engaging pieces of content we have ever released.",
    name: "Ananya Sharma",
    img: "https://i.pravatar.cc/80?img=2",
  },
  {
    text: "What impressed us most about WMT Films was their storytelling approach. They didn't just create a video — they built a narrative that truly represented our brand journey. The visuals, pacing, and editing made the final film feel cinematic and extremely impactful.",
    name: "Karan Verma",
    img: "https://i.pravatar.cc/80?img=3",
  },
  {
    text: "WMT Films helped us present our product story in a completely new way. Their team worked closely with us to understand our audience before starting the production. The final result was a powerful video that increased engagement and strengthened our brand identity.",
    name: "Neha Kapoor",
    img: "https://i.pravatar.cc/80?img=4",
  },
  {
    text: "Choosing WMT Films for our corporate film was the best decision we made. Their creative direction and attention to detail were outstanding. The entire process was smooth and collaborative, and the final video perfectly reflected our company's vision.",
    name: "Arjun Singh",
    img: "https://i.pravatar.cc/80?img=5",
  },
];

export default function SuccessStories() {
  return (
    <section className="stories-section">
      <div className="container">
        <h2 className="outline-heading outline-black">
          <SplitTextAnimate text="Success Stories" />
        </h2>

        <p className="stories-subtitle mb-5">
          <SplitTextAnimate text="Clarity behind the craft of film and storytelling." />
        </p>
      </div>

      <div className="stories-slider">
        <div className="stories-track">
          {/* Original testimonials */}
          {stories.map((story, index) => (
            <div className="story-card" key={index}>
              <p>{story.text}</p>

              <div className="story-user">
                <img src={story.img} alt={story.name} />
                <span>{story.name}</span>
              </div>
            </div>
          ))}

          {/* Duplicate for infinite scroll */}
          {stories.map((story, index) => (
            <div className="story-card" key={"dup-" + index}>
              <p>{story.text}</p>

              <div className="story-user">
                <img src={story.img} alt={story.name} />
                <span>{story.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
