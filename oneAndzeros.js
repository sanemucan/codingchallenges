/*
  Given an array of one's and zero's convert the equivalent binary value to an integer.
  Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1
  Examples:
  Testing: [0, 0, 0, 1] ==> 1
  Testing: [0, 0, 1, 0] ==> 2
  Testing: [0, 1, 0, 1] ==> 5
  Testing: [1, 0, 0, 1] ==> 9
  Testing: [0, 0, 1, 0] ==> 2
  Testing: [0, 1, 1, 0] ==> 6
  Testing: [1, 1, 1, 1] ==> 15
  Testing: [1, 0, 1, 1] ==> 11
*/


const binaryArrayToNumber = arr => {
  // your code
  
  // length - index -1
  // 1 0 0 0
  // 0 1 2 3
  // 3 2 1 0
  let array = [];
  let len = arr.length;
  
  for (var i = 0 ; i < len ; i++) {
      let entry = {val:arr[i] ,power:(len-i-1) };
      array.push(entry);
  }

  let result = 0;

  for(x in array){
    result += array[x].val * Math.pow(2,array[x].power);
  }
  return result;
};
