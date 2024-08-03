import Kart from "../models/cardsmodel.js";

const createKart = async (req,res) => {

    try{
        const kart =await Kart.create(req.body);
res.status(201).json({
    succeded:true,
    kart
});

    }
    catch (error) {
            res.status(500).json({
                succeded:false,
                error
            });
    }



};

const kartgetir =async (req,res) => {

    try {
        const karts=await Kart.find({})
        res.status(200).render("karts",{
            karts
        });
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error
        });
        
        
    }

}

export {createKart,kartgetir};