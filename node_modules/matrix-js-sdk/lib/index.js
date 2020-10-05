"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var matrixcs = _interopRequireWildcard(require("./matrix"));

Object.keys(matrixcs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return matrixcs[key];
    }
  });
});

var utils = _interopRequireWildcard(require("./utils"));

var _request = _interopRequireDefault(require("request"));

/*
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
matrixcs.request(_request.default);
utils.runPolyfills();

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const crypto = require('crypto');

  utils.setCrypto(crypto);
} catch (err) {
  console.log('nodejs was compiled without crypto support');
}

var _default = matrixcs;
exports.default = _default;