const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Testing custom modules");

console.log("10 is even:", isEven(10));
console.log("7 is even:", isEven(7));

logger("Program finished");