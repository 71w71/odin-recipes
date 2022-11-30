const results = [];

const fizzbuzz = (n) => {

 for (let i = 1; i <= n; i++){ 

 if (i % 3 === 0 && i % 5 === 0)
    results.push('fizzbuzz');

  else if (i % 3 == 0) results.push('fizz');
  else if (i % 5 == 0) results.push('buzz');
  else results.push(i)
 }

}

 fizzbuzz(16);
console.log(results);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]