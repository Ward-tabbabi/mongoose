const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: { type: String, require },
  posterUrl: String,
  detail: String,
  createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.model("posts", postSchema);
module.exports = Post;
