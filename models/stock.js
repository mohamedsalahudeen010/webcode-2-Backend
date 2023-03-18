import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    itemName:{type:String,
               required:true  },
    stockAvailable:{type:Number,
        required:true  },
        image:{type:String,
          required:true  },
  }
);

const Stock = mongoose.model("stock", stockSchema);

export default Stock;
