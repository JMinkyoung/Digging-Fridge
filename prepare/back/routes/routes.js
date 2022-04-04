const express = require("express");
const router = express.Router();
const Main = require("../models/recipe");

router.get("/", async (req, res) => {   //  GET /recipes?lastId= || /recipes
  try{    
    let lastId = req.query.lastId;
    let query = {};
    if(lastId) query =  {'_id' : { "$lt" : lastId}};
    const recipes = await Main.find(query).sort({"_id":-1}).limit(5);
    res.status(200).json(recipes);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

router.get("/tags/*", async (req, res) => {   //  GET /recipes/tags/tag1/tag2/tag3...
  try{
    let lastId = req.query.lastId;
    const tags = req.params[0].split("/");
    let query = {};
    if(lastId) query =  { $and: [] ,'_id' : { "$gt" : lastId}};
    else query = { $and: [] };
    
    tags.forEach((t)=>{
      query.$and.push({"ingredientKey": { $regex: decodeURIComponent(t)}});
    });
    const recipes = await Main.find(query).limit(10);
    res.status(200).json(recipes);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

module.exports = router;