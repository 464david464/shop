const fs = require('fs');
const read = require('./read');

function create(product) {
    
    const cart = read()

    if(Object.keys(cart).includes(Object.keys(product)[0])) {
        throw new Error(`the key ${Object.keys(product)[0]} Already exists`)
    } else {
        const newCart = {...cart, ...product}
    
    fs.writeFileSync('./cart.json', JSON.stringify(newCart))
    }
    
    
}

module.exports = create;