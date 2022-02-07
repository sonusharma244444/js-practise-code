'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// 1    destructuing arrays

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [1, 2, 3, 4];
// const A = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// console.log(A, b, c, d);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables

// // normal way
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // by destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a functions
// const [stater, mainCourse] = restaurant.order(2, 0);
// console.log(stater, mainCourse);

// // nested destructuing
// const nested = [1, 2, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, j, [k, a]] = nested;
// console.log(i, j, k, a);

// // default values
// const kabir = [5, 10, 5];

// const [p = 1, q = 1, r = 1, sonu = 1] = kabir;
// console.log(p, q, r, sonu);

// 2  destructuing objects

// const restaurant = {
//   names: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ time, mainIndex, address, starterIndex }) {
//     console.log(
//       `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients);
//     console.log(otherIngredients);
//   },
// };

// const { names, openingHours, categories } = restaurant;
// console.log(names, openingHours, categories);

// const {
//   names: restaurantName,
//   openingHours: hour,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hour, tags);

// DEFAULT VALUE
// const { menu = [], starterMenu: restaurantMenu = [] } = restaurant;

// console.log(menu, restaurantMenu);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: p },
// } = openingHours;
// console.log(o, p);

// // passing object into a function
// restaurant.orderDelivery({
//   time: '22:23',
//   address: 'madan puri',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // 3     spread operator

// // normal way
// const arr = [1, 2, 3, 4];
// const newArr = [7, 8, arr[0], arr[1], arr[2], arr[3]];

// console.log(newArr);

// // spread operator way
// const badArr = [7, 8, ...arr];
// console.log(badArr);

// console.log(...badArr);
// const newMenu = [...restaurant.mainMenu, 'gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join array
// const menuSonu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuSonu);

// iterables: arrays, strings, maps, sets not objects

// string with spread operators
// const str = 'jonas';
// const letters = [...str, 's.'];
// console.log(letters);
// console.log(...str);

// real world examples
// const ingredients = [
//   prompt("let's make pasta ingredients 1? "),
//   prompt('ingredients 2? '),
//   prompt('ingredients 3? '),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// //objects
// const newRestaurants = { foundedIn: 1888, ...restaurant, founder: 'guiseppe' };
// console.log(newRestaurants);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.names = 'ristorante roma';
// console.log(restaurantCopy.names);
// console.log(restaurant.names);

// //  4   rest pattern and parameters

// // 1 destructuring

// // spread, because on right side of =
// // const arr = [1, 2, ...[3, 4]];

// // rest , because on left side of =
// const [a, b, ...others] = [1, 2, 3, 5, 54];
// console.log(a, b, others);

// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherFood);

// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) parameters functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// };

// add(2, 3);
// add(5, 6, 6, 4, 3, 3);
// add(5, 6, 7, 4, 6, 6, 4, 7, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spanish');
// restaurant.orderPizza('mushrooms');

// // // 5 short circuiting (&& and ||)
// // //  -----or ----
// // console.log(3 || 'jonas');
// // console.log('' || 'jonas');
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log(undefined || 0 || '' || 'hello' || 34 || null);

// // restaurant.numGuests = 23;

// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // // -----and------
// // console.log(0 && 'jonas');
// // console.log(23 && 'jonas');
// // console.log('jonas' && 23 && null && 'hello');

// // // practical example
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushroom', 'spanish');
// // }

// // // and
// // restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spanish');

// // 6 nullish coalescing operator
// restaurant.numGuests = 0;

// const guest3 = restaurant.numGuests ?? 10;
// console.log(guest3);

// // 7 logical assignment operators
// const rest1 = {
//   name: 'capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'la piazza',
//   owner: 'kabir',
// };

// or assignment operator
// rest1.numberGuest = rest1.numGuests || 10;
// rest2.numberGuest = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish  assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// and assignment operators
// rest1.owner = rest1.owner && '<anonymos>';
// rest2.owner = rest2.owner && '<anonymos>';
// rest1.owner &&= '<anonymos>';
// rest2.owner &&= '<anonymos>';

// console.log(rest1);
// console.log(rest2);
// rest1.owner = rest1.owner && '<anonymos>';
// rest2.owner = rest2.owner && '<anonymos>';
// rest1.owner &&= '<anonymos>';
// rest2.owner &&= '<anonymos>';

// console.log(rest1);
// console.log(rest2);

// 8   looping arrays the For of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

// 9  optional chaining

const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, mainIndex, address, starterIndex }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // example:
// const days = ['monday', 'tueday', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'close';
//   console.log(`on ${day}, we open at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not work');

// console.log(restaurant.orderd?.(0, 1) ?? 'method does not work');

// //array
// const users = [
//   {
//     name: 'sonu',
//     email: 'hello@gmail.com',
//   },
// ];

// console.log(users[0]?.name ?? 'user array empty');

// if (users.length > 0) {
//   console.log(users[0]?.name);
// } else console.log('user is emty');

// 11    LOOPING OBJECTS, OBJECT KEYS , VALUE AND ENTRIES

// // properties names
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// const openStr = `we are open on ${properties.length} days: `;

// for (const day of properties) {
//   console.log(`WE ARE OPEN ON ${properties.length} days :${day}`);
// }
// console.log(openStr);

// // property values
// const value = Object.values(restaurant.openingHours);
// console.log(value);

// //enteries object
// const enteries = Object.entries(restaurant.openingHours);
// console.log(enteries);

// for (const [key, { open, close }] of enteries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

//12 sets
// const orderSet = new Set([
//   'pizza',
//   'pizza',
//   'lemon',
//   'lemon',
//   'candy ',
//   'candy',
// ]);
// console.log(orderSet);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('kabir'));
// console.log(orderSet.delete('pizza'));
// console.log(orderSet);
// // console.log(orderSet.clear());
// console.log(orderSet.add('ram'));

// for (const order of orderSet) {
//   console.log();
// }

// // example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef']).size
// );

// 13 maps

// const rest = new Map();
// rest.set('name', 'taj hotel');
// rest.set(1, 'france, Itly ');
// rest.set(2, 'germany, gurgaon');
// console.log(rest);

// rest
//   .set('categories', [
//     'Focaccia',
//     'Bruschetta',
//     'Garlic Bread',
//     'Caprese Salad',
//   ])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(1));
// console.log(rest.get(2));
// console.log(rest.get('categories'));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest);
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'heading');

// 14 maps iteration

// const question = new Map([
//   ['question', 'what is the best programming language in the world '],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question);

// // convert object to map
// console.log(Object.entries(restaurant.openingHours));
// const hourMap = new Map(Object.entries(restaurant.openingHours));

// console.log(hourMap);

// iteration

// // quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`answer ${key} : ${value}`);
//   }
// }
// // const answer = Number(prompt('your answer'));
// // console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values(true));

// 15   working with strings part-1
const airLine = 'kingfisher';
const plane = 'A420';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airLine.length);
console.log('b4556'.length);
