const os = require('os')

console.log('Операционая система', os.platform())

console.log('архитектура процессора', os.arch())

console.log('инф по процессору', os.cpus())

console.log('свободная память', os.freemem())

console.log('всего памяти', os.totalmem())

console.log('Домашняя дириктория', os.homedir())

console.log('всего включен', os.uptime())

