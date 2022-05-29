//import {RequestInfo,RequestInit} from "node-fetch";
import { option } from "./types";
const axios = require('axios');

export class EssaFuscator implements option {
    apikey: string;
    constructor(apikey:string){
        this.apikey = apikey;
    }
    obfuscate(script: string, watermark: string, encodingTypes: "emoji" | "arabic",callback:FileCallback) {
        new Promise((resolve, reject) => {              
              var config = {
                method: 'post',
                url: `https://api.essafuscator.net/v2/obfuscate/${encodingTypes}`,
                headers: { 
                  'EssaFuscatorAPIKey': this.apikey, 
                  'Content-Type': 'application/json'
                },
                data : JSON.stringify({
                    "script": script,
                    "watermark": watermark
                })
              };
              
              axios(config)
              .then(function (response:any) {
                resolve(callback(JSON.parse(JSON.stringify(response.data.obfscript))))
                console.log('Obfuscation was successful.')
              })
              .catch(function (error:any) {
                  console.log(error.response.data)
              });
        })
        
        
    }
}

