/*
"Property assignment examines the prototype chain only to determine whether ther assignment is allowed."
Following code tests this statement.
 */

const obj1 = Object.create(Object.prototype, {
	key1: {
		value: "value1",
		enumerable: true,
		writable: false,
		configurable: false,
	},
});

const obj2 = Object.create(obj1, {
	key2: {
		value: "value2",
		enumerable: true,
	},
});
obj2.key1 = "newValue1";

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);
console.log("obj2.key1: ", obj2.key1);
console.log(obj2.hasOwnProperty("key1"));

/*
Here it is observed that if obj1.key1 is not writable then we can't set key1 as an own property also to obj2
*/

// comment
