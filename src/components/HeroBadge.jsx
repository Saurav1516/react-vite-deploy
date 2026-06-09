import "../styles/herobadge.css";
import logo from "../assets/images/wmtfilm-logo.jpeg";

function HeroBadge() {
  return (
    <div className="hero-badge">
      <img src={logo} alt="WMT Films Logo" />

      <span>WMT Films Presents</span>
    </div>
  );
}

export default HeroBadge;
