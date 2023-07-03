import React from "react";
import classes from "./Products.module.css";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Products = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const userState = cartCtx.user;
  const NoOfpro = "1";
  const amounts = +NoOfpro;
  const addToCartHandler = () => {
    if(userState){
      console.log("hello");
      cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amounts,
      price: props.price,
      image: props.image,
    });}
    else{
      navigate('/login');
    }
  };

  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{props.title}</p>
        <p className={classes.product__price}>
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes.product__rating}>{props.rating}</div>
      </div>
      <img src={props.image} alt=""></img>
      <button onClick={addToCartHandler}>
        Add to basket
      </button>
    </div>
  );
};
export default Products;
