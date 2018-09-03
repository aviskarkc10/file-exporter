let expect = require('chai').expect;
let checkFileNameForString = require('../src/checkForString').checkFileNameForString;

describe('checking file name for string', () => {
  it('should return undefined as filename exists', () => {
    expect(checkFileNameForString('flags.csv')).to.equal(undefined);
  })
  it('should throw an error for non-existant filename', () => {
    expect(() => checkFileNameForString()).to.throw('The filename should be a string.');   
  })
})
