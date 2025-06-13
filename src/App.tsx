import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-bg">
      {/* Header */}
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="logo-container">
          <img src="/logo.png" alt="Tendalgo Logo" className="logo" />
        </div>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#services">Services</a>
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
        <section className="hero">
          <h1 className="brand-title">Tendalgo</h1>
          <p className="brand-desc">Sleek, minimalistic gift boxes and bags for every occasion.</p>
          <button className="primary-btn">Shop Now</button>
        </section>

        <section id="products" className="section">
          <h2>Our Products</h2>
          <p>Discover our premium gift boxes and bags. Our products are designed with elegance and functionality in mind, perfect for any occasion. Whether you're looking for a simple gift box or a more elaborate packaging solution, we have something for everyone. Our gift boxes are made from high-quality materials, ensuring durability and a luxurious feel. Each box is crafted with attention to detail, making it a perfect choice for your gifting needs.</p>
          <ul>
            <li>Matte Black Gift Boxes</li>
            <li>Color Magnetic Gift Bags</li>
            <li>Customizable Packaging Solutions</li>
          </ul>
          <img src="https://via.placeholder.com/150" alt="Product Image" />
        </section>

        <section id="services" className="section">
          <h2>Our Services</h2>
          <p>Custom gift box and bag designs for events and celebrations. Our services are tailored to meet your specific needs, ensuring that your packaging stands out. We offer a range of customization options, from color and material to size and design. Our team of experts is dedicated to providing you with the best possible service, ensuring that your packaging is not only beautiful but also functional. Whether you're planning a corporate event or a personal celebration, we can help you create the perfect packaging solution.</p>
          <ul>
            <li>Event Packaging</li>
            <li>Corporate Gifting</li>
            <li>Personalized Designs</li>
          </ul>
          <img src="https://via.placeholder.com/150" alt="Service Image" />
        </section>

        <section id="about" className="section">
          <h2>About Us</h2>
          <p>We are dedicated to providing high-quality packaging solutions for all your gifting needs. Our mission is to create beautiful, functional, and sustainable packaging that enhances the gifting experience. We believe in the power of thoughtful packaging and strive to make every gift-giving moment special. Our team is passionate about design and innovation, constantly exploring new materials and techniques to improve our products. We are committed to sustainability and environmental responsibility, ensuring that our packaging is eco-friendly and recyclable.</p>
          <ul>
            <li>Quality Materials</li>
            <li>Eco-Friendly Options</li>
            <li>Customer Satisfaction</li>
          </ul>
          <img src="https://via.placeholder.com/150" alt="About Image" />
        </section>

        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>Get in touch with us for custom orders and inquiries. We are here to help you with any questions or requests you may have. Our customer service team is available to assist you with product information, order placement, and any other concerns. We value your feedback and are always looking for ways to improve our products and services. Contact us today to learn more about how we can help you with your packaging needs.</p>
          <ul>
            <li>Email: info@tendalgo.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Gift Street, City, Country</li>
          </ul>
          <img src="https://via.placeholder.com/150" alt="Contact Image" />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Tendalgo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
