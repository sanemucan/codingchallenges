/*
Construct a function union that compares input arrays and returns a new array that contains all elements. 
If there are duplicate elements, only add it once to the new array. 
Preserve the order of the elements starting from the first element of the first input array. 
BONUS: Use reduce!

*/

var res = [];

function union(...theArgs) {
   var obj = [];
   var reduced = theArgs.reduce((a,b,c) => {
       var counter = 1;
       b.forEach( num => {
           a[num] = a[num] || {number:num, count:0, array:c, index: counter};
           counter++;
           a[num].count++;
       }
            
       );
       return a;
   },obj)
    
     obj.sort((a,b) => {
        return a.array === b.array ? a.index - b.index : a.array - b.array;
     });

     res = obj.map(o => {
         return o.number;
     })


     return res;

}
union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])
// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]