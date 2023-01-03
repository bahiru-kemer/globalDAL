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
    // filter by string 
    // pass field name and key word
    // const filter= await users.filterByText("address.street","Bole road");
    // filter by number
    const filter= await users.filterByNumber("age",{gte:10,lte:30});

    console.log(filter);  
  } catch (err) {
    console.log(err.message);
  }
}

