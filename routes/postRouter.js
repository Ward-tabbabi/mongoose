const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const postRouter = express.Router();
const Post = require("../models/post");
//ADD NEW POST
//method;post
//req.body

postRouter.post("/add", async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    let result = await newPost.save();
    res.sendStatus(200).send({ newPost: result, msg: "added successfully" });
  } catch (error) {
    console.log(error);
  }
});
//GET ALL POSTS
//method.get
//req.body
postRouter.get("/", async (req, res) => {
  try {
    let result = await Post.find();
    res.status(200).send({ allposts: result, msg: "success GET" });
  } catch (error) {
    console.log(error);
  }
});
//get one post by id
//method get
//params/id
postRouter.get("/:id", async (req, res) => {
  try {
    let result = await Post.findById({ _id: req.params.id });
    res.send({ post: result, msg: "get by id successfully" });
  } catch (error) {
    console.log(error);
  }
});
//delete post
//method delete
//params/id
postRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Post.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "delated successfully" });
  } catch (error) {
    console.log(error);
  }
});
//update by id
//method put
//param/id
postRouter.put("/:id", async (req, res) => {
  try {
    let result = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = postRouter;
