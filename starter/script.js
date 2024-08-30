"use strict"; // activating strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio"; // error because its reserve word
