import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Corazón Linen Tee",
    price: 39,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    desc: "Premium cotton, minimal luxury."
  },
  {
    id: 2,
    name: "Latino Soul Tee",
    price: 45,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1520975958225-35b3b1c9f7d6?auto=format&fit=crop&w=800&q=80",
    desc: "Soft fit, street elegance."
  },
  {
    id: 3,
    name: "Warm Heritage Tee",
    price: 42,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    desc: "Inspired by roots & identity."
  },
  {
    id: 4,
    name: "Vela Ritual Tierra",
    price: 25,
    category: "Home",
    image: "https://images.unsplash.com/photo-1602874801006-90c7c4fdaaa3?auto=format&fit=crop&w=800&q=80",
    desc: "Warm relaxing scent"
  },
  {
    id: 5,
    name: "Jabón Artesanal",
    price: 12,
    category: "Home",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=800&q=80",
    desc: "Natural ingredients"
  },
  {
    id: 6,
    name: "Aceite Capilar Rizos",
    price: 18,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1600180758890-6cbbd48f6f3d?auto=format&fit=crop&w=800&q=80",
    desc: "Nutrición profunda para rizos"
  },
  {
    id: 7,
    name: "Crema Facial Natural",
    price: 22,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    desc: "Cuidado natural diario"
  }
];

const categories = ["All", "Apparel", "Home", "Beauty", "Hair"];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div style={{ fontFamily: "Arial", background: "#faf7f2", minHeight: "100vh" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
        borderBottom: "1px solid #ddd",
        flexWrap: "wrap"
      }}>
        <h1>Corazón Latino</h1>
        <div>🛒 {cart.length} | €{total}</div>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: 40 }}>
        <h2 style={{ fontSize: "clamp(28px,5vw,40px)" }}>
          Lifestyle Latin Brand
        </h2>
        <p>Fashion, beauty & identity</p>
      </section>

      {/* CATEGORIES */}
      <section style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: 20
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: "1px solid black",
              background: selected === cat ? "black" : "white",
              color: selected === cat ? "white" : "black",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* PRODUCTS */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
        padding: 20
      }}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={{ background: "white", padding: 15, borderRadius: 12 }}>
            <img src={p.image} style={{ width: "100%", borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <p><b>€{p.price}</b></p>
            <button
              onClick={() => addToCart(p)}
              style={{
                padding: 10,
                background: "black",
                color: "white",
                width: "100%",
                borderRadius: 8
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </section>

      {/* CART + STRIPE */}
      {cart.length > 0 && (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "white",
          borderTop: "1px solid #ddd",
          padding: 10
        }}>
          <h4>Carrito</h4>

          {cart.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{item.name} - €{item.price}</span>
              <button onClick={() => removeItem(i)}>❌</button>
            </div>
          ))}

          <strong>Total: €{total}</strong>

          {/* BOTÓN DE PAGO */}
          <a
            href="https://buy.stripe.com/test_5kQ8wIf6l9V80CV9sh9EI00"
            target="_blank"
            style={{
              display: "block",
              marginTop: 10,
              padding: 12,
              background: "black",
              color: "white",
              textAlign: "center",
              borderRadius: 8,
              textDecoration: "none"
            }}
          >
            Pagar ahora
          </a>
        </div>
      )}

    </div>
  );
}
