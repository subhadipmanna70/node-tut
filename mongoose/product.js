const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({

    name:String,
    price:Number,
    brand:String
});

const productModel= mongoose.model("products",productSchema);
module.exports=productModel;