import mongoose from "mongoose";

const { Schema } = mongoose;

const cardsSchema = new Schema({
    isim : {
        type:String,
        required:true
    },
    
    kategori:{
type:String,
required:true
    },
    fiyat:{
        type:Number,
        required:true
    },
    promosyon:{
        type:Boolean,
        required:true
    },
    yildizSayisi:{
        type: Number,
        required:true
    },
    link : {
        type:String,
        required:true
    }




});

const Kart = mongoose.model('Kart',cardsSchema);

export default Kart ;
