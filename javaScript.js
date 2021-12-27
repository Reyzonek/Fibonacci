function Fibonacci(number){  
    result = (1 / Math.sqrt(5)) * Math.pow(((1 + Math.sqrt(5)) / 2), number) - (1 / Math.sqrt(5)) * Math.pow(((1 - Math.sqrt(5)) / 2), number)     
} 

console.log(Fibonacci(6));