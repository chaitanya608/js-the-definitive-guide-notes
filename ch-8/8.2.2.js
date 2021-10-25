/*
To demonstrate that functions defined as expressions are not hoisted unlike functions defined as declarations.
*/

fn1();

// const fn1 = () => {
//   // Calling this function before initializing it throws Uncaught ReferenceError
//   console.log("arrow function defined in expression form");
// };

// const fn1 = function () {
//   // Calling this function before initializing it throws Uncaught ReferenceError
//   console.log("function defined in expression form");
// };

function fn1() {
  // Calling this function before initializing it doesn't throw any error as it is hoisted.
  console.log("function defined in declaration form");
}
