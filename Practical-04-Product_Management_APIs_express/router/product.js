const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/productOfCompnay",(req,res)=>{
    const cId = req.body.company_id;
    if(cId){
        return res.json({data:{
            product_id : "p1",
            title : "Mouse",
            price : "3000",
            category : "computer accessories",
            company_id : "c1",
            seller_id : "s1"
        }});
    }
    return res.json({data:"No Data Found"});
});

router.get("/productOfSeller",(req,res)=>{
    const cId = req.body.seller_id;
    if(cId){
        return res.json({data:{
            product_id : "p1",
            title : "Mouse",
            price : "3000",
            category : "computer accessories",
            company_id : "c1",
            seller_id : "s1"
        }});
    }
    return res.json({data:"No Data Found"});
});


router.post("/addProduct",(req,res)=>{
    const {addProduct} = req.body;

    if(addProduct){
        return res.json({data:"New Product Add Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});

router.put("/updateProductCategory",(req,res)=>{
    const pId = req.body.product_id;
    const c = req.body.category;
    if(pId && c){
        return res.json({data:"Product Category Update Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});

router.delete("/deleteProduct",(req,res)=>{
    const pId = req.body.product_id;
    if(pId){
        return res.json({data:"Delete Product Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});



module.exports = router;