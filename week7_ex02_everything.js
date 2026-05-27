//TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 to the parameter. You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating: "The value passed is not a number". You are not allowed to use methods such as !Number.isinteger(n) or regular expressions. Make sure to test your code effectively.
function sum(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return "The value passed is not a number";
    }
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

//TODO: Create a function called 'factorial' that takes in a number as a parameter. The function will print the factorial of the entered number. Example: factorial(4) outputs 4*3*2*1 which equals 24.
function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
        return "The value passed is not a valid number";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

//TODO: Create a function called funkyMath. If this function is called with 2 arguments, subtract the first from the second . If called with 3 arguments, add all 3 numbers together. If called with 4 arguments, add argument 1 and 2 together and argument 3 and 4 together seperately, then divide them. Example: funkyMath(8,2,3,5) produces 8+2 divided by 3+5, which is 10 divided by 8, output 1.25.
function funkyMath(...args) {
    if (args.length === 2) {
        return args[1] - args[0];
    } else if (args.length === 3) {
        return args[0] + args[1] + args[2];
    } else if (args.length === 4) {
        let sum1 = args[0] + args[1];
        let sum2 = args[2] + args[3];
        return sum1 / sum2;
    } else {
        return "Invalid number of arguments";
    }
}

//TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the following array: [1,2,33,45,6,44]. Bonus: arrange the odd numbers from smallest to biggest.
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];1, 33, 45

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);1, 33, 45
    }
}
oddNumbers.sort((a, b) => a - b);
console.log("Odd numbers sorted:", oddNumbers);1, 33, 45

//TODO: Create an object called 'me' with properties of first name, last name, age, favourite colour, and dream car.
let me = {
    firstName: "Kamvelihle",
    lastName: "Matshaya",
    age: 18,
    favouriteColour: "black",
    dreamCar: "BMW M4"
};

//TODO: Create and add a new property and value of 'favourite food' to the object.
me.favouriteFood = "Pasta";Pasta

//TODO: Delete the age property from the object.
delete me.age;18


