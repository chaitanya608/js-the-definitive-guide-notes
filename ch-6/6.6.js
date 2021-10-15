/*
To demonstrate that for/in loop enumerates both own and inherited enumerable properties of an object
*/

const obj1 = {
  key11: "value11",
  key12: "value12",
  key13: "value13",
};

const obj2 = {
  key21: "value21",
  key22: "value22",
  key23: "value23",
};
obj2.prototype = obj1;

for (let prop in obj2) {
  // console.log(obj2[prop]);
  console.log(prop);
}

/*
To demonstrate that Object.keys() and for/in cannot enumerate an object created by Object.create().
Object.getOwnPropertyNames() and Reflect.ownKeys() can enumerate an object created by Object.create().
*/
const obj1 = Object.create(Object.prototype, {
  key11: {
    value: "value11",
    // enumerable: false,
  },
  key12: {
    value: "value12",
  },
  key13: {
    value: "value13",
  },
  key11: {
    value: "value14",
  },
});

console.log(Object.keys(obj1));
