import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["limit", "offset"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { serialize } from '../utils';
import { SpotifyApiContext, SpotifyApiAxiosContext } from '../';

function useApiRequest(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      data = _React$useState6[0],
      setData = _React$useState6[1];

  var token = React.useContext(SpotifyApiContext);
  var axios = React.useContext(SpotifyApiAxiosContext);
  var loadData = React.useCallback(_asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var res, resData, _res;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            res = null;
            resData = null;

            if (!axios) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return axios.get(url + serialize(options), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 7:
            res = _context.sent;
            resData = res.data;
            _context.next = 17;
            break;

          case 11:
            _context.next = 13;
            return fetch(url + serialize(options), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 13:
            _res = _context.sent;
            _context.next = 16;
            return _res.json();

          case 16:
            resData = _context.sent;

          case 17:
            setLoading(false);

            if (resData.error) {
              setError(resData.error);
            } else if (res.status !== 200) {
              setError({
                status: res.status,
                message: res.statusText
              });
            } else {
              setData(resData);
              setError(null);
            }

            _context.next = 26;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            setLoading(false);
            setError(_context.t0);
            setData(null);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  })), [axios, options.ids, options.q, token, url]);
  React.useEffect(function () {
    loadData();
  }, [url, options.ids, options.q, token, loadData]);
  var loadMoreData = React.useCallback(_asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
    var res, resData, limit, offset, wantedOpts, _res2;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(data && data.next && data.items)) {
              _context2.next = 21;
              break;
            }

            setLoading(true);
            res = null;
            resData = null;
            limit = options.limit, offset = options.offset, wantedOpts = _objectWithoutProperties(options, _excluded);

            if (!axios) {
              _context2.next = 13;
              break;
            }

            _context2.next = 9;
            return axios.get(data.next + serialize(wantedOpts, true), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 9:
            res = _context2.sent;
            resData = res.data;
            _context2.next = 19;
            break;

          case 13:
            _context2.next = 15;
            return fetch(data.next + serialize(wantedOpts, true), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 15:
            _res2 = _context2.sent;
            _context2.next = 18;
            return _res2.json();

          case 18:
            resData = _context2.sent;

          case 19:
            setLoading(false);

            if (resData.error) {
              setError(resData.error);
            } else if (res.status !== 200) {
              setError({
                status: res.status,
                message: res.statusText
              });
            } else {
              setData(_objectSpread(_objectSpread({}, resData), {}, {
                items: data.items.concat(resData.items)
              }));
              setError(null);
            }

          case 21:
            _context2.next = 28;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](0);
            setLoading(false);
            setError(_context2.t0);
            setData(null);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 23]]);
  })), [axios, options.ids, options.q, url, token, data]);
  return {
    data: data,
    loading: loading,
    error: error,
    loadMoreData: loadMoreData
  };
}

export default useApiRequest;