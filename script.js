// PSEUDO CODE - A Cocktail Recipe finder
    // Go get a set of images & cocktail names from TheCocktailDB that match the user's selection of a base liquor
    // Put images on the page as li elements

// our namespacing app
const cocktailApp = {};

   // -apiUrl (we will create two variables for the url by ingredient & url by ID)
    const cocktailURLByIngredient = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
    const cocktailURLById = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552`;

    // making our API call
        const userSelection = document.getElementById("typeOfLiquor").value;
        fetch (`${cocktailURLByIngredient}${userSelection}`)
        .then(response => response.json())
        .then(data => console.log(data));
        

    // putting the drink objects on the page
    
        // the function that will kick off our code
    // cocktailApp.init = function (){

    // }

    // call the init function
    // cocktailApp.init();

    // -userQuery (for the selected liquor chosen)


    // Create a method (getUserQuery) to update the variable (userQuery) based on user input

    // Create a function to create the drink list that matches the user selected liquor choice. Create li elements under the ul to populate the page (containing drink name & photo). Append to the page.

    // Add event listener ('submit') to the form element

    // Create function to display the chosen drink's ingredients & recipe 

    // Include a reset button to start over (*event listener*)


    // call the init method to start running our app!
    // cocktailApp.init();