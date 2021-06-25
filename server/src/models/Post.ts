import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  creator: String,
  title: String,
  message: String,
  selectedFile: String,
  isFavorite: Boolean,
  likes: { type: [String], default: [] },
  tags: [String],
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

// Mongoose will add 's' to collection name by default
const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
