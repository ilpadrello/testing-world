import external from './lib/externalSDK'
(async () => {
    console.log("principale", await external.ask());
})();