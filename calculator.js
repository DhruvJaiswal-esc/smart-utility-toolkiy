const operation = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

if (isNaN(a) || isNaN(b)) {
    console.log("Please enter valid numbers");
    process.exit();
}

let result;

switch (operation) {
    case "add":
        result = a + b;
        break;

    case "sub":
        result = a - b;
        break;

    case "mul":
        result = a * b;
        break;

    case "div":
        if (b === 0) {
            console.log("Cannot divide by zero");
            process.exit();
        }
        result = a / b;
        break;

    default:
        console.log("Invalid operation");
        console.log("Use: add, sub, mul, div");
        process.exit();
}

console.log("Result:", result);