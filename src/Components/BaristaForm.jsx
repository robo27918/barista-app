import React, {Component, useState} from "react";
import RecipieChoices from "./RecipieChoices";
import drinksJson from "./drinks.json"
import { random } from "lodash";


const BaristaForm =  () => {

    // creating a state variable to handle all 
    // of the controlled inputs for our four basic ingridient categories

    // state varaible to hold the currentdrink name
    const [currentDrink ,setCurrentDrink] = useState("");
    // state variable to hold the currentDrink and its trueRecipe
    const[trueRecipe, setTrueRecipe] = useState(
        {
            'temperature' : "",
            "mik": "",
            "syrup":"",
            "blended": ""
        }
    );

    //state variable to store input guess
    const [tempGuess, setTempGuess] = useState("");
    const [milkGuess, setMilkGuess] = useState("");
    const [syrupGuess, setSyrupGuess] = useState("");
    const [blendedGuess, setBlendedGuess] = useState("");
   
    const getNextDrink = () => {
        console.log("from getNextDrink...")
        let randomDrinkIndex = Math.floor(Math.random()* drinksJson.drinks.length);
        //set the currentDrink state variable to the name at the random index of the 
        //drinks list in the drinksJson
        console.log("name...", drinksJson.drinks[randomDrinkIndex].name)
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name)
        //setting the trueRecipe state varaible to the ingredients associated 
        // with that drink
        console.log("ingridients... ",drinksJson.drinks[randomDrinkIndex].ingredients)
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients)
    }  
    const onNewDrink = () =>{
        //intended to clear out past state variable
        console.log("calling onNewDrink..")
        setInputs({
            'temperature':'',
            'milk': '',
            'syrup':'',
            'blended': '',
        });
        //resetting guess state varaibles
        setCurrentDrink('');
        setTempGuess("");
        setBlendedGuess('');
        setMilkGuess("")
        setSyrupGuess("");
        getNextDrink();
    };
    const onCheckAnswer = () =>{
        

        if (trueRecipe.temp != inputs['temperature']){
            setTempGuess('wrong');
        }
        else {
            setTempGuess("correct");
        }

        if (trueRecipe.temp != inputs['blended']){
            setBlendedGuess('wrong');
        }
        else {
            setBlendedGuess("correct");
        }
        if (trueRecipe.temp != inputs['milk']){
            setMilkGuess('wrong');
        }
        else {
            setMilkGuess("correct");
        }
        if (trueRecipe.temp != inputs['syrup']){
            setSyrupGuess('wrong');
        }
        else {
            setSyrupGuess("correct");
        }
  
  
    };
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



    return(
        <div>
            <h2>Hi, I'd like to order a:</h2>
            
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                   type="new-drink-button"
                   className="button newdrink"
                   onClick={onNewDrink} 
                >
                    🔃
                </button>
            </div>

            <h3>Temperature</h3>
            <div className="answer-space" id={tempGuess}>
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
            <div className="answer-space" id={milkGuess}>
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
                <div className="answer-space" id={syrupGuess}>
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
                <div className="answer-space" id={blendedGuess}>
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
                    onClick={onCheckAnswer}
            >Check Answer
            </button>

            <button type="new-drink-button"
            className="button submit"
            onClick={onNewDrink}
            >New Drink</button>
        </div>
    );
};


export default BaristaForm;