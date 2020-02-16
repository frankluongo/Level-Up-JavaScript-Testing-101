import { add } from "./add";

// * Unit Tests
// Because it only tests one thing
test("Add Fn returns 4 when given 2 and 2", () => {
  expect(add(2, 2)).toBe(4);
  expect(add(2, 4)).toBe(6);
});
