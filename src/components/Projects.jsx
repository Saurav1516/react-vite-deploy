import "../styles/projects.css";
import SplitTextAnimate from "../components/SplitTextAnimate";

const projects = [
  {
    title: "Fue Asia Film",
    video: "https://youtu.be/WM76KcC5AKE?si=7B1-hm6tTVUYvhXW",
  },
  {
    title: "Ogaan Laminates",
    video: "https://youtu.be/NSRWkjHHvMU?si=EGzln0rf0Bc4LbhV",
  },
  {
    title: "Lixil Asia - Corporate",
    video: "https://youtu.be/TlYKkvwQkik?si=UNTOha0n4GJ_9Dm6",
  },
  {
    title: "SMNP ECONNECT",
    video: "https://youtu.be/pvhxsvmUwiI?si=1cUYoyOu8u7eS_A7",
  },
  { title: "HomeStays Travel Show", video: "https://youtu.be/HIQOClXcJrQ" },
  {
    title: "Snapdeal",
    video: "https://youtu.be/HWBy0VBa4EA?si=hB4ZxsfhIsg3Nn5B",
  },
  {
    title: "Indus Food",
    video: "https://youtu.be/KBRIOKC2b28?si=bYWXS2Il9yPzYJUt",
  },
  {
    title: "Kwality",
    video: "https://youtu.be/xHZ2BQl3UpA?si=UGnQ_4dCt7Mm098V",
  },
  {
    title: "CEBS Worldwide",
    video: "https://youtu.be/l4jWdrP5Gdc?si=ba2qjsnOWyJuTR6U",
  },
  {
    title: "India Innovate",
    video: "https://youtu.be/c8wHNh8LKWU?si=yU0FgXTP5wsU1Sxc",
  },
  {
    title: "Beauty Plus Me",
    video: "https://youtu.be/IfPkNIG2sog?si=xKp_S0CaQJ-G-ASk",
  },
  {
    title: "Mohrish Pharmaceuticals",
    video: "https://youtu.be/FInrsf0kBJU?si=-SGgs8FMXWp0buBl",
  },
  {
    title: "Edusky Film",
    video:
      "https://youtu.be/EsqOk6AjJuQ?si=TJmujx_SgxzhKXhbttps://youtu.be/HIQOClXcJrQ",
  },
  {
    title: "AbcTalkies",
    video:
      "https://youtu.be/EsqOk6AjJuQ?si=TJmujx_SgxzhKXhbttps://youtu.be/HIQOClXcJrQ",
  },
];

/* extract youtube thumbnail */
const getThumbnail = (url) => {
  const id = url.split("youtu.be/")[1]?.split("?")[0];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="outline-heading outline-black">
          <SplitTextAnimate text="Projects" />
        </h2>
        <p className="mb-5 text-white">
          <SplitTextAnimate text="Stories we've brought to life." />
        </p>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 project-col">
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-title">{project.title}</div>
                <div className="project-image">
                  <img src={getThumbnail(project.video)} alt={project.title} />
                  <div className="noise"></div>
                  <div className="play-button">▶</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
