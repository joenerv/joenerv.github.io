function sayName(name) {
    let message = `my name is ${name}`;
    return message;
}

let assert = require('chai').assert

describe('sayName', function() {

    it('получаем фразу с новым именем', function(){
        assert.typeOf(sayName('Ivan'), 'string')
    });
});