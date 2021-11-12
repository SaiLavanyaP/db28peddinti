const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
Brand: String,
price: Number,
color: String
})
module.exports = mongoose.model("dog",
dogSchema)
