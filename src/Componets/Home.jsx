import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Reviews from "./Reviews";
import Certifications from "./Certifications";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://img.freepik.com/free-photo/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative_123827-23442.jpg?w=2000&t=st=1696661479~exp=1696662079~hmac=7cc37ebc72a1758296a3a04ce9c674487cf091880a2904dfb335fb5d9423270b";

const Home = () => {  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjfaabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjffabhsjdfdfv",
    },
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjaddfdfv",
    },
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjfdfv",
    },
    {
      name: "Black Shoes",
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
  return (
    <>
    <div className="hero">
    <img className="hero-img" src="https://img.freepik.com/free-photo/nature-landscape-with-hand-holding-frame_23-2149389972.jpg?w=2000&t=st=1696662991~exp=1696663591~hmac=b28451b03cbb40de1af3343f90d088ac87115ee38e243a7be485c703f9e82d3f"/>
    <div>
    <h2>Shop Sustainable, Live Responsibly.</h2>
    </div>
    </div>

    <Certifications/>
<div className="Home">
    <div className="home">
      <h3>Our Featured Products</h3>
       </div>
       <div>
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
   
</div>

    <Reviews/>
    

    </>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;