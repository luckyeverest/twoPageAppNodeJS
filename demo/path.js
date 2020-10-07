const path = require('path')//подключаем встроеный модуль path, назвать перменую можно как угодно

console.log("название файла:", path.basename(__filename))//стращивает строку и выводит название файла

console.log("название дириктория:", path.dirname(__filename))// сращиваем строку и выводим дирикторию

console.log("Расширение файлы", path.extname(__filename))//выводим в консоль расширение файла ,вызываем модуль path, и вызываем метод extname

console.log('Parse', path.parse(__filename))// содержит ключи с параметрами

console.log(path.join(__dirname, 'server', 'index.html'))// формируем путь

