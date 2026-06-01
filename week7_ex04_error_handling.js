//TODO: Create a function that validates user input.
function validateInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input cannot be empty');
    }
}

//TODO: Create a function that demonstrates multiple error types.
function demonstrateErrors() {
    try {
        // This will throw a ReferenceError
        console.log(nonExistentVariable);
    } catch (error) {
        console.error('Caught a ReferenceError:', error.message);
    }
}
validateInput('test');
demonstrateErrors();

//TODO: Create a collection of helper functions for string manipulation.
function toUpperCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str.toUpperCase();
}

//TODO: Create helper functions for array operations.
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    return arr.reduce((sum, num) => sum + num, 0);
}

