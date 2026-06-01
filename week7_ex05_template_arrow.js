//TODO: Create a multiline string using template literals.
const multilineString = `This is a multiline stringthat spans multiple lines
using template literals.`;

//TODO: Create a function that uses template literals for HTML generation.
function generateHTML(name, age) {
  return `
    <div>
      <h1>Name: ${name}</h1>
      <p>Age: ${age}</p>
    </div>
  `;
}

//TODO: Convert regular functions to arrow funtions.
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}!`;

//TODO: Use arrow functions with array methods.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
const evenNumbers = numbers.filter(num => num % 2 === 0);

