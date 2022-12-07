// const person = {
// name: "Sobana",
// age =
// }
// console.log(person);
//
// console.log(person["name"])

// let offer = "none";
// let time = 1500;
//
// const cafe = {
//   name: "Whitesheep",
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
//   breakfastOffer: "Free croissant with coffee",
//   lunchOffer: "Free drink with surprisingly priced sandwich",
//   noOffer: "Sorry, no offer",
// };
//
// if (time < 1100) {
//   offer = cafe.breakfastOffer;
// } else if (time < 1500) {
//   offer = cafe.lunchOffer;
// } else {
//   offer = cafe.noOffer;
// }
//
// console.log(offer);
//
//
// let day = "Saturday"
// let alarm = ""
//
// const alarmType = {
// weekendAlarm: "no alarm needed",
// weekdayAlarm: "get up at 7am.",
//
// if(day == "Saturday" || day == "Sunday") {
// alarm = alarmType.weekdayAlarm;
// } else {
// alarm = alarmType.weekdayAlarm;
// }
//
// }
//
// console.log(alarmType)
//
// let offer = "none";
// let time = 1200;
//
// const cafe3 = {
// name: "Whitesheep",
// seatingCapacity: 100,
// hasSpecialOffers: true,
// drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
// breakfastOffer: "Free croissant with coffee",
// lunchOffer: "Free drink with surprisingly priced sandwich",
// noOffer: "Sorry no offer",
//
// openCafe() {
// if (this.hasSpecialOffers) {
// return "Come on in";
// }
// },
// closeCafe() {
// return "We are closed, come back tomorrow!";
// },
// };
// console.log(cafe3.openCafe());

// Activity 1 -------------------------------------
//
// const person = {
//   name: "Sobana",
//   age: 34,
//   song: [
// "Bouff Daddy - J Hus",
// "Gbewa - Yung L",
// "Laissez-moi tranquille - GIMS",
//   ],
//   sayHi: () => {
// return "Hello my name is $[name]";
//   },
// };
// console.log(person.sayHi());

// Activity 2 -------------------------------------

// const pet = {
//   name: "Princess",
//   typeOfPet: "cat",
//   age: 7,
//   colour: "grey",
//   eat() {
//     return `${this.name} is a ${this.typeOfPet} and is eating`;
//   },
//   drink() {
//     return `${this.name} is drinking`;
//   },
// };

// console.log(pet.eat());
// console.log(pet.drink());

// Activity 3 -------------------------------------

// const coffeeShop = {
//   branch: "Sobana's Coffee Shop",
//   drinks: ["coffee", "tea", "chai latte"],
//   drinkPrices: [3.5, 2.5, 4.0],
//   food: ["tuna sandwich", "cheese panini", "jacket potatoe"],
//   foodPrices: [1.5, 2.5, 3.5],
//   total: 0,
//   foodOrdered(food1) {
//     (idx = this.food.indexOf(food1)),
//       (foodCost = this.foodPrices[idx]),
//       console.log(`Your ${food1} costs £${foodCost}`);
//     this.total += foodCost;
//   },
//   drinksOrdered(drinks1) {
//     (idx = this.drinks.indexOf(drinks1)),
//       (drinkCost = this.drinkPrices[idx]),
//       console.log(`Your ${drinks1} costs £${drinkCost}`);
//     return `The total bill is £: ${(this.total += drinkCost)}`;
//   },
// };

// console.log(coffeeShop.foodOrdered("tuna sandwich"));
// console.log(coffeeShop.drinksOrdered("tea"));
