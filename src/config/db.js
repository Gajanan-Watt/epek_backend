const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    // "mongodb+srv://epek:epek12345@cluster0.zt7ie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/epek"
    "mongodb+srv://epek:epek12345@cluster0.zt7ie.mongodb.net/issues"
  );
};