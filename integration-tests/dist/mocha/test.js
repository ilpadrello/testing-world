"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proxyquire_1 = __importDefault(require("proxyquire"));
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = __importDefault(require("../app"));
chai_1.default.use(chai_http_1.default);
console.log("activated");
describe("FIRST TEST", () => {
    it("return true", (done) => {
        const temp = (0, proxyquire_1.default)('../controllers/root', {
            '../lib/externalSDK': {
                default: {
                    ask: async function () {
                        return {
                            alla: "catalla"
                        };
                    }
                }
            }
        });
        console.log(temp);
        chai_1.default.request(app_1.default)
            .get('/vacances')
            .send()
            .end((err, res) => {
            chai_1.default.expect(res).to.have.status(200);
            done();
        });
    });
});
//# sourceMappingURL=test.js.map