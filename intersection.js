/*
  CODESMITH challenge
  Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. 
  BONUS: Use reduce!
*/

var res = [];

function intersection(...theArgs) {
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
   },[])

       reduced.forEach( c => {
        if(c.count === theArgs.length){
            obj.push({number:c.number,array:c.array, index:c.index});
        }
        
     })
    
     obj.sort((a,b) => {
        return a.array === b.array ? a.index - b.index : a.size - b.size;
     });

     res = obj.map(o => {
         return o.number;
     })


     return res;

}


//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
