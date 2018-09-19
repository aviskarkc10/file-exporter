let expect = require('chai').expect;
let checkDataForArray = require('../src/checkDataForArray').checkDataForArray;
let dataArrayTypeError = require('../src/errorMessages').dataArrayTypeError;

describe('checking file name for string', () => {
  it('should return true for empty array', () => {
    expect(checkDataForArray([])).to.equal(true);
  });
  it('should return true for an array of numbers', () => {
    expect(checkDataForArray([1, 2, 3, 4])).to.equal(true);
  });
  it('should return true for an array of objects', () => {
    expect(checkDataForArray([{ foo: 'bar' }])).to.equal(true);
  });
  it('should throw an error for a blank parameter', () => {
    expect(() => checkDataForArray()).to.throw(dataArrayTypeError);
  });
  it('should throw an error for a string', () => {
    expect(() => checkDataForArray('hello')).to.throw(dataArrayTypeError);
  });
  it('should throw an error for a function', () => {
    expect(() => checkDataForArray(() => 2 * 2)).to.throw(dataArrayTypeError);
  });
  it('should throw an error for a number', () => {
    expect(() => checkDataForArray(3)).to.throw(dataArrayTypeError);
  });
})
