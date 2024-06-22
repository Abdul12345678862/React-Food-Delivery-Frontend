import React, { useContext} from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContext";



const Fooditem = ({ id, name, price, description, image }) => {
  
  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {!cartItems[id]
        ? <img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" className="add" />
        : <div className="food-item-counter">
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">
          {description}
          <p className="food-item-price">Rs.{price}</p>
        </p>
      </div>
    </div>
  );
};

export default Fooditem;