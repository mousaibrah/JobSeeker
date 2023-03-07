const mongoose = require('mongoose');


const PostIdSchema = new mongoose.Schema({
count:{ type: Number, default:0,required: true,unique: true }
})
module.exports = mongoose.model('PostId', PostIdSchema)