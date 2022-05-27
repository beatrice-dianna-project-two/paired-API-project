// PSEUDO CODE - A Cocktail Recipe finder
// Go get a set of images & cocktail names from TheCocktailDB that match the user's liquor selection
// Display drink names & images on the page as li elements

// our namespacing app
const cocktailApp = {};
cocktailApp.drinkListDiv = document.querySelector(".drinkList");
cocktailApp.formEl = document.querySelector('form');

cocktailApp.setupEventListeners = () => {
    //add event listener (submit) to our form element
    cocktailApp.formEl.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("prevented crisis");

        cocktailApp.getDrinks();
    });

}

// Getting drinks from the API
cocktailApp.getDrinks = function () {
    // -API Url by ingredient
    const cocktailURLByIngredient = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

    // API URL by ID
    const cocktailById = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=';

    // making our API call while adding the appropriate end value from the user's selection
    const userSelection = document.getElementById("typeOfLiquor").value;
    fetch(`${cocktailURLByIngredient}${userSelection}`)
        .then(results => {
            // apply the .json() method to our results object
            return results.json();
        }).then(data => {
            // print the data to our console
            cocktailApp.displayDrinks(data);
        })
        // error handling should there be an issue with the API
        .catch((err) => {
            console.log(err);
        })

    const clickSelection = document.getElementById("typeOfLiquor").value;
    fetch(`${cocktailById}${userSelection}`)
        .then(results => {
            // apply the .json() method to our results object
            return results.json();
        }).then(data => {
            // print the data to our console
            cocktailApp.displayDrinks(data);
            console.log(clickSelection);
        })
        // error handling should there be an issue with the API
        .catch((err) => {
            console.log(err);
        })
}


// display the drink options on the page
cocktailApp.displayDrinks = (drinkData) => {
    //empty the div before displaying more drinks
    cocktailApp.drinkListDiv.innerHTML = '';
    let drinksArray = drinkData.drinks;
    // loop through the drink array
    drinksArray.forEach((drinksList) => {
        console.log(drinksList);
        // build out HTML to display drink name (h2) and the drink image
        const drinkName = document.createElement('h2');
        drinkName.innerText = drinksList.strDrink;

        const drinkImage = document.createElement('img');
        drinkImage.src = drinksList.strDrinkThumb;
        drinkImage.alt = drinksList.drinkName;

        const drinkOptions = document.createElement('li');
        // drinkOptions.classList.add(); //link the class name after when we create styling for the images
        drinkOptions.append(drinkName, drinkImage);

        // append that HTML to the drinkList (blank ul on html)
        cocktailApp.drinkListDiv.appendChild(drinkOptions);
    });
}

// Create function to display the chosen drink's ingredients & recipe 

// Include a reset button to start over (*event listener*)

// the function that will kick off our code
cocktailApp.init = function () {
    cocktailApp.setupEventListeners();

}

// call the init method to start running our app!
cocktailApp.init();