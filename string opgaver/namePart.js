"use strict";

const fullName = "Martin Emil Nielsen";

const firstSpace = fullName.indexOf(" ") + 1;
const lastSpace = fullName.lastIndexOf(" ") + 1;

let firstName = fullName.substring(0, firstSpace - 1);
let secondName = fullName.substring(firstSpace, lastSpace);
let lastName = fullName.substring(lastSpace);

console.log(`
Fornavn: ${firstName}
Mellemnavn: ${secondName}
Efternavn ${lastName}`);
