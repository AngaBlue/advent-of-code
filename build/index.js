"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computer_1 = require("./modules/computer");
const computerInput_json_1 = __importDefault(require("./computerInput.json"));
console.log(computer_1.inverseCompute(computerInput_json_1.default, 19690720));
