import "../styles/hoverButton.css";

function HoverButton({ children, className = "" }) {
  return (
    <a className={`HOVER ${className}`}>
      <span></span>
      <span>{children}</span>
    </a>
  );
}

export default HoverButton;
