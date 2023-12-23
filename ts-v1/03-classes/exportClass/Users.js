"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Internet_1 = require("./Internet");
var net = new Internet_1.Internet();
console.log("Users count who are using net is =".concat(net.getusersCount()));
