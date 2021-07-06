import mongoose from "mongoose";

interface Post extends mongoose.Document {
  creator: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  isFavorite: boolean;
  likes: number;
  createdAt: Date;
}

const PostSchema = new mongoose.Schema<Post>({
  creator: String,
  title: String,
  message: String,
  tags: [String],
  selectedFile: String,
  isFavorite: Boolean,
  likes: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: () => new Date().toISOString(),
  },
});

// Mongoose will add 's' to collection name by default
const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
