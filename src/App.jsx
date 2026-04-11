import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Corazón Linen Tee",
    price: 39,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    desc: "Premium cotton, minimal luxury."
  },
  {
    id: 2,
    name: "Latino Soul Tee",
    price: 45,
    image: "https://images.unsplash.com/photo-1520975958225-35b3b1c9f7d6",
    desc: "Soft fit, street elegance."
  },
  {
    id: 3,
    name: "Warm Heritage Tee",
    price: 42,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    desc: "Inspired by roots & identity."
  }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: "Arial", background: "#faf7f2", minHeight: "100vh" }}>

      <header style={{ display: "flex", justifyContent: "space-between", padding: 20, borderBottom: "1px solid #ddd" }}>
        <h1>Corazón Latino</h1>
        <div>🛒 {cart.length} | €{total}</div>
      </header>

      <section style={{ textAlign: "center", padding: 60 }}>
        <h2 style={{ fontSize: 40 }}>Luxury Latin Identity</h2>
        <p>Minimal fashion inspired by roots & culture</p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, padding: 40 }}>
        {products.map((p) => (
          <div key={p.id} style={{ background: "white", padding: 15, borderRadius: 12 }}>
            <img src={p.image} style={{ width: "100%", borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <p><b>€{p.price}</b></p>
            <button
              onClick={() => addToCart(p)}
              style={{ padding: 10, background: "black", color: "white", width: "100%" }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </section>

    </div>
  );
}
