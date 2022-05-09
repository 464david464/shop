const fs = require('fs');
const read = require('./read');

function deleteFn(deleteKey) {
    const cart = read();

    if(!Object.keys(cart).includes(deleteKey)) {
        console.log(`key ${deleteKey} didn't exists`);
    } else {
        delete cart.deleteKey
        
        console.log(JSON.stringify(cart) + ' after');
    }
}

module.exports = deleteFn