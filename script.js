// PSEUDO CODE - A Cocktail Recipe finder
    // Go get a set of images & cocktail names from TheCocktailDB that match the user's selection of a base liquor
    // Put images on the page as li elements

// create an app object (*haven't decided on a name yet)
const cocktailApp = {};

// Initialize preset data in the dedicated propertiesimage.png
    // -apiUrl (we will create two variables for the url by ingredient & url by ID)

    const cocktailByIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`
    const cocktailById = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

    // -userQuery (for the selected liquor chosen)


    // Create a method (getUserQuery) to update the variable (userQuery) based on user input

    // Create a function to create the drink list that matches the user selected liquor choice. Create li elements under the ul to populate the page (containing drink name & photo). Append to the page.

    // Add event listener ('submit') to the form element

    // Create function to display the chosen drink's ingredients & recipe 

    // Include a reset button to start over (*event listener*)


    // call the init method to start running our app!
    // cocktailApp.init();