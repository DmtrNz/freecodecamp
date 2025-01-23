"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
var calculator = function (state, action) {
    switch (action) {
        case "SUM":
            return state + action.payload;
        case "SUB":
            return state - action.payload;
        case "DIV":
            return state / action.payload;
        default:
            return state;
    }
};

console.log(calculator())
