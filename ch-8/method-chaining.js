class Class1 {
  constructor(input1, input2) {
    this.input1 = input1;
    this.input2 = input2;
  }

  getThis() {
    return this;
  }
  x() {
    console.log("x executed");

    return this;
  }
  y() {
    console.log("y executed");

    return this;
  }
}

const class1Instance1 = new Class1();

console.log("getThis: ", class1Instance1.getThis().x().y());
