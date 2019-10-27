/* task 178b
Given natural numbers. Calculate amount of numbers, which are multiples of 3 and not multiple of 5 */
const arrNaturalNumbers = [1, 3, 5, 6, 7, 8];
const counter = arrNaturalNumbers.filter(num => num % 3 === 0 && num % 5 !== 0).length;
console.log(counter);

/* task 178w
Given natural numbers. Calculate amount of numbers, which are squares of natural even numbers  */
const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 36];
const evenNaturalNumbers = naturalNumbers.filter(num => num % 2 === 0);
let calculator = 0;
evenNaturalNumbers.forEach(function(evenNum){
  if(Math.sqrt(evenNum) % 2 === 0) {
    calculator++;
  }
});
console.log(calculator);

/* task 555
Given natural number n. Get all the Pythagorean
triples of natural numbers, each of which does not exceed n.
a * a + b * b = c * c (a ≤ b ≤ c ≤ n)  */
function pythagoreanTriplet(n){            
  for(let a = 1; a < n; a++){
    for(let b = a; b < n; b++){
      let c = Math.sqrt(a * a + b * b);
      if(c % 1 === 0 & c <= n){
        console.log(a, b, c);
      }
    }
  }
};
pythagoreanTriplet(12);





