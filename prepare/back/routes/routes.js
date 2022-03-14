const express = require("express");
const router = express.Router();
const Main = require("../models/recipe");

router.get("/", async (req, res) => {   //  GET /recipes?lastId=
  try{    
    let lastId = req.query.lastId;
    let query = {};
    if(lastId) query =  {'_id' : { "$gt" : lastId}};
    const recipes = await Main.find(query).limit(5);
    // const recipes=await Main.find( { $and: [{"ingredientKey": { $regex: "스팸"} },{"ingredientKey": { $regex: "김치"} },{"ingredientKey": { $regex: "파"} } ] } );
    res.status(200).json(recipes);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

module.exports = router;