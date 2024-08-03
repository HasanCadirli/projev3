import mongoose from "mongoose";

const conn = () => {

    mongoose.connect(process.env.DB_URI,{
        dbName:"NayaProje",
        useNewUrlParser:true,
        useUnifiedTopology:true,

    }).then(() => {
        console.log("Db baglantisi kuruldu")
    }).catch((err) => {
        console.log('Db baglantisi sorunlu :'+err)
    });
};

export default conn;