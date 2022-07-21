# EssaFuscator

**Version 0.1.8**
- An Obfuscator that is locked on fivem compiler
- It's a tool to encrypt your code from being leaked

---
## DOCS
```
const fs = require('fs')
const EssaFuscator = require('essafuscator')({
    apiKey:'',
    encodingType:'',
    watermark:''
})
EssaFuscator.obfuscate("print('hii')",function(response){
    fs.writeFile('out.lua',response,function(err){})
})
```
---

## Steps
- npm install essafuscator
- Join us on discord to generate your own api key https://discord.gg/obfuscate

## License & copyright 

©️ Aoun Abu Hassan
