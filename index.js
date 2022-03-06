const saltshani1 = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class EF {
  /**
   * @param {*} api_key
 */
  constructor(api_key) {
    this.api_key = api_key;
  }
  /**
   * @param {string} script
 * @param {FileCallback} callback  - You can use filesystem
 * * @param {string} watermark  - Your own watermark
 */
  obfuscate(script,watermark,callback){
    if(!script | !this.api_key) return console.log('Something is missing.....')
      if(script && this.api_key){
        saltshani1('https://obfuscate.essaprime.xyz/', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            script: script,
            watermark: watermark,
            apikey: this.api_key,
        })
    })
    .then(res => {
        return res.text()
    })
    .then(async function (response) {
          var file = JSON.parse(response)
          callback(file.obfscript)
    })
    }
  }
}


module.exports.EF = EF;

