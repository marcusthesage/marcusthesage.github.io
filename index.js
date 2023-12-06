const sandwich = {
    sandwichBread: {
        bread1: {
            bread1name:"Sour Dough",
            bread1score:0 ,
        } ,
        bread2: {
            bread2name:"Marble Rye",
            bread2score:0 ,
        } ,
        bread3:{
            bread3name:"Ciabata Bun",
            bread3score:0 ,
        },
        bread4:{
            bread4name:"Honey Wheat",
            bread4score:0 ,
        },
        bread5:{
            bread5name:"Croissant",
            bread5score:0 ,
        },
    } ,  
    sandwichMeat: {
        meat1: {
            meat1name:"Ham",
            meat1score:0 ,
        } ,
        meat2: {
            meat2name:"Turkey",
            meat2score:0 ,
        } ,
        meat3:{
            meat3name:"Chicken",
            meat3score:0 ,
        },
        meat4:{
            meat4name:"Pepperoni and Salami",
            meat4score:0 ,
        },
        meat5:{
            meat5name:"Roast Beef",
            meat5score:0 ,
        },
        meat6:{
            meat6name:"Veggie",
            meat6score:0 ,
        },
    } ,
    sandwichCheese: {
        cheese1: {
            cheese1name:"Cheddar",
            cheese1score:0 ,
        } ,
        cheese2: {
            cheese2name:"Swiss",
            cheese2score:0 ,
        } ,
        cheese3:{
            cheese3name:"Provolone",
            cheese3score:0 ,
        },
        cheese4:{
            cheese4name:"Pepperjack",
            cheese4score:0 ,
        },
        cheese5:{
            cheese5name:"American Cheese",
            cheese5score:0 ,
        },
        cheese6:{
            cheese6name:"Gouda",
            cheese6score:0 ,
        },

    } ,
    sandwichToasted: {
        toasted1: {
            toasted1name:"Toasted",
            toasted1score:0 ,
        } ,
        toasted2: {
            toasted2name:"Cold",
            toasted2score:0 ,
        } ,
    } ,
    sandwichCondiments: {
        condiments1: {
            condiments1name:"Mayo",
            condiments1score:0 ,
        } ,
        condiments2: {
            condiments2name:"Mustard",
            condiments2score:0 ,
        } ,
        condiments3:{
            condiments3name:"BBQ Sauce",
            condiments3score:0 ,
        },
        condiments4:{
            condiments4name:"Chipotle Sauce",
            condiments4score:0 ,
        },
        condiments5:{
            condiments5name:"Hot Sauce",
            condiments5score:0 ,
        },
        condiments6:{
            condiments6name:"Horseraddish",
            condiments6score:0 ,
        },
        condiments7:{
            condiments7name:"Ranch",
            condiments7score:0 ,
        },
        condiments8:{
            condiments8name:"Salt and Pepper",
            condiments8score:0 ,
        },
    } ,
    sandwichToppings: {
        toppings1: {
            toppings1name:"Lettuce",
            toppings1score:0 ,
        } ,
        toppings2: {
            toppings2name:"Tomato",
            toppings2score:0 ,
        } ,
        toppings3:{
            toppings3name:"Onions",
            toppings3score:0 ,
        },
        toppings4:{
            toppings4name:"Cucumbers",
            toppings4score:0 ,
        },
        toppings5:{
            toppings5name:"Banana Peppersh",
            toppings5score:0 ,
        },
        toppings6:{
            toppings6name:"Jalapeños",
            toppings6score:0 ,
        },
        toppings7:{
            toppings7name:"Pickles",
            toppings7score:0 ,
        },

    } ,


}

let selectedBread = '';
let selectedMeat = '';
let selectedCheese = '';
let selectedToasted = '';
let selectedCondiments = '';
let selectedVegetables = '';


// Select the <p> tag with the "Choice" id and hide it
document.getElementById('Choice').style.display = 'none';





function selectOption(option, ingredientType, action) {
    // Get the list item for the specified ingredient type
    var listItem = document.getElementById(ingredientType.toLowerCase() + 'List');

    // If the action is 'remove', remove the selected option from the existing options
    if (action === 'remove') {
        var options = listItem.firstElementChild.textContent.split(', ');
        var index = options.indexOf(option);
        if (index !== -1) {
            options.splice(index, 1);
        }
        listItem.firstElementChild.textContent = options.join(', ');
    } else {
        // If the ingredient type is 'Condiments' or 'Vegetables', append the selected option to the existing options
        if (ingredientType === 'Condiments' || ingredientType === 'Vegetables') {
            var options = listItem.firstElementChild.textContent.split(', ');
            if (options.indexOf(option) === -1) { // Check if the option is already in the list
                if (listItem.firstElementChild.textContent !== ingredientType) {
                    listItem.firstElementChild.textContent += ', ' + option;
                } else {
                    listItem.firstElementChild.textContent = option;
                }
            }
        } else {
            // Otherwise, replace the existing option with the selected option
            listItem.firstElementChild.textContent = option;
        }
    }

    // Get all the option buttons
    var optionButtons = document.getElementsByClassName('choices');

    // Loop through all the option buttons
    for (var i = 0; i < optionButtons.length; i++) {
        // Remove the 'selected' class from each button
        optionButtons[i].classList.remove('selected');

        // If the button's text matches the selected option, add the 'selected' class to it
        if (optionButtons[i].textContent === option) {
            optionButtons[i].classList.add('selected');
        }
    }
}
// Define the options for each ingredient
var options = {
    'Bread': ['Sour Dough', 'Ciabata Bun', 'Marble Rye', 'Honey Wheat', 'Croissant'],
    'Meat': ['Turkey', 'Ham', 'Chicken', 'Pepperoni and Salami', 'Roast Beef', 'Veggie'],
    'Cheese': ['Provolone', 'Cheddar', 'Havarti', 'American Cheese', 'Swiss', 'Pepperjack', 'Gouda'], 
    'Toasted': ['Toasted', 'Cold', ],
    'Condiments': ['Ranch', 'Mayonaise', 'Hot Sauce', 'BBQ Sauce', 'Chipotle Mayo', 'Horseraddish', 'Mustard', 'Salt and Pepper'],
    'Vegetables': ['Lettuce', 'Tomato', 'Onions', 'Cucumbers', 'Banana Peppers', 'Jalapeños', 'Pickles'],
    // Add the options for the other ingredients here
};

