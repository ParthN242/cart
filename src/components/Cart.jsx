import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const Cart = () => {
  const { cartItem, subtotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
  ];

  const increment = (id) => {
    dispatch({ type: "addTocart", playload: { id } });
    dispatch({ type: "calculatePrices" });
  };

  const decrement = (id) => {
    dispatch({ type: "decrement", playload: id });
    dispatch({ type: "calculatePrices" });
  };

  const deleteHandler = (id) => {
    dispatch({ type: "deleteFromCart", playload: id });
    dispatch({ type: "calculatePrices" });
  };

  return (
    <div className="cart">
      <main>
        {cartItem.length > 0 ? (
          cartItem.map((i) => (
            <CartItem
              key={i.id}
              id={i.id}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Item Yet</h1>
        )}
      </main>
      <aside>
        <div>
          <h2>Subtotal : ₹{subtotal}</h2>
          <h2>Shipping : ₹{shipping}</h2>
          <h2>Tax : ₹{tax}</h2>
          <h2>Total : ₹{total}</h2>
        </div>
      </aside>
    </div>
  );
};

const CartItem = ({
  id,
  imgSrc,
  name,
  price,
  qty,
  increment,
  decrement,
  deleteHandler,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="" />
    <div className="info">
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
    <div className="btns">
      <button className="decrement" onClick={() => decrement(id)}>
        -
      </button>
      <p>{qty}</p>
      <button className="increment" onClick={() => increment(id)}>
        +
      </button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
