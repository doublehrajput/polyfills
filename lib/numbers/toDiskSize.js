"use strict";

if (typeof Number.prototype.toDiskSize !== 'function') {
  Number.prototype.toDiskSize = function () {
    var decimals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return toDiskSize.call(this, decimals);
  };
}

var toDiskSize = function toDiskSize(decimals) {
  var SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  for (var i = 0, r = Number(this), b = 1024; r >= b; i++) {
    r /= b;
  }

  return ''.concat(parseFloat(r.toFixed(decimals)), ' ').concat(SIZES[i]);
};
