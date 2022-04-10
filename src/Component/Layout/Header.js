import React from 'react';
import mealImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
function Header(props){
    return <React.Fragment>
        <header className = {classes['header']} >
            <h1> Unlimited 99</h1>
            <HeaderCartButton />
        </header>
        <div className ={classes['main-image']}>
            <img  src={mealImage} alt ="a table full of delicious food"/>
        </div>

    </React.Fragment>
}export default Header;