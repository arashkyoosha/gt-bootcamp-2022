//WRITE YOUR CODE BELOW

var customerOrder = {
    drinkName: "Coffee",
    numOfSugar: 2,
    isDrinkReady: true
}

console.log("Your drink is " + customerOrder.drinkName + " and there are " + customerOrder.numOfSugar + " spoons of sugars in it.")

if (customerOrder.isDrinkReady) {
    console.log("Ready for pick-up")
} else {
    console.log("Still in order queue")
}

for (const property in customerOrder) {
    //console.log('${property}: ${customerOrder[property]}');    // Wrong syntax - used this: ' ' instead of ` `
    console.log(`${property}: ${customerOrder[property]}`);
}