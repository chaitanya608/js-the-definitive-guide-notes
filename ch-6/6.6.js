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
// comment
