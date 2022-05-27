// PSEUDO CODE - A Cocktail Recipe finder
    // Go get a set of images & cocktail names from TheCocktailDB that match the user's selection of a base liquor
    // Put images on the page as li elements

// our namespacing app
const cocktailApp = {};

   // -API Url by ingredient
    const cocktailURLByIngredient = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

    // making our API call while adding the appropriate end value from the user's selection
        const userSelection = document.getElementById("typeOfLiquor").value;
        fetch (`${cocktailURLByIngredient}${userSelection}`)
        .then( results => {
            // apply the .json() method to our results object
            return results.json();
        }).then( data => {
            // print the data to our console
            cocktailApp.displayDrinks(data);
        })
        // error handling should there be an issue with the API
        .catch((err) => {
            console.log(err);
        })
        
    // display the drink options on the page
    cocktailApp.displayDrinks = (drinkData) => {
        let drinksArray = drinkData.drinks;
        // loop through the drink array
        drinksArray.forEach( (drinksList) => {
            console.log(drinksList);
            // build out HTML to display drink name (h2) and the drink image
            const drinkName = document.createElement ('h2');
            drinkName.innerText = drinksList.strDrink;

            const drinkImage = document.createElement('img');
            drinkImage.src = drinksList.strDrinkThumb;
            drinkImage.alt = drinksList.drinkName;

            const drinkOptions = document.createElement('div');
            // drinkOptions.classList.add(); *========>>>>>>> link the class name after when we create styling for the images <<<<<=========
            drinkOptions.append(drinkName, drinkImage);

            // append that HTML to the drinkList (blank ul on html)
            document.querySelector(".drinkList").appendChild(drinkOptions);

        });
    }

    // Getting drinks from the API
    cocktailApp.getDrinks = function(){
    }

        // the function that will kick off our code
    cocktailApp.init = function (){
        cocktailApp.getDrinks();
        

    }

    // -userQuery (for the selected liquor chosen)


    // Create a method (getUserQuery) to update the variable (userQuery) based on user input

    // Create a function to create the drink list that matches the user selected liquor choice. Create li elements under the ul to populate the page (containing drink name & photo). Append to the page.

    // Add event listener ('submit') to the form element

    // Create function to display the chosen drink's ingredients & recipe 

    // Include a reset button to start over (*event listener*)


    // call the init method to start running our app!
    cocktailApp.init();