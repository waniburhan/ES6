function RevealHiddenOverflow(d)
{
   if( d.style.overflow == "hidden" ) { d.style.overflow = "visible"; }
   else { d.style.overflow = "hidden"; }
}


var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var retrieveX = module.getX;
console.log(retrieveX(),"sss");






document.getElementById("demo").innerHTML = myFunction(4, 3);




<!--var a = function(){-->
<!--return 2;-->
<!--}-->

const person = {
 	 	i: false,
 		 printIntroduction: function () {
 		   console.log(i,"hhhhh");
 			 }
				};


		const me = Object.create(person);
		me.i = true;
		me.printIntroduction();


function b () {
			return 3
			}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.z = 'car'


    }
    toString(){
        return '(' + this.x + ',' + this.y + ')';

    }
}

class PointTo extends Point{
    constructor(x, y, color){
        super(x,y);
        this.color = color;
    }
    toString(){
    return super.toString() + ' in ' + this.color;

    }



}

let cp = new PointTo(6,8,'red');
document.getElementById("demo3").innerHTML = cp.toString();
function search(c){
    this.c= c;
    var names = ['aamir', 'aatif','burhan','umer'];
    var iterator1 = names.entries();
    console.log(names.indexOf("burhan"),"indexof");
    console.log(names.join("-"),"join");
    var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
    console.log(animals.lastIndexOf('Dodo'),"lastindexof()");
    console.log(animals.pop(),"pop function");
    console.log(animals);
    console.log(animals.push("cow"),"push function");
    console.log(animals,"push()");


    console.log(iterator1.next().value, "array.entries()");
    console.log(iterator1.next().value, "array.entries()");
    console.log(iterator1.next().value, "array.entries()");
    console.log(iterator1.next().value, "array.entries()");

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

    var num = Array.of(1,2,3,4);
    console.log(num.fill(3,3,5),"fill()");
    console.log(num.every(isBelowThreshold),"every()");
    console.log(num.find(s => s>2),"find()");
    console.log(num.findIndex(s => s>2),"findIndex()");


    console.log(num.concat(Array.of(5,6,7)),"concat");
    console.log(num.copyWithin(0, 3, 4),"copy within");


    console.log(Array.isArray(num), "is array function");
    var result = names.filter(s => s.includes(this.c));
    console.log(result);
    var resss = num.map(s =>[s*2]);
    <!--console.log(num.flatMap(s =>[s*2]),"flatmap()");-->
    var re = num.forEach(s => s*3);
    names.forEach(function(s) {
                                            if(s===this.c){
                                                                console.log("true1")
                                                            }
                                         });
    var resl = names.map(function(s) { if(s===c){
                                        console.log(s, "map func");

                                        }
                                        });

    console.log(re, "for each");
    console.log(resss, "map function");

    const array1 = [1, 2, 3, 4];
    console.log(array1.reduce((accumulator, currentValue) => accumulator * currentValue), "reduce()");
    var rev = ['one', 'two', 'three'];
    rev.reverse();
    console.log(rev,"reversed");
    console.log(rev.shift(),"shift()",rev);
    console.log(animals);

    console.log(animals.slice(2),"slice.....");

    var dta = [1,2,3,4,5,6,7,8,9];
    var sum = (s=> s == 9);
    console.log(dta.some(sum),"some");
var sortArray = [1, 21, 30, 4];
console.log(sortArray.sort());
console.log(sortArray.sort(CompareForSort));
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,'feb');
console.log(months);
months.splice(4,1,'May');
console.log(months);
var roadPoem = `You have the right to be you
       .

          pop
          You can only be you when you do your best.`
console.log(roadPoem);
<!--document.write(roadPoem);-->





function CompareForSort(first, second)
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1;
}

var object = {
  func2: function(a,b) {
    return a + b;
  },
  fun: function(c,d) {
      return c * d;

},
  fu: function(e,f) {
        return e % f;

  }
}

console.log(object.func2(1,2));
console.log(object.fun(1,2));
console.log(object.fu(1,2));
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({}, object1);

console.log(object2.c,"objects assign")
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`, " ...create new object...");
  }
};

const me = Object.create(person);

me.name = "Matthew";
me.isHuman = true;
me.printIntroduction();

const obj = {};

Object.defineProperties(obj, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(obj.property1,"define properties");
console.log(Object.entries(object1)[1],"object entries");

<!--document.writeln((new Date("6/9/2010")).toUTCString());-->
var date = new Date('4-1-2015');
<!--document.writeln(date.getDay()+ date.getMonth()+","+date.getFullYear());-->
    return result;

}

    var testfunc = function(t1){
    var list = [
    { date: '12/1/2011', reading: 3, id: 20055 },
    { date: '13/1/2011', reading: 5, id: 20053 },
    { date: '14/1/2011', reading: 6, id: 45652 }
                ];
     loop: {
             for( let i=0; i<list.length; i++)
             {
                <!--alert(list[i].id);-->
             }
           }
       for(var key in list) { console.log(list[key].date) }

 function Person(name) {
        this.name = name;
    }
    Person.prototype = {
        describe: function() {
            return "Name: "+this.name;
        }
    };
    var person = new Person("Jane");
    for(var key in person) {
        console.log(key);
        console.log(person);

    }
    document.getElementById("demo").innerHTML = person.describe();

return t1;
}
document.getElementById("demo2").innerHTML = testfunc("testfunction");
