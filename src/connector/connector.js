const mongoose = require("mongoose");

const dBName = "stackDb";

mongoose.connect(`mongodb://127.0.0.1:27017/${dBName}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify:true
});