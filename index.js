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
let selectedToppings = '';


function selectOption(breadType) {
    // Get the 'breadList' element
    var breadList = document.getElementById('breadList');

    // Update the text of the 'breadList' button with the selected bread type
    breadList.firstElementChild.textContent = breadType;

    // Get all the bread buttons
    var breadButtons = document.getElementsByClassName('choices');

    // Loop through all the bread buttons
    for (var i = 0; i < breadButtons.length; i++) {
        // Remove the 'selected' class from each button
        breadButtons[i].classList.remove('selected');

        // If the button's text matches the selected bread type, add the 'selected' class to it
        if (breadButtons[i].textContent === breadType) {
            breadButtons[i].classList.add('selected');
        }
    }
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

  //console.log(breadChoice)












//document.getElementById("Score").innerHTML = sandwich.sandwichBread.bread5.bread5name;
