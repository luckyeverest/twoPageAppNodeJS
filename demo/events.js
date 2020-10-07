const EventEmitter = require('events')//позволяет создать объекты от данного класса , и с помощью них могу диспачить события

/* const emitter = new EventEmitter()

emitter.on('anything', (data) => {//on позволяет прослушивать события
    console.log('ON :anything', data)
})

emitter.emit('anything', { a: 1 })//первый параметр это событие , второй это объект
emitter.emit('anything', { b: 2 })
// можно положить в setTimeout для имитации асинхроной операции

setTimeout(() => {
    emitter.emit('anything', { c: 3 })
}, 2000)
 */

/* class Dispatcher extends EventEmitter {//класс dispather наследуется от eventemitter
    subscribe(eventName, cb) {//в методе subscribe первый параметр нейм второй call back
        console.log('[Subscribe...!]')
        this.on(eventName, cb)//обращаемся к контексту this и методу on. on  доступен благодоря наследованию от eventEmitter
    }
    dispatch(eventName, data) {
        console.log('[Dispatching...!]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()
//прорядок важен dispacher работает только после подключения subscribe
dis.subscribe('aa', data => {//вызываем метод subscribe который принимает параметры name и data
    console.log('ON:aa', data)
})

dis.dispatch('aa', { aa: 22 })


 */





