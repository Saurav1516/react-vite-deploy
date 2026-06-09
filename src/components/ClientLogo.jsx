import "../styles/client-logo.css";
import SplitTextAnimate from "./SplitTextAnimate";

/* logos */

import abctalkies from "../assets/images/client-logo/abctalkies.png";
import beautyplus from "../assets/images/client-logo/beautyplus.png";
import edusky from "../assets/images/client-logo/edusky.png";
import fueasia from "../assets/images/client-logo/fueasia.png";
import homestays from "../assets/images/client-logo/homestays-travel.png";
import indiaInnovate from "../assets/images/client-logo/india-innovate.png";
import indusFood from "../assets/images/client-logo/indus-food.png";
import kwality from "../assets/images/client-logo/kwality-nonstop.png";
import lixil from "../assets/images/client-logo/Lixil.png";
import mohrish from "../assets/images/client-logo/mohrish.png";
import ogaan from "../assets/images/client-logo/ogaan-laminates.png";
import smnp from "../assets/images/client-logo/SMNP.png";
import snapdeal from "../assets/images/client-logo/snapdeal.png";

function ClientLogo() {
  const logos = [
    abctalkies,
    beautyplus,
    edusky,
    fueasia,
    homestays,
    indiaInnovate,
    indusFood,
    kwality,
    lixil,
    mohrish,
    ogaan,
    smnp,
    snapdeal,
  ];

  return (
    <section className="client-section">
      <div className="container">
        <h2 className="outline-heading outline-black">
          <SplitTextAnimate text="Our Clients" />
        </h2>

        <p className="client-subtext">
          <SplitTextAnimate text="Brands that trusted our creative storytelling." />
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {logos.map((logo, i) => (
            <div className="logo-item" key={i}>
              <img src={logo} alt="logo" />
            </div>
          ))}

          {/* duplicate */}
          {logos.map((logo, i) => (
            <div className="logo-item" key={"dup-" + i}>
              <img src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogo;
