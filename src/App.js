import './App.css';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import RecipeBattle from './RecipeBattle';
import jsonData from './secret.json';

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      const endpoint = jsonData.endpoint;

      try {
        const response = await fetch(endpoint + "&q=chicken");
        if (!response.ok) {
          throw new Error(`Unable to fetch. Status ${response.status}`);
        }

        const data = await response.json();
        const recipeArray = [];

        data.hits.forEach((hit) => {
          const newRecipe = {
            name: hit.recipe.label,
            totalTime: hit.recipe["totalTime"],
            img: hit.recipe.images["REGULAR"],
            url: hit.recipe.url,
            mealType: hit.recipe.mealType,
            calories: hit.recipe.calories
          };

          recipeArray.push(newRecipe);
        });

        setRecipes(recipeArray);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRecipes();
  }, []);


  const buttonStyle = {
    "display": "flex",
    "font-size": "30px",
    "margin": "20px",
    "background-color": "white",
    "border": "0px",
  };

  const [start, setStart] = useState(false);


  function startGame() {
    setStart(true);
  }

  function goHome() {
    setStart(false);
  }

  console.log(recipes)
  return (
    <div className="App">
      <button style={buttonStyle} className="home" onClick={goHome}>
        <FontAwesomeIcon icon={faHome} />
      </button>
      {!start ? <HomePage startGame={startGame} goHome={goHome} /> : <RecipeBattle recipes={recipes}/>}

    </div>
  );
}

export default App;
