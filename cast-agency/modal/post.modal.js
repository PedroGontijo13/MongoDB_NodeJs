import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Post = mongoose.model("Post", postSchema);

export default Post;