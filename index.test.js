const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.addHead("monkey head");
    expect(stack.dog).toEqual("monkey head");
  });
  // add more tests here...
});
