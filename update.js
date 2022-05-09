const fs = require('fs');
const read = require('./read');

function update(updateingProduct) {
    
    const cart = read()

    const key = Object.keys(updateingProduct)[0]

    if(!Object.keys(cart).includes(key)) {
        console.log(`key ${key} didn't exists`);
    } else {
        cart[key] = updateingProduct;

        fs.writeFileSync('./cart.json', JSON.stringify(cart))
    }
}



module.exports = update;