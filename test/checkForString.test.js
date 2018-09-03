let expect = require('chai').expect;
let { checkDataForString, checkFileNameForString } = require('../src/checkForString');

describe('checking data for string', () => {
  it('should return undefined as data exists', () => {
    expect(checkDataForString('flags.csv')).to.equal(undefined);
  })
  it('should return undefined as data exists', () => {
    expect(checkDataForString('flags')).to.equal(undefined);
  })
  it('should throw an error for non-existant data', () => {
    expect(() => checkDataForString()).to.throw('The data should be a string.');
  })
  it('should throw an error for array as data', () => {
    expect(() => checkDataForString([1, 2, 3])).to.throw('The data should be a string.');
  })
  it('should throw an error for number as data', () => {
    expect(() => checkDataForString(10000)).to.throw('The data should be a string.');
  })
  it('should throw an error for object as data', () => {
    expect(() => checkDataForString({ name: 'Mocha Test' })).to.throw('The data should be a string.');
  })
  it('should throw an error for function as data', () => {
    expect(() => checkDataForString(() => 5)).to.throw('The data should be a string.');
  })
  it('should throw an error for function as data', () => {
    expect(() => checkDataForString(() => '5')).to.throw('The data should be a string.');
  })
})

describe('checking filename for string', () => {
  it('should return undefined as filename exists', () => {
    expect(checkFileNameForString('flags.csv')).to.equal(undefined);
  })
  it('should return undefined as filename exists', () => {
    expect(checkFileNameForString('flags')).to.equal(undefined);
  })
  it('should throw an error for non-existant filename', () => {
    expect(() => checkFileNameForString()).to.throw('The filename should be a string.');
  })
  it('should throw an error for array as filename', () => {
    expect(() => checkFileNameForString([1, 2, 3])).to.throw('The filename should be a string.');
  })
  it('should throw an error for number as filename', () => {
    expect(() => checkFileNameForString(10000)).to.throw('The filename should be a string.');
  })
  it('should throw an error for object as filename', () => {
    expect(() => checkFileNameForString({ name: 'Mocha Test' })).to.throw('The filename should be a string.');
  })
  it('should throw an error for function as filename', () => {
    expect(() => checkFileNameForString(() => 5)).to.throw('The filename should be a string.');
  })
  it('should throw an error for function as filename', () => {
    expect(() => checkFileNameForString(() => '5')).to.throw('The filename should be a string.');
  })
})