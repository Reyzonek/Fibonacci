
const number = parseInt(prompt('Podaj ktory element ciagu fibonacciego chcesz otrzymac: '))

 
  //  result = (1 / Math.sqrt(5)) * Math.pow(((1 + Math.sqrt(5)) / 2), number) - (1 / Math.sqrt(5)) * Math.pow(((1 - Math.sqrt(5)) / 2), number)     
let first = 0;
let second = 1;

for (let i = 1; i <= number; i++) {
  console.log(first);
  next = first + second;
  first = second;
  second = next;
}
console.log('Ten element ciagu wynosi: ')
console.log(first);
