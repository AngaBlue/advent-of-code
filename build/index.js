"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countFuel_1 = __importDefault(require("./modules/countFuel"));
const modules_json_1 = __importDefault(require("./modules.json"));
console.log(countFuel_1.default(modules_json_1.default));
