export function serialize(obj) {
  var isStartingFromMiddle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var str = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key])));
    }
  }

  return str.length > 0 && !isStartingFromMiddle ? '?' + str.join('&') : '';
}