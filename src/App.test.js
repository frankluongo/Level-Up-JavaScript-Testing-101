import { total } from "./App";
import { add } from "./modules/add";

jest.mock("./modules/add", () => ({
  add: jest.fn(() => 25)
}));

// * Integration Tests
// That's when you're testing multiple functions/components at once
test("total", () => {
  expect(total(5, 20)).toBe(`$25`);
  expect(add).toHaveBeenCalledTimes(1);
  add.mockImplementation(jest.fn(() => 30));
  expect(total(5, 25)).toBe(`$30`);
  expect(add).toHaveBeenCalledTimes(2);
});

//
// Notes
//

// test("Fake Test", () => {
//   expect(true).toBeTruthy();
// });
