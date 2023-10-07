import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://img.freepik.com/free-photo/white-reusable-water-bottle_53876-145536.jpg?w=2000&t=st=1696689324~exp=1696689924~hmac=c2b0095865be8d5b5bdd50577f90584bd4fe014f85cf71065ee4a336c097976e";
const img2 =
  "https://img.freepik.com/free-photo/old-camera-captures-natures-sunset-adventure-scene-generated-by-ai_188544-14048.jpg?t=st=1696689405~exp=1696693005~hmac=82e02fb4d2a6bf87ac0cb2c4c16d7b1845c6f7193b6fd5ce9d4febd9b1f10b78&w=2000";

const img4 = "https://img.freepik.com/free-photo/woven-wicker-picnic-basket-with-leather-handle-generated-by-ai_188544-13767.jpg?t=st=1696689590~exp=1696693190~hmac=1b941cec394e027931b6aa133b0dd0c03a78dd51577f13ee3eccc1935cf6390a&w=2000";
const img3 = "https://img.freepik.com/free-photo/group-light-bulbs-with-word-oil-bottom_1340-24064.jpg?t=st=1696689482~exp=1696693082~hmac=f981b5045ceee9b4c2b7592f8f56d99a64be18373519f42846392a0798434a11&w=2000";
const img5 = "https://img.freepik.com/free-photo/wet-green-leaf-dropped-selective-focus-foreground-generated-by-ai_188544-13746.jpg?t=st=1696689671~exp=1696693271~hmac=1a457328d386ddda37be019adbfebbacfcf2b5dc6453b69748e2466048dec54b&w=2000";
const img6 = "https://img.freepik.com/free-photo/close-up-organic-soap_23-2150533352.jpg?t=st=1696689719~exp=1696693319~hmac=4023c15b4fb1f7798ea19dc584079985f5e6912aaecfb7565cbe1121fc4dbb9d&w=2000";

const Shop = () => {
      const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjfaabhsjdfdfv",
    },
    {
      name: "Solar-Powered Chargers",
      price: 490,
      imgSrc: img2,
      id: "sdjffabhsjdfdfv",
    },
    {
      name: "LED Light Bulbs",
      price: 12000,
      imgSrc: img3,
      id: "asdhajsdbdfdfv",
    },
    {
      name: "Bamboo ToothBrush",
      price: 490,
      imgSrc: img5,
      id: "sdjfdlaajsdbhjaddfdfv",
    },
    {
      name: "Bamboo Basket"  ,
      price: 12000,
      imgSrc: img4,
      id: "asdhajsdbhjfdfv",
    },
    {
      name: "Eco-Friendly Soap",
      price: 490,
      imgSrc: img2,
      id: "laajsdbhjdfabhsjdfdfv",
    },
    
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return(

    <>

  <div className="products">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
      </div>
</>
  );
}
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className="product-Card">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Shop;