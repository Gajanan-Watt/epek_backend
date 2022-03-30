const express = require("express");
const { modelName } = require("../model/issue.model");

const Issue = require("../model/issue.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    console.log(issue)
    return res.status(200).send(issue);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async(req, res) => {
    try{
        const issue = await Issue.find()
        // console.log(issue);
        return res.status(200).send(issue)
    } catch(e){
        return res.status(400).json({message: e.message, status: "Failed"});
    }
})

router.get("/:id", async(req, res) => {
    try{
        const issue = await Issue.findById(req.params.id)
        // console.log(issue);
        return res.status(200).send(issue)
    } catch(e){
        return res.status(400).json({message: e.message, status: "Failed"});
    }
})


router.patch("/:id", async(req, res) => {
  try{
      const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {new: true})
      // console.log(issue);
      return res.status(200).send(issue)
  } catch(e){
      return res.status(400).json({message: e.message, status: "Failed"});
  }
})

router.delete("/:id", async(req, res) => {
  try{
      const issue = await Issue.findByIdAndDelete(req.params.id)
      // console.log(issue);
      return res.status(200).send(issue)
  } catch(e){
      return res.status(400).json({message: e.message, status: "Failed"});
  }
})

module.exports = router;