"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Internet = void 0;
var Internet = /** @class */ (function () {
    function Internet() {
    }
    Internet.prototype.Internet = function () { };
    ;
    Internet.prototype.getusersCount = function () {
        return this.calculateUCount();
    };
    Internet.prototype.calculateUCount = function () {
        return 10;
    };
    return Internet;
}());
exports.Internet = Internet;
