"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const externalSDK_1 = __importDefault(require("./lib/externalSDK"));
(async () => {
    console.log("principale", await externalSDK_1.default.ask());
})();
//# sourceMappingURL=index.js.map