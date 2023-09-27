import React, {Component, useState} from "react";

const BaristaForm =  () =>{
    const onNewDrink =() =>{
        //code goes here
    };
    const onCheckAnswer = () =>{
        //code goes here
    };
    return(
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <form>
                
            </form>
            <button type="submit"
                    className="button submit"
                    onClick={onCheckAnswer()}
            >Check Answer
            </button>

            <button type="new-drink-button"
            className="button submit"
            onClick={onNewDrink()}
            >New Drink</button>
        </div>
    );
};

// creating a 
export default BaristaForm;