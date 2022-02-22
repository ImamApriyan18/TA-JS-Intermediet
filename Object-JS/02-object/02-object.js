function getObjectValue(value, string) {
    let arrString = string.split('.');
    //console.log(arrString);
    for (let i = 0; i < arrString.length; ++i){
        //console.log(arrString[i]);
        let j = arrString[i];
        if (j in value) {
            value = value[j];
        } else {
            return null;
        }
    } return value;
}


const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)