const express = require("express");
const router = express.Router();
const Main = require("../models/recipe");

router.get("/", async (req, res) => {
  try{
    // const recipes = await Main.find().limit(10);
    // const recipes = await Main.find({"ingredientKey": {$or: [{{ $regex: "감자"},{ $regex: "호박"}},]}}).limit(2);
    const recipes=await Main.find( { $and: [ { "ingredientKey": { $regex: "감자" } }, {"ingredientKey": { $regex: "양파"} },{"ingredientKey": { $regex: "미나리"} } ] } );


    res.json(recipes);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

module.exports = router;