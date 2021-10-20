/*
To demonstrate that functions defined with expressions cannot be invoked before they are defined, where as functions defined using declaration form can be invoked from code that appears above the definition statement.
*/

declarationFormFn();
expressionFormFn();

function declarationFormFn() {
  console.log("log in declarationFormFn");
}

const expressionFormFn = function () {
  console.log("log in expressionFormFn");
};

// expressionFormFn();
