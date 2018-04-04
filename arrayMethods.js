console.log(Array.of(7));


//concat

var a = ["a", "b", "c"];
var n = [1, 2, 3];
var ap = alpha.concat(n);
console.log("alphaNumeric : " + ap;


//every
function isBigEnough(element, index, array) {
   return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("Test Value : " + passed );

//filter

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word => word.length > 6);

//find

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);

//for each
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});


//includes

var array1 = [1, 2, 3];

console.log(array1.includes(2));
var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('at'));

//join
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

 //map

 var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);



