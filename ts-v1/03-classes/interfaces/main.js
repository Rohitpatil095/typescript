"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main = /** @class */ (function () {
    function main() {
        this.count = 12;
    }
    main.prototype.getCount = function () {
        throw new Error("Method Yet to implement.. still work in progress");
    };
    main.prototype.getNames = function () {
        console.log(this.count);
    };
    return main;
}());
var m = new main();
m.getNames();
