/*
To demonstrate that if we spread a source object in to a target object, prototype of the source object will also be copied to the target.
*/

const x = {
  keyx1: "valuex1",
  keyx2: "valuex2",
};

const y = {
  keyy1: "valuey1",
  keyy2: "valuey2",
};
y.prototype = x;

const z = {
  keyz1: "valuez1",
  keyz2: "valuez2",
  ...y,
};

console.log(z);
console.log(z.prototype);
