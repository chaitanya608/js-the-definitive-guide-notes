"use strict";

console.log("");

const obj1 = {
  fn1: function () {
    console.log("this in fn1: ", this); // this refers to obj1, both in strict and non-strict modes.

    function nestedFn1() {
      console.log("this in nestedFn1: ", this); // 'this' is undefined in strict mode and refers to Window object in non-strict mode.
    }
    nestedFn1();

    const arrowFnInFn1 = () => {
      console.log("this in arrowFnInFn1: ", this); // 'this' refers to obj1, bth in strict and non-strict modes.
    };
    arrowFnInFn1();
  },
  fn2: () => {
    console.log("this in fn2: ", this); // this refers to Window object, both in strict and non-strict mode.

    const nestedFn2 = () => {
      console.log("this in nestedFn2: ", this); // 'this' refers to Window object in strict mode and non-strict mode.
    };
    nestedFn2();
  },
};

obj1.fn1();
obj1.fn2();

//////////////////////////////////////////////////////////////

console.log("********************************************");
function fn1() {
  console.log("this in fn1: ", this); // 'this' is undefined in strict mode and refers to Window in non-strict mode.
}

const fn2 = () => {
  console.log("this in fn2: ", this); // 'this' refers to Window object both in strict and non-strict modes.
};

fn1();
fn2();
