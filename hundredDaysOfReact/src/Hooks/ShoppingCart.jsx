import React, { useState } from "react";

const ShoppingCart = () => {
  const [products] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="m-10">
      <h1 className="font-bold text-xl">Products</h1>
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li key={product.id} className="flex gap-4">
            {product.name} - ${product.price}
            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-lg mt-10">Shopping Cart</h2>

      <ul className="flex flex-col gap-4">
        {cart.map((item) => (
          <li key={item.id} className="flex flex-col gap-4">
            {item.name} - Quantity: {item.quantity} - Total $
            {item.price * item.quantity}
          </li>
        ))}
      </ul>

      <p>Total : ${total}</p>

      <button className="btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
