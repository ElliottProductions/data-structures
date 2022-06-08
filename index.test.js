const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.addHead("monkey head");
    expect(stack.dog).toEqual("monkey head");
  });

  // add more tests here...
  it("rewind should return a reversed stack/array ", () => {
    const stack = new Stack([1,2,3]);
 
    expect(stack.rewind).toEqual([3,2,1]);
  });
  // add more tests here...
});
