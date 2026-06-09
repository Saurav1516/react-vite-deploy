import { useEffect, useRef } from "react";

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1 + 0.2,
        length: Math.random() * 20,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
      ctx.lineWidth = 1;

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y + p.length);
        ctx.stroke();

        p.x += p.speed;
        p.y += p.speed;

        if (p.x > canvas.width || p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = 0;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas id="particles" ref={canvasRef}></canvas>;
}

export default Particles;
