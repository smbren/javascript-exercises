const isEven = require('./index');

describe('IsEven function', () => {
  test('should exists', () => {
    expect(isEven).toBeDefined();
    expect(typeof isEven).toEqual('function');
  });
  
  test('234', () => {
    expect(isEven(234)).toBeTruthy();
  });
  
  test('-2', () => {
    expect(isEven(-2)).toBeTruthy();
  });
  
  test('33', () => {
    expect(isEven(33)).toBeFalsy();
  });
  
  test('3092348903.28409238409', () => {
    expect(isEven(3092348903.28409238409)).toBeFalsy();
  });
  
  test('.15', () => {
    expect(isEven(.15)).toBeTruthy();
  });
});
