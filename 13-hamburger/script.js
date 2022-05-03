import Hamburger from "./Hamburger.js";

const hamburger = new Hamburger(Hamburger.SIZE_BIG);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SALAD);

console.log("Price with sauce: " + hamburger.getPrice() + " $");
console.log("Calories with sauce: " + hamburger.getCalories() + " cal");