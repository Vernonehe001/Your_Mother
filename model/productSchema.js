import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productID:{
        type:String,
        required:true
    },
    product_status:{
        type:String,
        required:true
    },
    delivered_date:{
        type:String
    },
    product_origin:{
        type:String
    },
    product_destination1:{
        type:String
    },
    product_destination2:{
        type:String
    },
    product_weight:{
        type:String
    },
    product_chargeable:{
        type:String
    },
    product_packages:{
        type:String
    },
    product_description:{
        type:String
    },
    product_source:{
        type:String
    },
    product_setdestination:{
        type:String
    },
    product_tax_shipping_cost:{
        type:String
    },
    product_reference:{
        type:String
    }
    
},
{
    timestamps:true
});

export default mongoose.model("Product",ProductSchema);