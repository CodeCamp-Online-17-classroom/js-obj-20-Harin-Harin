let calculator = {
  
  read() {
      a = +prompt("Enter a number:");
      b = +prompt("Enter b number:");
  },

  sum() {
      return a + b;
  },

  mul() {
      return a * b;
  }

};

calculator.read();
alert("Sum: " + calculator.sum());
alert("Mul: " + calculator.mul());
