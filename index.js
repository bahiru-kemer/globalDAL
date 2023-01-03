// Config file
const config = require("./configs");
// mongoose
const mongoose = require("mongoose");
// connect mongodb
mongoose.connect(config.url);

// model
const User = require("./schema");
// dal
const GlobalDAL = require("./dal");
// Instantiate the class
const users= new GlobalDAL(User);

run();

// start
async function run() {
  try {
    
  } catch (err) {
    console.log(err.message);
  }
}

