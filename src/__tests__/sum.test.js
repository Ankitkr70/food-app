import { sum } from "../components/sum";

test("Sum of two numbers", () => {
  expect(sum(5, 5)).toBe(10);
});
