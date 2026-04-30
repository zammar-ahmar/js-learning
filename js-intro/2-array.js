const heros1 = ["superman", "batman" , "aquaman" ," flash"]
const heros2 = ["iron man ",  "spiderman", "captain america","hulk"]
 
// concat adds one or more arrray in one singular new array.
const allHeroes = heros1.concat(heros2)
console.log(allHeroes);




  const arr =[1,2,[3,4],[5,[6,7,8],9],10]
  console.log(arr);
//  flat() is an array method in JavaScript that returns 
// a new array with all sub-array elements concatenated into
//  it recursively up to a specified depth, effectively 
// reducing the nesting level of the array.
  const newArr = arr.flat(Infinity)
  console.log(newArr);
  