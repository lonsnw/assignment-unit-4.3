console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// function addItem(item) {
//     //how would we write this if we wanted to be able to add multiple things at once?
//     basket.push(item);
//     if (basket[basket.length-1] === item) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }

const maxItems = 5;

function addItem(thing) {
    //version 2
    if (basket.length < maxItems) {
        basket.push(thing);
    }
    if (basket[basket.length-1] === thing) {
        return true;
    }
    else {
        return false;
    }
    
}

addItem(`tomatoes`);
console.log(basket);
console.log(addItem(`oranges`));
console.log(addItem(`peppers`));
console.log(basket);

function listItems() {
    for(food of basket){
        console.log(food);
    }
}

listItems();

function empty(){
    while(basket.length > 0) {
        basket.pop();
        console.log(basket);
        }
}

empty();

// const maxItems = 5;

function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    else if (basket.length >= maxItems) {
        return true;
    }
}

addItem(`poptarts`);
addItem(`candy`);
addItem(`bagels`);
addItem(`bananas`);
addItem(`ketchup`);
console.log(basket);
console.log(`is the basket full?`, isFull());

console.log(`can i add mints?`, addItem(`mints`));
console.log(basket);

empty();
addItem(`candy`);
addItem(`bagels`);
addItem(`bananas`);
addItem(`ketchup`);
console.log(basket);
console.log(`is the basket full?`, isFull());

console.log(`can i add mints?`, addItem(`mints`));
console.log(basket);

function removeItem(item) {
    basket.indexOf(item);
    console.log(basket.indexOf(item));
    let response = ``; 
    if (basket.indexOf(item) === -1) {
        response = `null`;
    }
    else {
        response = item;
    }
    console.log(basket.splice(basket.indexOf(item), 1));
    return response;
}

console.log(removeItem(`mints`));
console.log(basket);
console.log(removeItem(`turkey`));
console.log(basket);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
