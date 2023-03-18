import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    userId:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true,
      
    },
    orderItems:[],
    address: {
      type:Object,
      required: true,
     
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: 0,
      required:true
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("orders", OrderSchema);

export default Orders;
