/*
db    db  .d8b.  d8888b. d888888b  .d8b.  d8888b. db      d88888b .d8888. 
88    88 d8' `8b 88  `8D   `88'   d8' `8b 88  `8D 88      88'     88'  YP 
Y8    8P 88ooo88 88oobY'    88    88ooo88 88oooY' 88      88ooooo `8bo.   
`8b  d8' 88~~~88 88`8b      88    88~~~88 88~~~b. 88      88~~~~~   `Y8b. 
 `8bd8'  88   88 88 `88.   .88.   88   88 88   8D 88booo. 88.     db   8D 
   YP    YP   YP 88   YD Y888888P YP   YP Y8888P' Y88888P Y88888P `8888Y' 
 */ 
const sandwich = {
    bread: "",
    meat: "",
    cheese: "",
    toasted: "",
    condiments: [],
    vegetables: []
}
const specialSandwich = {
    bread: "Ciabatta Bun",
    meat: "Pepperoni and Salami",
    cheese: 'Provolone',
    toasted: "Toasted",
    condiments: ["Ranch", "Mustard"],
    vegetables: ["Lettuce", "Tomato", "Onions", "Cucumbers", "Banana Peppers", "Jalapeños", "Pickles"]
};
var options = {

    'Bread': ['Sour Dough', 'Ciabatta Bun', 'Marble Rye', 'Honey Wheat', 'Croissant'],
    'Meat': ['Turkey', 'Ham', 'Chicken', 'Pepperoni and Salami', 'Roast Beef', 'Veggie'],
    'Cheese': ['Provolone', 'Cheddar', 'Havarti', 'American Cheese', 'Swiss', 'Pepperjack', 'Gouda'], 
    'Toasted': ['Toasted', 'Cold', ],
    'Condiments': ['Ranch', 'Mayonnaise', 'Hot Sauce', 'BBQ Sauce', 'Chipotle Mayo', 'Horseraddish', 'Mustard', 'Salt and Pepper'],
    'Vegetables': ['Lettuce', 'Tomato', 'Onions', 'Cucumbers', 'Banana Peppers', 'Jalapeños', 'Pickles'],
    // Add the options for the other ingredients here
};
var savedSandwiches = [];
var storeDiv = document.getElementById('store');
var resetButton = document.createElement('button');
var sandwichNameInput = document.createElement('input');
var saveButton = document.createElement('button');



/*
d88888b db    db d8b   db  .o88b. d888888b d888888b  .d88b.  d8b   db .d8888. 
88'     88    88 888o  88 d8P  Y8 `~~88~~'   `88'   .8P  Y8. 888o  88 88'  YP 
88ooo   88    88 88V8o 88 8P         88       88    88    88 88V8o 88 `8bo.   
88~~~   88    88 88 V8o88 8b         88       88    88    88 88 V8o88   `Y8b. 
88      88b  d88 88  V888 Y8b  d8    88      .88.   `8b  d8' 88  V888 db   8D 
YP      ~Y8888P' VP   V8P  `Y88P'    YP    Y888888P  `Y88P'  VP   V8P `8888Y' 
 */
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
                    listItem.firstElementChild.textContent += ' + ' + option;
                } else {
                    listItem.firstElementChild.textContent = option;
                }
            }
        } else {
            // Otherwise, replace the existing option with the selected option
            listItem.firstElementChild.textContent = option;
        }
    }
    if (ingredientType === 'Bread') {
        sandwich.bread = option;
    }
    if (ingredientType === 'Meat') {
        sandwich.meat = option;
    }
    if (ingredientType === 'Cheese') {
        sandwich.cheese = option;
    }
    if (ingredientType === 'Toasted') {
        sandwich.toasted = option;
    }
    if (ingredientType === 'Condiments') {
        if (!sandwich.condiments.includes(option)) {
            sandwich.condiments.push(option);
        }
    }
    if (ingredientType === 'Vegetables') {
        if (!sandwich.vegetables.includes(option)) {
            sandwich.vegetables.push(option);
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
            p.textContent = 'Last but not least, what vegetables would you like?';
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
function isSpecialSandwich() {
    if (sandwich.bread !== specialSandwich.bread ||
        sandwich.meat !== specialSandwich.meat ||
        sandwich.cheese !== specialSandwich.cheese ||
        sandwich.toasted !== specialSandwich.toasted) {
        return false;
    }

    if (!arraysContainSameElements(sandwich.condiments, specialSandwich.condiments) ||
        !arraysContainSameElements(sandwich.vegetables, specialSandwich.vegetables)) {
        return false;
    }

    return true;
}
function arraysContainSameElements(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    array1.sort();
    array2.sort();

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}
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
    
    console.log(sandwichName, currentSandwich);
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentSandwich));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", sandwichName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    var fishermanParagraph = document.getElementById('Fisherman');
    fishermanParagraph.textContent = "You've made a sandwich named " + sandwichName + "!";
    if (isSpecialSandwich()) {
    console.log("You've made the special sandwich!");
}
};

// Event Handlers and Function Calls
document.getElementById('Choice').style.display = 'none';
resetButton.textContent = 'Reset';
resetButton.onclick = resetSandwich;
storeDiv.appendChild(resetButton);
sandwichNameInput.id = 'sandwichName';
storeDiv.appendChild(sandwichNameInput);
saveButton.textContent = 'Save';
storeDiv.style.display = 'flex';
storeDiv.style.justifyContent = 'center';
storeDiv.style.alignItems = 'center';
storeDiv.style.flexDirection = 'column';
storeDiv.appendChild(saveButton);

// Total Combinations
var breadOptions = options['Bread'].length;
var meatOptions = options['Meat'].length;
var cheeseOptions = options['Cheese'].length;
var toastedOptions = options['Toasted'].length;
var condimentOptions = Math.pow(2, options['Condiments'].length);
var vegetableOptions = Math.pow(2, options['Vegetables'].length);
var totalCombinations = breadOptions * meatOptions * cheeseOptions * toastedOptions * condimentOptions * vegetableOptions;
//console.log(totalCombinations);