let x = prompt("Enter the first number: ");
let y = prompt("Enter the second number: ");

while (y) {
  let cur = y;
  y = x % y;
  x = cur;
}

console.log(`The GCF of the two numbers is ${x}`);


