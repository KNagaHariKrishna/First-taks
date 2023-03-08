const mongoose = require('mongoose');
const schema=mongoose.Schema
const mySchema = new schema({
    username: { type: String, unique:true},
    age: { type: Number},
    mobnum: { type: Number},
    password: {
        type: String, 
        minLength: 6,
    }
    // date: { type: Date, default: Date.now },
});
const MyModel = mongoose.model('reguser', mySchema);
module.exports = MyModel