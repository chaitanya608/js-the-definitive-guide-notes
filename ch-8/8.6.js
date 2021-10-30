/*
JavaScript uses "Lexical Scoping". This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.
*/

const x = "x";

function fn() {
  console.log(x);
  console.log(y); // able to read y if it is declared before invoking fn, but throws ReferrenceError if y is declared after invoking fn.
}

const y = "y";

fn();
