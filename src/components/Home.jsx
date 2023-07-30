import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const handlerCart = (option) => {
    dispatch({ type: "addTocart", playload: option });
    dispatch({ type: "calculatePrices" });
    toast.success("Add to cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          id={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          handler={handlerCart}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ id, imgSrc, name, price, handler }) => (
  <div className="productContainer">
    <img src={imgSrc} alt="" />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({ id, name, imgSrc, quantity: 1, price })}>
      Add to cart
    </button>
  </div>
);

export default Home;
