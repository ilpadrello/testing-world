"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const options = {
    method: 'GET',
    url: 'https://calendrier.api.gouv.fr/jours-feries/metropole.json',
};
const ask = async function () {
    try {
        console.log("ORIGINAL");
        let result = await axios_1.default.request(options);
        return result.data;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
exports.default = {
    ask
};
//# sourceMappingURL=externalSDK.js.map