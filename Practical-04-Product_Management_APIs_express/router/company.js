const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/compnayOfProduct",(req,res)=>{
    const pId = req.body.product_id;
    if(pId){
        return res.json({data:{
            company_id : "c1",
            name : "hp",
            product_id : "p1"
        }});
    }
    return res.json({data:"No Data Found"});
});

router.post("/addCompany",(req,res)=>{
    const {addCompany} = req.body;

    if(addCompany){
        return res.json({data:"New Company Add Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});

router.put("/updateProductId",(req,res)=>{
    const cId = req.body.company_id;
    const pId = req.body.product_id;
    if(pId && cId){
        return res.json({data:"Product_Id Update Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});

router.delete("/deleteCompany",(req,res)=>{
    const cId = req.body.company_id;
    if(cId){
        return res.json({data:"Delete Company Successfully"});
    }
    return res.json({data:"Somthing Want To Wrong"});
});


module.exports = router;