"use strict";

// namePart opgave
function writenameParts(fullName) {

    const firstSpace = fullName.indexOf(" ") + 1;
    const lastSpace = fullName.lastIndexOf(" ") + 1;

    let firstName = fullName.substring(0, firstSpace - 1);
    let secondName = fullName.substring(firstSpace, lastSpace);
    let lastName = fullName.substring(lastSpace);

    const firstLetterBig = firstName.toUpperCase();

    const secondLetterBig = secondName.toUpperCase();
    
    
}

writenameParts("harry james potter");




// fullName del 1 2 opgaver

const firstName ="Viktor"
const lastName ="Rattleff"
const middleName = "August"

function writefullName(lastName, firstName, middleName) {
    let returnvalue = `Hej ${firstName} ${middleName} ${lastName}`;

     if (middleName) {
         returnvalue = `Hej ${firstName} ${middleName} ${lastName}`; 
     } else {
        return returnvalue = `Hej ${firstName} ${lastName}`;

     } 
    
}

writefullName(lastName,firstName,middleName);



// Capatalize del 2 opgaver
let fullName = "MARTIN";

function writeCapatalized( fullName ) {
    const firstLetter = fullName.substring(0, 1);

    const firstLetterBig = firstLetter.toUpperCase();

    const allAfter = fullName.substring(1);

    const LetterAfter1 = allAfter.toLowerCase();

    let returnName = `${firstLetterBig}${LetterAfter1}`;

    console.log(returnName);

}

writeCapatalized("peTer")
writeCapatalized("PeTer")
writeCapatalized("peTEr")
writeCapatalized("PeTEr")
writeCapatalized("PeTER")


