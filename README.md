# EssaFuscator

**Version 0.1.8**
- An Obfuscator that is locked on fivem compiler
- It's a tool to encrypt your code from being leaked

---
## DOCS
```
const fs = require('fs')
const {EssaFuscator} = require('essafuscator-api')
const client = new EssaFuscator('your-api-key')
client.obfuscate("print('hi')",'watermark','emoji | arabic',function(res){
    fs.writeFile('out.lua',res,function(err){})
})
```
---

## Steps
- npm install essafuscator
- Join us on discord to generate your own api key https://discord.gg/obfuscate

## License & copyright 

©️ Aoun Abu Hassan
