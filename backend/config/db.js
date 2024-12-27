import mongoose from "mongoose";

export const connectDB= async () =>{
    await mongoose.connect('mongodb+srv://divanshu1704:17042004@cluster0.8q6ti.mongodb.net/food-del').then(()=>console.log("DB connected"));

}
