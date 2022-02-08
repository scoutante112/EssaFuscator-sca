const saltshani1 = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
class EF {
  constructor(api_key) {
    this.api_key = api_key;
  }
  obfuscate(script,callback){
    new Promise((resolve, reject) => {
    if(!this.api_key) return console.log('Invalid API KEY')
    if(!script) return console.log('Invalid Script')
      if(script && this.api_key){
        saltshani1('https://obfuscate.essaprime.xyz/', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            script: script,
            apikey: this.api_key,
        })
    })
    .then(res => {
        return res.text()
    })
    .then(async function (response) {
          var response = JSON.parse(response)
          callback(response.obfscript)
    })
    }
  });
  }
}


module.exports.EF = EF;

