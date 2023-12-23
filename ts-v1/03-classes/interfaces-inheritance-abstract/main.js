"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var coupler_1 = require("./coupler");
var humans = /** @class */ (function (_super) {
    __extends(humans, _super);
    function humans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    humans.prototype.enlightenProcedure = function () {
        // throw new Error("they are their own creators...");
        return "they are their own creators...  "; //and it will take ${enlighten.getYugs()} yugs to enlighten them`;
    };
    return humans;
}(coupler_1.enlighten));
var main = /** @class */ (function () {
    function main() {
        this.human = new humans();
        this.count = 12;
    }
    main.prototype.getDirection = function () {
        console.log(this.human.enlightenProcedure());
    };
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
m.getDirection();
