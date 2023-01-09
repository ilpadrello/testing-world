import proxyquire from 'proxyquire';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
console.log("activated");

describe("FIRST TEST", () => {
    it("return true", (done) => {
        const temp = proxyquire('../controllers/root', {
            '../lib/externalSDK': {
                default: {
                    ask: async function () {
                        return {
                            alla: "catalla"
                        }
                    }
                }
            }
        })
        console.log(temp)
        chai.request(app)
            .get('/vacances')
            .send()
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                done();
            })
    })
})