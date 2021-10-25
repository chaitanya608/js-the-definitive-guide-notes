"use strict";

console.log("");

const obj1 = {
  fn1: function () {
    console.log("this in fn1: ", this); // this refers to obj1, both in strict and non-strict mode.
  },
  fn2: () => {
    console.log("this in fn2: ", this); // this refers to Window object, both in strict and non-strict mode.
  },
};

obj1.fn1();
obj1.fn2();

//////////////////////////////////////////////////////////////

function fn1() {
  console.log("this in fn1: ", this); // 'this' is undefined in strict mode and refers to Window in non-strict mode.
}

const fn2 = () => {
  console.log("this in fn2: ", this); // 'this' refers to Window object both in strict and non-strict modes.
};

fn1();
fn2();
