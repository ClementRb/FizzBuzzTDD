import { FizzBuzz } from './index';
import { expect } from 'chai';
import 'mocha';

describe("Fizz buzz tests", function() {
  it("should return Fizz if dividable by 3", function() {
    expect(FizzBuzz(3)).to.equal('Fizz')});
});
