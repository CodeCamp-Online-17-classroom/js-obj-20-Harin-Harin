let calculator = {
  
  read() {
      this.a = +prompt("Enter a number:");
      this.b = +prompt("Enter b number:");
  },

  sum() {
      return this.a + this.b;
  },

  mul() {
      return this.a * this.b;
  }

};

calculator.read();
alert("Sum: " + calculator.sum());
alert("Mul: " + calculator.mul());
