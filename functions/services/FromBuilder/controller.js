const { closedEnd } = require("../../endpoint");
const FormBuilder = require("./models");

const router = require("express").Router();

router.post("/create-template",closedEnd,(req,res)=>{
    const inputs = req.body
    const obj = new FormBuilder(req.user)
    obj._createTemplates(inputs).then(()=>{
        return res.status(200).json({message:"Template updated successfully"})
    })
    .catch((err)=>{
        console.log(err)
        return res.status(400).json({error:"Failed to update template"})
    })
})

module.exports=router