function selectIngredient(ingredientType) {
    // Get the 'Choice' paragraph
    var choiceParagraph = document.getElementById('Choice');

    // Clear the current options
    choiceParagraph.innerHTML = 'Your choices are:';

    // Get the options for the selected ingredient
    var ingredientOptions = options[ingredientType];

    // Create a new button for each option
    for (var i = 0; i < ingredientOptions.length; i++) {
        var button = document.createElement('button');
        button.onclick = function() { selectOption(this.textContent, ingredientType); };
        button.textContent = ingredientOptions[i];
        button.type = 'button';
        button.className = 'button choices';

        // Add the button to the 'Choice' paragraph
        choiceParagraph.appendChild(button);
    }
    // Select the <p> tag with the "Fisherman" id
    var p = document.getElementById('Fisherman');

    // Update the <p> tag based on the ingredientType
    switch (ingredientType) {
        case 'Bread':
            p.textContent = 'What kind of bread would you like?';
            break;
        case 'Meat':
            p.textContent = 'Choose your meat!';
            break;
            case 'Cheese':
            p.textContent = 'Now what kind of cheese?';
            break;
            case 'Toasted':
            p.textContent = 'Would you like your sandwich toasted? Or Cold?';
            break;
            case 'Condiments':
            p.textContent = 'What condiments would you like?';
            break;
            case 'Vegetables':
            p.textContent = 'Last but not lease, what vegetables would you like?';
            break;
        // Add more cases as needed...
        default:
            p.textContent = 'Make your sandwich';
            break;
            
    }
    document.getElementById('Choice').style.display = 'block';
}


function updateIngredientLists() {
  const breadList = document.getElementById('breadList');
  const meatList = document.getElementById('meatList');

  // Clear existing content
  
  // Update content based on selected ingredients
  if (selectedBread) {
    const breadItem = document.getElementById('breadList');
    breadItem.textContent = `${selectedBread}`;
    breadList.appendChild(breadItem);
  }

  if (selectedMeat) {
    const meatItem = document.getElementById('meatList');
    meatItem.textContent = selectedMeat;
    meatList.appendChild(meatItem);
  }
}

// Get the "store" div
var storeDiv = document.getElementById('store');

// Create a 'Reset' button
var resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.onclick = resetSandwich;

// Add the 'Reset' button to the "store" div
storeDiv.appendChild(resetButton);

function resetSandwich() {
    // Define the ingredient types
    var ingredientTypes = ['Bread', 'Meat', 'Cheese', 'Toasted', 'Condiments', 'Vegetables'];

    // Loop through all the ingredient types
    for (var i = 0; i < ingredientTypes.length; i++) {
        // Get the list item for the current ingredient type
        var listItem = document.getElementById(ingredientTypes[i].toLowerCase() + 'List');

        // Reset the text of the button in the list item to the ingredient type
        listItem.firstElementChild.textContent = ingredientTypes[i];
    }

    // Get all the option buttons
    var optionButtons = document.getElementsByClassName('choices');

    // Loop through all the option buttons
    for (var i = 0; i < optionButtons.length; i++) {
        // Remove the 'selected' class from each button
        optionButtons[i].classList.remove('selected');
    }
}

// Create an array to store the saved sandwiches
var savedSandwiches = [];

// Create an input field for the sandwich name
var sandwichNameInput = document.createElement('input');
sandwichNameInput.id = 'sandwichName';

// Create a 'Save' button
var saveButton = document.createElement('button');
saveButton.textContent = 'Save';
saveButton.onclick = function() {
    // Get the sandwich name from the input field
    var sandwichName = document.getElementById('sandwichName').value;

    // Get the current sandwich from the `sandwich` object
    var currentSandwich = sandwich;

    // Save the sandwich name and sandwich to the `savedSandwiches` array
    savedSandwiches.push({ name: sandwichName, sandwich: currentSandwich });

    // Optionally, display the saved sandwiches in the UI
    var savedSandwichesList = document.getElementById('savedSandwichesList');
    var listItem = document.createElement('li');
    listItem.textContent = sandwichName;
    savedSandwichesList.appendChild(listItem);
};

// Add the input field and 'Save' button to the document
storeDiv.appendChild(sandwichNameInput);
storeDiv.appendChild(saveButton);
  //console.log(breadChoice)


function updateSavedSandwichesList() {
    // Get the saved sandwiches list
    var savedSandwichesList = document.getElementById('savedSandwichesList');

    // Clear the current list
    while (savedSandwichesList.firstChild) {
        savedSandwichesList.removeChild(savedSandwichesList.firstChild);
    }

    // Iterate over the saved sandwiches array
    for (var i = 0; i < savedSandwiches.length; i++) {
        // Create a new list item for each saved sandwich
        var listItem = document.createElement('li');
        listItem.textContent = savedSandwiches[i].name;

        // Append the list item to the list
        savedSandwichesList.appendChild(listItem);
    }
}









//document.getElementById("Score").innerHTML = sandwich.sandwichBread.bread5.bread5name;
