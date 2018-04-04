var module = {
				  x: 42,
				  getX: function() {
				    return this.x;
					  }
					}

				var retrieveX = module.getX;
				console.log(retrieveX());

				var boundGetX = retrieveX.bind(module);
				console.log(boundGetX());

																						//	(bind)
 const object1 = {
 		 a: 1,
 		 b: 2,
	      c: 3					//...........(assign)
		};

		const object2 = Object.assign({}, object1);
		console.log(object2.c);

 const person = {
 	 	i: false,
 		 printIntroduction: function () {
 		   console.log(i);
 			 }
				};				    //............(create)

		const me = Object.create(person);
		me.i = true;
		me.printIntroduction();

 	const object1 = {};
		Object.defineProperties(object1, {
		  property1: {
		         value: 42,
		          writable: true
				  },
		         property2: {}
					});

		 console.log(object1.property1);
								//........(defineProperties)

	const object1 = { foo: 'bar', baz: 42 };
		console.log(Object.entries(object1)[1]);

								         // .......(entries)
   const object1 = {
 				 property1: 42
					 };
		const object2 = Object.freeze(object1);
		object2.property1 = 33;
		console.log(object2.property1);

								        //     .....(freeze)
	   const object1 = {
			  a: 1,
			  b: 2,
			  c: 3
						};

		console.log(Object.getOwnPropertyNames(object1));

								//....(getOwnPropertyNames)