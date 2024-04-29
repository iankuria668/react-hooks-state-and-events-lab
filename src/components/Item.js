import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const toggleCart = () => {
    setInCart(!inCart);
  };
  const className = inCart ? "in-cart" : "";

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {toggleCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
    </li>
  );
}

export default Item;
