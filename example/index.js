"use strict";

const dataTypes = require("../lib");

console.log(dataTypes);
// =>
// [
//     Number
//   , String
//   , Boolean
//   , Object
//   , Function
//   , Array
//   , RegExp
//   , undefined
// ];

console.log(!!~dataTypes.indexOf(Function));
// => true
