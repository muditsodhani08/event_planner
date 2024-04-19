import mongoose from "mongoose";


export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI
    ,{dbName:"MERN_STACK_EVENT_MESSAGE"}).then(()=>{
        console.log("Connected to the database")
    }).catch(err=>{
        console.log("error occured",err)
    })
}