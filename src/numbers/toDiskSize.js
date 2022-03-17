if (typeof Number.prototype.toDiskSize !== 'function') {
  Number.prototype.toDiskSize = function (decimals = 1) {
    return toDiskSize.call(this, decimals);
  };
}

const toDiskSize = function (decimals) {
  let SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  for (var i = 0, r = Number(this), b = 1024; r >= b; i++) {
    r /= b;
  }
  return `${parseFloat(r.toFixed(decimals))} ${SIZES[i]}`;
};
