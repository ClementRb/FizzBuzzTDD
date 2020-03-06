import { FizzBuzz } from "./index";
import { expect } from "chai";
import "mocha";

describe("Fizz buzz tests", function() {
  it("should return Fizz if divisible by 3", function() {
    expect(FizzBuzz(9)).to.equal("Fizz");
  });

  it("should return Fizz if divisible by 5", function() {
    expect(FizzBuzz(10)).to.equal("Buzz");
  });
});
