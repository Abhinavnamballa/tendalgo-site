import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Animate child elements with delay
            const children = entry.target.querySelectorAll('.vision-card, .market-info, .market-image, .product-card, .team-member, .contact-info, .contact-form');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="landing-bg">
      {/* Header */}
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="logo-container">
          <img src="/logo.png" alt="Tendalgo Logo" className="logo" />
        </div>
        <nav className="nav">
          <a href="#vision">Vision</a>
          <a href="#market">Market</a>
          <a href="#product">Product</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Video Background */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/stock.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="brand-title">Tendalgo</h1>
          <p className="brand-desc">Revolutionizing Gift Packaging with Sustainable Innovation</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">$2.5B</span>
              <span className="stat-label">Market Size</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">85%</span>
              <span className="stat-label">Growth Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Sustainable</span>
            </div>
          </div>
          <button className="shop-now-btn">Shop Now</button>
        </section>

        {/* Vision Section */}
        <section id="vision" className="section" ref={addToRefs}>
          <div className="section-content">
            <h2>Our Vision</h2>
            <p className="section-desc">Transforming the gift packaging industry through sustainable innovation and cutting-edge design. We're creating a future where luxury meets environmental responsibility.</p>
            <div className="vision-cards">
              <div className="vision-card">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3" alt="Sustainability" />
                <h3>Sustainability</h3>
                <p>100% recyclable materials and eco-friendly production processes</p>
              </div>
              <div className="vision-card">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3" alt="Innovation" />
                <h3>Innovation</h3>
                <p>Patented magnetic closure technology and smart packaging solutions</p>
              </div>
              <div className="vision-card">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3" alt="Quality" />
                <h3>Quality</h3>
                <p>Premium materials and meticulous craftsmanship in every product</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Section */}
        <section id="market" className="section dark" ref={addToRefs}>
          <div className="section-content">
            <h2>Market Opportunity</h2>
            <div className="market-grid">
              <div className="market-info">
                <h3>$2.5B Market Size</h3>
                <p>The global gift packaging market is growing at 8.5% CAGR, driven by increasing demand for premium packaging solutions.</p>
                <ul className="market-stats">
                  <li>85% of consumers prefer sustainable packaging</li>
                  <li>70% of purchase decisions influenced by packaging</li>
                  <li>60% willing to pay premium for eco-friendly options</li>
                </ul>
              </div>
              <div className="market-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3" alt="Market Growth" />
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="section" ref={addToRefs}>
          <div className="section-content">
            <h2>Our Product Line</h2>
            <div className="product-showcase">
              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3" alt="Premium Gift Box" />
                <h3>Premium Gift Box</h3>
                <p>Luxury magnetic closure boxes with customizable designs</p>
                <ul>
                  <li>Patented magnetic technology</li>
                  <li>100% recyclable materials</li>
                  <li>Custom branding options</li>
                </ul>
              </div>
              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3" alt="Smart Gift Bag" />
                <h3>Smart Gift Bag</h3>
                <p>Innovative bags with integrated tracking and messaging</p>
                <ul>
                  <li>QR code integration</li>
                  <li>Digital message cards</li>
                  <li>Sustainable materials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section dark" ref={addToRefs}>
          <div className="section-content">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3" alt="CEO" />
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
                <p className="member-bio">15+ years in packaging industry, former VP at Amazon</p>
              </div>
              <div className="team-member">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3" alt="CTO" />
                <h3>Jane Smith</h3>
                <p>CTO</p>
                <p className="member-bio">Ex-Google engineer, 3 patents in smart packaging</p>
              </div>
              <div className="team-member">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3" alt="COO" />
                <h3>Mike Johnson</h3>
                <p>COO</p>
                <p className="member-bio">20+ years in manufacturing, former Tesla executive</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" ref={addToRefs}>
          <div className="section-content">
            <h2>Get in Touch</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Investment Opportunities</h3>
                <p>We're seeking strategic partners to help us revolutionize the gift packaging industry.</p>
                <ul className="contact-details">
                  <li>Email: investors@tendalgo.com</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Location: San Francisco, CA</li>
                </ul>
              </div>
              <div className="contact-form">
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Message"></textarea>
                  <button type="submit" className="primary-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Tendalgo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
