const path = require('path');

module.exports={

    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname,"dis/assets"),
        filename:"bundel.js"
    }
};