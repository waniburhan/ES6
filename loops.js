var num = 5
var factorial = 1;
for( let i = num ; i >= 1; i-- ) {
   factorial *= i ;
}
console.log(factorial);

//for..in loop

var obj = {a:1, b:2, c:3};
for (var prop in obj) {
   console.log(obj[prop]);
}

//for..of loop

for (let val of[12 , 13 , 123]) {
   console.log(val)
}

//while loop

var num = 5;
var factorial = 1;

while(num >= 1) {
   factorial = factorial * num;
   num--;
}
console.log("The factorial  is "+factorial);

//do while loop

var n = 10;
do {
   console.log(n);
   n--;
}
while(n>=0);