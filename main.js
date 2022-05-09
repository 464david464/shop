const args = process.argv.slice(2);

const readFn = require("./read");
const createFn = require("./create.js");
const updateFn = require('./update');
const deleteFn = require('./delete');

const operation = args[0];

switch (operation) {
  case "create":
    const newProduct = args[1];
    if (newProduct === undefined) {
        console.log("need a object");
        
    }
    createFn(JSON.parse(newProduct));
    break;

  case "read":
    readFn();
    break;

    case "update":
        const updateProduct = JSON.parse(args[1]);
        if(updateProduct === undefined) console.log("need a object");
        updateFn(updateProduct);
        break;

    case "delete":
      const deleteOperation = args[1];
      deleteFn(deleteOperation)
      break;

  default:
    console.log("only CRUD");
    break;
}