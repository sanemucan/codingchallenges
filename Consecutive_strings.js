function longestConsec(strarr, k) {
    // your code
    let len = strarr.length;
    let holder = [];

    
    if( len == 0 || k > len || k <= 0){
      return "";
    }else if(len === k){
      return strarr.join("");
    }else{
      // let's remove the non-unique elements first
      let strarr1 = strarr.splice(0);
      strarr1 = uniqueArray(strarr1);
      for(var i = 0 ; i < strarr1.length ; i++){
        var el = strarr1[i];
        var l = strarr1[i].length;
        let element = {str:el,length:l};
        holder.push(element);
      }

      // use slice() to copy the array and not just make a reference

      var byLen = holder.slice(0);
      
      byLen = sortDesc(byLen);
      byLen.splice(k,byLen.length-k);
      let str = "";
      let finalArray= [];
      for(x in byLen){
        let element = {str:byLen[x].str,ind:strarr1.indexOf(byLen[x].str)};
        finalArray.push(element)
      }

      finalArray = sortAsc(finalArray);

      for(f in finalArray){
        str += finalArray[f].str;
      }

      return str;

    }

}

function sortDesc(arr){
  arr.sort(function(a,b) {
        return b.length - a.length;
       });
  return arr;
}

function sortAsc(arr){
  arr.sort(function(a,b) {
        return a.ind - b.ind;
       });

  return arr;
}

function uniqueArray(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); //abigailtheta
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) //"oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)) // ""
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) //"wlwsasphmxxowiaxujylentrklctozmymu"
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) //""
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) //"wkppv3452zzzzzzzzzzzz"
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) //""
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) //""
