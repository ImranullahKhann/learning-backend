import os from 'os'

console.log(os.hostname())
console.log(os.type())
console.log(os.arch())
console.log(os.platform())
console.log(os.freemem()/1024/1024/1024 + ' GBs')
console.log(os.totalmem()/1024/1024/1024 + ' GBs')
