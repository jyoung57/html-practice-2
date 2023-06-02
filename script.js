'use strict';

let yourName = prompt('What is your name?');
console.log(yourName);
alert('Hello ' + yourName);

let yourAge = prompt('What is your age?');
console.log(yourAge);
alert(`${yourAge} !?!?! dang your are old.`);

let place = prompt('Where are your from?');
console.log(place);
alert(`I bet ${place} is a great place to live.`);

let favoriteColor = prompt('What is your favorite color?');
console.log(favoriteColor);
alert(`${favoriteColor} is a beautiful color.`);

alert(
  `Sooo, your name is ${yourName}, you are ${yourAge} years old.  You live in ${place} and your favorite color is ${favoriteColor}`
);
