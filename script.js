// PSEUDO CODE - A Cocktail Recipe finder
// Go get a set of images & cocktail names from TheCocktailDB that match the user's liquor selection
// Display drink names & images on the page as li elements

// our namespacing app
const cocktailApp = {};
cocktailApp.drinkListDiv = document.querySelector('.drinkList');
cocktailApp.formEl = document.querySelector('form');

cocktailApp.setupEventListeners = () => {
    //add event listener (submit) to our form element
    cocktailApp.formEl.addEventListener('submit', function (event) {
        event.preventDefault();
        cocktailApp.getDrinks();
    });
}

// Getting drinks from the API
cocktailApp.getDrinks = function () {
    // -API Url by ingredient
    const cocktailURLByIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

    // making our API call while adding the appropriate end value from the user's selection
    const userSelection = document.getElementById('typeOfLiquor').value;
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
        drinkImage.alt = drinksList.strDrink;

        const drinkOptions = document.createElement('li');
        drinkOptions.id = drinksList.idDrink;
        // drinkOptions.classList.add('hiddenInstructions');

        cocktailApp.getDrinkDetails(drinksList.idDrink);



        drinkOptions.append(drinkName, drinkImage);
        drinkOptions.addEventListener('click', function () {
            // this.classList.toggle('hiddenInstructions');
            const divs = this.querySelectorAll('div');
            divs.forEach(function (div) {
                div.classList.toggle('sr-only');
            })

        });

        // append that HTML to the drinkList (blank ul on html)
        cocktailApp.drinkListDiv.appendChild(drinkOptions);
    });
}

cocktailById = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

cocktailApp.getDrinkDetails = (id) => {
    fetch(`${cocktailById}${id}`)
        .then((res) => res.json())
        .then((data) => {
            cocktailApp.displayIngredients(data.drinks[0])
        });
}

cocktailApp.displayIngredients = (data) => {
    // note in data we need
    // strIngredient1 through 15, some null
    // strInstructions
    // strMeasure1 through 15, some null
    const ingredient = [];

    // using the i variable to check if property exists
    for (let i = 1; i < 15; i++) {
        if (data.hasOwnProperty(`strIngredient${i}`)) {
            if (data[`strIngredient${i}`] && data[`strMeasure${i}`]) {
                ingredient.push({
                    ingredient: data[`strIngredient${i}`],
                    measure: data[`strMeasure${i}`]
                })
            }
        }
    }

    const ingredList = document.createElement('div');
    ingredList.classList.add('sr-only');
    ingredList.innerHTML = `
        <h3> Ingredients </h3>
        `

    ingredient.forEach((item) => {
        const ingredientListEl = document.createElement('p');
        ingredientListEl.textContent += `
            ${item.measure} ${item.ingredient}  
        `
        ingredList.append(ingredientListEl);
    })

    const drinkDetails = document.createElement('div');
    drinkDetails.classList.add('sr-only');
    drinkDetails.innerHTML = `
    <h3>Instructions</h3>
    <p>${data.strInstructions}</p>
    `;


    // get the list element by id
    const elList = document.getElementById(`${data.idDrink}`)
    elList.append(ingredList, drinkDetails)
}

// the function that will kick off our code
cocktailApp.init = function () {
    cocktailApp.setupEventListeners();

}

// call the init method to start running our app!
cocktailApp.init();