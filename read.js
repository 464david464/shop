const fs = require("fs");

const read = () => {
 const cart = fs.readFileSync("./cart.json", "utf-8");

 console.log(cart);

 return JSON.parse(cart);
}

module.exports = read;