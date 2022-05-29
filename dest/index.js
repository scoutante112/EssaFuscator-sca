"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EssaFuscator = void 0;
const axios = require('axios');
class EssaFuscator {
    apikey;
    constructor(apikey) {
        this.apikey = apikey;
    }
    obfuscate(script, watermark, encodingTypes, callback) {
        new Promise((resolve, reject) => {
            var config = {
                method: 'post',
                url: `https://api.essafuscator.net/v2/obfuscate/${encodingTypes}`,
                headers: {
                    'EssaFuscatorAPIKey': this.apikey,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "script": script,
                    "watermark": watermark
                })
            };
            axios(config)
                .then(function (response) {
                resolve(callback(JSON.parse(JSON.stringify(response.data.obfscript))));
                console.log('Obfuscation was successful.');
            })
                .catch(function (error) {
                console.log(error.response.data);
            });
        });
    }
}
exports.EssaFuscator = EssaFuscator;
//# sourceMappingURL=index.js.map