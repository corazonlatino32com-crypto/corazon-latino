import { products } from "../data/products";

export default function Shop() {
  return (
    <div>
      <h1>Caribeña — Belleza y raíces</h1>

      {products.map((p) => (
        <div key={p.id}>
          <img src={p.image} width="150" />
          <h2>{p.name}</h2>
          <p>${p.price}</p>

          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}
