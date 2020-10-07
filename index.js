/* //(function (exports, require, module, __dirname, __filename) { - по умолчанию все обернуто
const chalk = require('chalk')// подключаем модуль чрез абсолютный путь
const text = require('./data')// для импорта создаем переменую и указываем относительный путь

console.log(chalk.blue(text)) //вывод в консоль текста , с цветом blue
console.log(__dirname)//описывать путь до текущей папки
console.log(__filename)//путь до файла и сам файлы
//})   */

// -------------------------------------------server--------------------------------------------
const http = require('http')//подключаем модуль 
const fs = require('fs')
const path = require('path')
const { error } = require('console')

const server = http.createServer((req, res) => {//обращаемся к http и вызываем метод createServer которой содержит в себе call back котороый принимает   
    //req получаем инфу которорую клиент тправил на сервер,res отвечает за ответ сервера

    /*     console.log(req.url)//узнаем url
     */
    /* if (req.url === '/') {// если url / то переходим в дирикьорию public и открываем index html
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err//если ошибка то выводим ее если нет то
            }
            res.writeHead(200, {//указываем статус ответа (200 все отработало,header меняем)
                'Content-type': 'text/html'
            })
            res.end(data)//метод end завершает ответ с сервера
        })
    }

    else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.end(data)
        })
    } */
    // оптимизируем код 
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)// создаем уникальный проводник 

    const ext = path.extname(filePath)//переменая для добавления расширения

    if (!ext) { filePath += '.html' }// если ext не имеет расширея то добавляем .html


    console.log(filePath)

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(content)
        }
    })
})

// запуст с порта установленого если нет то с 3000
const PORT = process.env.PORT || 3000


//создаем переменую сервер для того что бы сервер работал определеное время
server.listen(PORT, () => {
    console.log(`start server on ${PORT}`)
})//listen принимает порт и функцию которая будет вызвана после вкл сервера










