# EssaFuscator

**Version 0.1.3**
- An Obfuscator that is locked on fivem compiler
- It's a tool to encrypt your code from being leaked

---
## DOCS
```
const essafuscator = require('essafuscator')
const client = new essafuscator.EF('your-api-key')
const fs = require('fs')
client.obfuscate("print('Hello World')",async function(response){
    await fs.writeFile('temp/output.lua',`${response}`,function(err){})
})
```
---

## Steps
- npm install essafuscator
- Join us on discord to generate your own api key https://discord.gg/obfuscate

## License & copyright 

©️ Aoun Abu Hassan
