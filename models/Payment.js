import mongoose from "mongoose";

const schema = new mongoose.Schema({
    razorPay_order_id:{
        type:String,
        require:true,
    },
    razorPay_payment_id:{
        type:String,
        require:true,
    },
    razorPay_signature_id:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

export const Payment = mongoose.model("Payment",schema);