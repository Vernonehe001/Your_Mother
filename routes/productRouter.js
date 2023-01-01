import express from "express"
import Product from "../model/productSchema.js";

const productRouter = express.Router();

productRouter.post(
    "/",
    async(req,res)=>{

        const newProduct = new Product({
            productID:req.body.productID,
            product_status:req.body.product_status,
            delivered_date:req.body.delivered_date,
            product_origin:req.body.product_origin,
            product_destination1:req.body.product_destination1,
            product_destination2:req.body.product_destination2,
            product_weight:req.body.product_weight,
            product_chargeable:req.body.product_chargeable,
            product_packages:req.body.product_packages,
            product_description:req.body.product_description,
            product_source:req.body.product_source,
            product_setdestination:req.body.product_setdestination,
            product_tax_shipping_cost:req.body.product_tax_shipping_cost,
            product_reference:req.body.product_reference,
        
        });

        try{
            const product_saved = await newProduct.save()
            res.status(201).json(product_saved)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
)


productRouter.get(
    "/",
    async(req,res)=>{
        try{
            const shipping_products =await Product.find({});
            res.status(201).json(shipping_products)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
)

productRouter.get(
    "/:productID",
    async(req,res)=>{
        try{
            const product = await Product.findById(req.params.productID)

            res.status(200).json(product)
        }

        catch(err){
            res.status(500).json(err)
        }
    }
)


export default productRouter;