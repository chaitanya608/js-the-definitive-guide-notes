/*
To test the invocation context of a function in case of "Constructor Invocation"
*/

// function fn1() {
//   /**
//    * Do Something
//    */
//   console.log(`scenario: returns an object.
//   Invocation context is set to the object that is returned.
//   `);

//   return {
//     key1: "value1",
//     key2: "value2",
//   };
// }

function fn1() {
  /**
   * Do Something
   */
  console.log(`scenario: returns with no value, returns a primitive value.
  Return value is ignored and the new object is used as the value of the invocation.`);

  return;
  // return false;
}

const fn1Instance1 = new fn1();

console.log("fn1Instance1: ", fn1Instance1);
