"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
var calculator = function (state, action) {
    switch (action.type) {
        case "SUM":
            return state + action.payload;
        case "SUB":
            return state - action.payload;
        case "DIV":
            return state / action.payload;
        case "EXP":
            return Math.pow(state, action.payload);
        default:
            return state;
    }
};
exports.calculator = calculator;
//Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
