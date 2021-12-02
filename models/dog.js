const mongoose = require("mongoose") 
const DogSchema = mongoose.Schema({ 
 Brand: {
    type: String,
    minlength: 7
},
 price: Number, 
 color: {
    type: String,
    minlength: 3
}, 
}) 
 
module.exports = mongoose.model("Dog", DogSchema)