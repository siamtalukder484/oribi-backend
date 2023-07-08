const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect('mongodb+srv://backendsiam:siam1256@shop-pay.4qy3mwr.mongodb.net/oribi-backend')
  .then(() => console.log('Connected DB'));
}

module.exports = dbConnection