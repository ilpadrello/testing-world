"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vacances = exports.hb = void 0;
const pjson = require("../../package.json");
const externalSDK_1 = __importDefault(require("../lib/externalSDK"));
const hb = async (req, res) => {
    res.json({
        status: 'ok',
        version: pjson.version
    });
};
exports.hb = hb;
const vacances = async (req, res) => {
    const response = await externalSDK_1.default.ask();
    res.send(JSON.stringify(response));
};
exports.vacances = vacances;
//# sourceMappingURL=root.js.map