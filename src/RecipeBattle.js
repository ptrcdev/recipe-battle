import React, { useState } from 'react';
import './Cards.css';

const RecipeBattle = ({recipes}) => {
    
    const [currentWinner, setCurrentWinner] = useState(recipes[1]);
    const [displayed, setDisplayed] = useState([]);

    const handleWin = (chosen, loser) => {
        if (chosen !== currentWinner) {
            const newDisplayed = [...displayed, currentWinner];
            setDisplayed(newDisplayed)
            setCurrentWinner(chosen);
        } else {
            const newDisplayed = [...displayed, loser];
            setDisplayed(newDisplayed)
        }
    }


    return (
        <div className="recipe-battle">
            {recipes.map((recipe, index) => {
                if (!displayed.includes(recipe) && recipe !== currentWinner) {
                    return (
                        <div key={index} className="options-container">
                            <div className="option">
                                <img src={currentWinner.img.url} alt={currentWinner.name} />
                                <h3>{currentWinner.name}</h3>
                                <p>Total Time: {currentWinner.totalTime}</p>
                                <p>Meal Type: {currentWinner.mealType}</p>
                                <button onClick={() => handleWin(currentWinner, recipe)}>Choose</button>
                            </div>
                            <h2 className="or">OR</h2>
                            <div className="option">
                                <img src={recipe.img.url} alt={recipe.name} />
                                <h3>{recipe.name}</h3>
                                <p>Total Time: {recipe.totalTime}</p>
                                <p>Meal Type: {recipe.mealType}</p>
                                <button onClick={() => handleWin(recipe, currentWinner)}>Choose</button>
                            </div>
                        </div>
                    );
                }
            })}
            {
                currentWinner && (
                    <div className="winner">
                                <img src={currentWinner.img.url} alt={currentWinner.name} />
                                <h3>{currentWinner.name}</h3>
                                <p>Total Time: {currentWinner.totalTime}</p>
                                <p>Meal Type: {currentWinner.mealType}</p>
                                {console.log(currentWinner.url)}
                               <a href={currentWinner.url} target="_blank"><button>See Recipe</button></a>
                            </div>
                )
            }
        </div>
    );
};

export default RecipeBattle;
