import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".cfu-section, .cfu-hero, .cfu-strip");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cfu-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".cfu-navbar");
    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cfu-root">
      <header className="cfu-navbar">
        <div className="cfu-logo">
          <span className="cfu-logo-mark">☁︎</span>
          <span className="cfu-logo-text">CloudForUs</span>
        </div>
        <nav className="cfu-nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#approach">How We Work</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="cfu-btn cfu-btn-outline">
          Talk to us
        </a>
      </header>

      <section className="cfu-hero">
        <div className="cfu-hero-content">
          <h1>
            Build, modernize, and run{" "}
            <span className="cfu-highlight">with confidence</span> on AWS.
          </h1>
          <p className="cfu-hero-subtitle">
            CloudForUs helps African startups and enterprises design secure,
            scalable AWS architectures — from first workload to multi-account
            landing zones, data, and AI.
          </p>
          <div className="cfu-hero-actions">
            <a href="#contact" className="cfu-btn cfu-btn-primary">
              Book a strategy session
            </a>
            <a href="#solutions" className="cfu-btn cfu-btn-ghost">
              Explore solutions
            </a>
          </div>

          <div className="cfu-hero-badges">
            <span className="cfu-badge">AWS Partner</span>
            <span className="cfu-badge">Cloud Migration</span>
            <span className="cfu-badge">Cost Optimization</span>
            <span className="cfu-badge">Security & Compliance</span>
          </div>
        </div>
        <div className="cfu-hero-image fade-in">
          <img
            src="/images/hero-cloudforus.jpg"
            alt="Cloud architecture and engineers collaborating"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
