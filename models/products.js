var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name:String,
    category:String,
    sex: String,
    manufacturer:String,
    description:String,
    size:String,
    image:String,
    created : {type : Date, default : Date.now}    
})

module.exports=mongoose.model('products', productSchema)