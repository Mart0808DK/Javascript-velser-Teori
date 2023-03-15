"use strict";

let fullName = "MARTIN";

const firstLetter = fullName.substring(0, 1);
console.log(firstLetter);

const firstLetterBig = firstLetter.toUpperCase();

const allAfter = fullName.substring(1);

const LetterAfter1 = allAfter.toLowerCase();

fullName = `${firstLetterBig}${LetterAfter1}`;

console.log(fullName);
