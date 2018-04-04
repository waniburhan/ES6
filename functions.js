 var a = function () {
			         return 2
			       }
function b () {
			return 3
			}
var obj = {
			x:20,
			getValue(){
				return this.x
					}

			}

  var absValue = (number) => {
  			if (number < 0) {
   			 return -number;
 				 }
 			 return number;
					}
  class Abc{
		constructor(x,y){
					 this.x = x
					 this.y = y
				   }
  		testFunction(){
  					return this.x + this.y;
 				 }
              	  }
      var sum = new Function('a', 'b', 'return a + b');