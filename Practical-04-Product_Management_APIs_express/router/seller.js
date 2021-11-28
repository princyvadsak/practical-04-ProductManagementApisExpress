const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/sellerOfProduct",(req,res)=>{
    const pId = req.body.product_id;
    if(pId){
        return res.json({data:{
            seller_id : "s1",
            name : "hp seller",
            product_id : "p1"
        }});
    }
    return res.json({data:"No Data Found"});
});

router.post("/addseller",(req,res)=>{
    const {addSeller} = req.body;

    if(addSeller){
        return res.json({data:"New Seller Add Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});

router.put("/updateProductId",(req,res)=>{
    const sId = req.body.seller_id;
    const pId = req.body.product_id;
    if(pId && sId){
        return res.json({data:"Product_Id Update Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});

router.delete("/deleteSeller",(req,res)=>{
    const sId = req.body.seller_id;
    if(sId){
        return res.json({data:"Delete Seller Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});


module.exports = router;