import React, {Component, useState} from "react";
import RecipieChoices from "./RecipieChoices";

const BaristaForm =  () =>{

    // creating a state variable to handle all 
// of the controlled inputs for our four basic ingridient categories

const [inputs, setInputs] = useState({
    'temperature' : "",
    "mik": "",
    "syrup":"",
    "blended": ""
});

const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
}
    const onNewDrink =() =>{
        //code goes here
    };
    const onCheckAnswer = () =>{
        //code goes here
    };
    return(
        <div>
            <h2>Hi, I'd like to order a:</h2>
            
            <h3>Temperature</h3>
            <div className="answer-space">
                {inputs["temperature"]}
            </div>

            <RecipieChoices
                handleChange={(e) => setInputs((prevState) =>({
                    ...prevState,
                    [e.target.name]:e.target.value,
                }))}
                label="temperature"
                choices ={ingredients["temperature"]}
                checked={inputs["temperature"]}
            />
            <h3>Milk</h3>
            <div className="answer-space">
                {inputs["milk"]}
            </div>
            <RecipieChoices
                handleChange={(e) => setInputs((prevState) =>({
                    ...prevState,
                    [e.target.name]:e.target.value,
                }))}
                label="milk"
                choices ={ingredients["milk"]}
                checked={inputs["milk"]}
            />
              <h3>Syrup</h3>
                <div className="answer-space">
                    {inputs["syrup"]}
                </div>
            <RecipieChoices
                handleChange={(e) => setInputs((prevState) =>({
                    ...prevState,
                    [e.target.name]:e.target.value,
                }))}
                label="syrup"
                choices ={ingredients["syrup"]}
                checked={inputs["syrup"]}
            />
            <h3>Blended</h3>
                <div className="answer-space">
                    {inputs["syrup"]}
            </div>
            <RecipieChoices
                handleChange={(e) => setInputs((prevState) =>({
                    ...prevState,
                    [e.target.name]:e.target.value,
                }))}
                label="blended"
                choices ={ingredients["blended"]}
                checked={inputs["blended"]}
            />
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


export default BaristaForm;