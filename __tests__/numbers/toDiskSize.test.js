import '../../src/numbers/toDiskSize';

describe('Add only if polyfill not exist', () => {
  it('should call toDiskSize if no toDiskSize polyfill exist', () => {
    const spy = jest.spyOn(Number.prototype, 'toDiskSize');
    Number(100).toDiskSize(2);
    expect(spy).toHaveBeenCalled();
  });
});

describe('Number to disk size poyfill', () => {
  it('should return 1024 Bytes to 1KB', () => {
    expect(Number(100).toDiskSize(2)).toBe('100 Bytes');
    expect(Number(1024).toDiskSize(2)).toBe('1 KB');
    expect(Number(2048).toDiskSize(2)).toBe('2 KB');
    expect(Number(3072).toDiskSize(1)).toBe('3 KB');
    expect(Number(4096).toDiskSize(0)).toBe('4 KB');
    expect(Number(2048).toDiskSize()).toBe('2 KB');
    expect(Number(2048 * 1024).toDiskSize(2)).toBe('2 MB');
  });
});
