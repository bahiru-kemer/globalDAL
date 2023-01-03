// mongoose
const mongoose = require("mongoose");
// address schema
const addresSchema = new mongoose.Schema({
  street: String,
  city: String,
});
// user schema
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    // age
    type: Number,
    min: 0,
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    // email
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
  },
  createdAt: {
    // created at
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    // updated at
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  hobbies: [String], // hobbies in array
  address: addresSchema,
});
userSchema.methods.saySomething = function (){
console.log(`Hi my name is ${this.name} and my email is ${this.email}`);
}
userSchema.statics.findByName = function(name){
    return this.where({name:new RegExp(name,"i")});
}
module.exports = mongoose.model("users", userSchema);
