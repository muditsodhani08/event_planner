import mongoose from "mongoose";
import validator from "validator";

const messageSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required!"],
        minLength:[3,"Name must contain min 3 character "]
    },
    email:{
        type:String,
        required:[true,"email Required!"],
        validate:[validator.isEmail,"Pls enter valid email"]
    },
    subject:{
        type:String,
        required:[true,"Subject Required!"],
        minLength:[5,"Subject must contain min 5 character "]
    },
    message:{
        type:String,
        required:[true,"Message Required!"],
        minLength:[10,"Message must contain min 10 character "]
    }
})


export const Message=mongoose.model("Message",messageSchema);