//TODO: Create a function called 'multiply' that will take in 3 parameters and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Error : All numbers must be different.";
    }
    return num1 * num2 * num3;
}

//TODO: Create a function expression called 'convertToSeconds' that takes in a number of minutes as an argument and returns the amount in seconds. Do not use a console.log() inside of the function.
const convertToSeconds = function(minutes) {
    return minutes * 60;
}

//TODO: Create a function called farenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. Do not use a console.log() inside of the function.
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

//TODO: Create a function that takes a string as a parameter and returns the reverse of the string. Do not use a console.log() insideof the function.
function reverseString(str) {
    return str.split('').reverse().join('');
}

//TODO: Create a function that takes in a string and returns the number of vowels in the sentence. Example: countVowels('Javascript') returns 3. Do not use a console.log() inside of the function.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
} 

//TODO: Create an 'isPrime' function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


