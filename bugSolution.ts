function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct usage: both arguments are numbers
console.log(result); 

function addString(a: string, b: string): string {
  return a + b;
}

let result2 = addString('1','2'); // Correct usage: both arguments are strings
console.log(result2); 