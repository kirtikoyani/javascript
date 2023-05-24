class Parent {
    useChildProperty() {
      if (this.childProperty) {
        console.log(this.childProperty);
      } else {
        console.log("Child property not set");
      }
    }
  }

  class Child extends Parent {
    constructor() {
      super();
      this.childProperty = "This is the child property";
    }
  }

  const childInstance = new Child();
  childInstance.useChildProperty(); // Output: "This is the child property"
