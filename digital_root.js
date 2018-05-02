/*
	create a digital root function.

	A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
	If that value has two digits, continue reducing in this way until a single-digit number is produced. 
	This is only applicable to the natural numbers.

*/


function digital_root(n) {
  // ...
  let digit = n % 10;
  let sum = 0;
  
  if ( digit === n) { sum += digit}
  
  while( digit != n) {
    sum += digit;
    n -= digit;
    n /= 10;
    digit = n % 10;
    if(digit === n) { sum += digit}
  }
  return sum;
}

//TEST

console.log(digital_root(108));
console.log(digital_root(13));
console.log(digital_root(1));
console.log(digital_root(0));



