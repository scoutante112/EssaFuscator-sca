const { default: axios } = require("axios");

class EssaFuscator {
    constructor(options) {
        this.options = options;
    }
    
    async obfuscate(input,cb) {
        axios.post(`https://api-essafuscator.kryxguard.se/v2/obfuscate/:${this.options.encodingType}`,JSON.stringify({
            input: input,
            watermark: this.options.watermark,
        }),{headers:{
            'Content-Type': 'application/json',
            'EssaFuscatorAPIKey': this.options.apiKey,
        }}).then(response => {
            cb(null,response.data.output);
        }).catch(error => {
            cb(error);
        })
    }
}


module.exports = function(options){
    return new EssaFuscator(options);
}
