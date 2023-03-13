"use strict";

let fullName = "PETER";

const firstToLetter = fullName.substring(0, 2);
console.log(firstToLetter);

const middleLetter = fullName.substring(2, 3);
console.log(middleLetter);

const lastLetter = fullName.substring(3);
console.log(lastLetter);

const firstToLetterSmall = firstToLetter.toLowerCase();
console.log(firstToLetterSmall);

const middleLetterW = middleLetter.toUpperCase();

const lastLetterTo = lastLetter.toLowerCase();

fullName = `${firstToLetterSmall}${middleLetterW}${lastLetterTo}`;

console.log(fullName);
