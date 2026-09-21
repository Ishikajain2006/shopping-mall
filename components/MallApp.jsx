"use client";

import { useEffect, useState } from "react";
import MallViewer from "./MallViewer";

export default function MallApp() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch(() => setProducts([]));
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const visibleProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  async function submitForm(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus(data.message);
      if (data.success) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Could not connect to the server.");
    }
  }

  return (
    <main>
      <header className="navbar">
        <div className="brand">MALL<span>3D</span></div>
        <nav>
          <a href="#home">Home</a>
          <a href="#stores">Stores</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Interactive Shopping Experience</p>
          <h1>Explore Your <span>3D Shopping Mall</span></h1>
          <p>
            Explore stores, discover floors and interact with the mall model
            directly in your browser.
          </p>
          <a className="button" href="#stores">Explore Stores</a>
        </div>

        <MallViewer />
      </section>

      <section id="stores" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Mall Directory</p>
            <h2>Find a Store</h2>
          </div>
          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? "filter active" : "filter"}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="cards">
          {visibleProducts.map((product) => (
            <article className="card" key={product.id}>
              <div className="card-icon">⌂</div>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <small>{product.floor} · {product.price}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Have a question?</h2>
          <p>Send us a message. Your form is handled by the Next.js backend and stored in MongoDB.</p>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button className="button" type="submit">Send Message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </section>

      <footer>
        <p>
          A shopping mall project by <strong>Ishika Jain</strong> and <strong>Kanika Bansal</strong>.
        </p>
      </footer>
    </main>
  );
}
