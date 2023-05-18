import mongoose, { model } from "mongoose";

const schema = new mongoose.Schema({
    shippingInfo:{
        hNo:{
        type:String,
        require:true
        },
        city:{
        type:String,
        require:true
        },
        state:{
        type:String,
        require:true
        },
        country:{
        type:String,
        require:true
        },
        pincode:{
        type:Number,
        require:true
        },
        phoneNo:{
        type:Number,
        require:true
        },
    },
    orderItems:{
        cheeseBurger:{
            price:{
                type:Number,
                require:true
            },
            quantity:{
                type:Number,
                require:true
            },

        },
        vegCheeseBurger:{
            price:{
                type:Number,
                require:true
            },
            quantity:{
                type:Number,
                require:true
            },

        },
        burgerWithFries:{
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },

        },
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required:true,
    },
    paymentMethod:{
        type:"String",
        enum:["COD" , "Online"],
        default:"COD",
    },
    paymentInfo:{
        type:mongoose.Schema.ObjectId,
        ref: "Payment",
    },
    paidAt:{
        type:Date,
    },
    itemsPrice:{
        type:Number,
        default:0,
    },
    taxPrice:{
        type:Number,
        default:0,
    },
    shippingCharges:{
        type:Number,
        default:0,
    },
    totalAmount:{
        type:Number,
        default:0,
    },
    orderStatus:{
        type: String,
        enum: ['Preparing','Shipped','Delivered'],
        default: "Preparing",
    },
    deliveredAt: Date,
    createdAt:{
        type:Date,
        default:Date.now,
    }
    
})

export const Order = new mongoose.model("Order",schema)