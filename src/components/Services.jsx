import "../styles/services.css";
import SplitTextAnimate from "../components/SplitTextAnimate";
import bgImage from "../assets/images/showlight.avif";

const services = [
  {
    label: "Service 01",
    title: "Corporate Films",
    desc: "We craft cinematic corporate films that communicate your brand story and company vision with engaging storytelling.",
    stats: ["Brand Story", "Company Profile", "Leadership Videos"],
  },
  {
    label: "Service 02",
    title: "Advertising Films",
    desc: "Creative advertising films designed to capture attention and elevate brand recognition.",
    stats: ["TV Commercials", "Digital Ads", "Campaign Production"],
  },
  {
    label: "Service 03",
    title: "Brand Films",
    desc: "Cinematic storytelling that showcases your brand identity and connects emotionally with audiences.",
    stats: ["Brand Identity", "Narrative Films", "Creative Direction"],
  },
  {
    label: "Service 04",
    title: "Digital Content",
    desc: "High-impact digital content optimized for social media and modern video platforms.",
    stats: ["YouTube Content", "Social Media", "Short Films"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container">
        <h2 className="outline-heading outline-black">
          <SplitTextAnimate text="Services" />
        </h2>

        <p className="mb-5">
          <SplitTextAnimate text="Creative solutions through film and storytelling." />
        </p>

        <div className="services-wrapper">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-label">{service.label}</span>

              <div className="service-content">
                <div className="service-left">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>

                <div className="service-right">
                  <div className="service-tags">
                    {service.stats.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>

                  <div className="service-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
