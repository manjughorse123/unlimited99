import React from "react";
import Header from "./Header";
import CartIcon from "../UI/CartIcon";
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {

    return (
        <button className ={classes.button}>
            <span className ={classes.icon}>
                <CartIcon /> 
            </span>
            <span> Your Cart</span>
            <span className ={classes.badge}>
                4
            </span>
        </button>
    );
}export default HeaderCartButton;