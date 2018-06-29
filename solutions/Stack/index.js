// 1 (ES5 version)
function Stack() {
  this.data = [];
  this.push = function (item) {
    this.data.push(item);
  }
  this.pop = function () {
    return this.data.pop();
  }
  this.peek = function () {
    return this.data[this.data.length - 1];
  }
};

// 2 (ES6 version)
class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
