import { useAppSelector } from '@/store/hooks';

export default function ProductGrid() {
  const { items, loading } = useAppSelector((state) => state.products);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 space-y-8">
      {/* Hero Banner */}
      <section className="relative bg-cover bg-center h-64 rounded-lg shadow-lg" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-40 h-full flex flex-col justify-center items-center text-white text-center rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Transform Your Space</h2>
          <p className="text-lg">Discover modern interior décor for every style.</p>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Furniture', 'Lighting', 'Wall Art', 'Textiles', 'Accessories'].map((category) => (
            <div
              key={category}
              className="bg-gray-100 p-6 rounded shadow hover:bg-gray-200 cursor-pointer text-center"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-primary font-bold">${product.price}</p>
              <button className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-2">Join Our Décor Community</h3>
        <p className="mb-4">Get exclusive offers, tips, and inspiration directly to your inbox.</p>
        <button className="bg-primary px-6 py-2 rounded hover:bg-opacity-90">
          Subscribe Now
        </button>
      </section>
    </div>
  );
}
