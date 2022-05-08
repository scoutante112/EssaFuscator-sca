const saltshani1 = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


class EF {
  /**
   * @param {string} api_key
 */
  constructor(api_key) {
    this.api_key = api_key;
  }
  
  /**
   * @param {string} script
 * @param {FileCallback} callback  - You can use filesystem
 * @param {string} watermark  - Your own watermark
 * @param {string} EncodingType -- arabic / emoji
 */


//add encodign 
  obfuscate(script,watermark,EncodingType,callback){
    if(!script | !this.api_key | !EncodingType ) return console.log('Something is missing.....')
      if(script && this.api_key){
        saltshani1(`https://api.essafuscator.net/v2/obfuscate/${EncodingType}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "EssaFuscatorAPIKey":`${this.api_key}`
        },
        body: JSON.stringify({
            script: script,
            watermark: watermark,
        })
    })
    .then(res => {
      if(res.status === 200){
        return res.text()
      }else{
        throw(new Error('Something went wrong'))
      }
    })
    .then(async function (response) {
          var file = JSON.parse(response)
          callback(file.obfscript)
    })
    }
  }
}


module.exports.EF = EF;

