import express from "express";
import Member from '../models/Member.js';
import "body-parser";

// Initilize the router
const router = express.Router();

// Get
router.get('/members', async (req, res)=>{
    try{
        const members = await Member.find();
        res.json(members);
    }catch(err){
        res.json({message:err})
    }
})

router.get("/members/:_id", async (req, res)=>{
    try{
    const reqId = await Member.findById(req.params._id);
    res.json(reqId)
    } catch(err){
        res.json({message: "Error occured"});
    }
})

// Post
router.post("/members", async (req, res)=>{
    const member = new Member({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });
    try {
        const savedMember = await member.save();
        res.json(savedMember);
    } catch(err){
        res.json({message: err})
    }
})

// Delete
router.delete("/members/:id", async (req, res)=>{
    const removedMember = await Member.remove({_id : req.params.id})
    try{
        res.json(removedMember)
    }catch(err){
        res.json({message: err})
    }
})

// Update
router.patch("/members/:id", async (req, res)=>{
    const updatedMember = await Member.updateMany({_id: req.params.id}, { 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });
        
    try{
        res.json(updatedMember)
    } catch(err){
        res.json({member: err})
    }
})

export default router;