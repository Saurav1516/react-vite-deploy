import "../styles/contact.css";
import SplitTextAnimate from "../components/SplitTextAnimate";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Heading */}

        <h2 className="outline-heading outline-black">
          <SplitTextAnimate text="Contact" />
        </h2>

        <div className="row align-items-center">
          {/* RIGHT CONTENT FIRST */}

          <div className="col-lg-6 order-1 order-lg-1 contact-info-col">
            <div className="contact-info">
              <p>
                Whether you're planning a corporate film, brand story,
                commercial campaign or digital content — our team at WMT Films
                is ready to bring your vision to life.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <p>info@wmtfilms.com</p>
                </div>

                <div>
                  <span>Phone</span>
                  <p>+91 99994 27033</p>
                </div>

                <div>
                  <span>Location</span>
                  <p>Noida, Sector-16A, Film City</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM SECOND */}

          <div className="col-lg-6 order-2 order-lg-2 mx-0 contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" placeholder="Your Name" required />

              <input type="tel" placeholder="Phone Number" required />

              <input type="email" placeholder="Email Address" required />

              <a href="https://wa.me/919999427033" target="_blank">
                <button type="button">Send Message</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
