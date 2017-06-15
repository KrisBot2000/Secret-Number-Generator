//var secretNumber = function(){
'use strict';
module.exports = function() {


var sameRandomNumber = 0;
var genRandomNumber = Math.random();

  return function(){
  sameRandomNumber = genRandomNumber*1000001;
  return sameRandomNumber;
  }






// var money = 55.50;
// var coffeeCost = 8.50;

// var drinkCoffee = (function(){
//   var cupsDrunk = 0;
//   return function(){
//     if( money >= coffeeCost ){
//       money -= coffeeCost;
//       cupsDrunk++;
//     }
//     return cupsDrunk; // return the value
//   };
// })();

// var count;
// count = drinkCoffee();  // 1
// count = drinkCoffee();  // 2
// count = drinkCoffee();  // 3
// console.log( count );  // 3
// console.log( money );  // 30

};