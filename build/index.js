"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computer_1 = __importDefault(require("./modules/computer"));
const computerInput_json_1 = __importDefault(require("./computerInput.json"));
computerInput_json_1.default[1] = 12;
computerInput_json_1.default[2] = 2;
console.log(computer_1.default(computerInput_json_1.default)[0]);
//console.log(countFuel(sampleData))
