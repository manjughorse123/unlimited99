import React from "react";
import MealItem from "./MealItem";
import classes from './MealItem.module.css';
import Input from "../../UI/Input";

function MealItemForm(props) {
    
    return(
        <form className = {classes.form}> 
            <Input  label ="Amount" 
            input = {{
                id : 'amount', 
                type : 'number',
                min :'1',
                max :'5',
                step :'1',
                defaultValue :'1'

            }}
            />
            <button className = {classes.button}> + Add</button>
        </form>
    );
}export default MealItemForm;