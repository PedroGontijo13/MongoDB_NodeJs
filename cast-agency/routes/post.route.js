import express from "express";
import Post from "../modal/post.modal.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", auth, (req, res, next) => {
    const id = req.user;

    console.log(id);

    Post.find({ creator: id }).then((res) => {
        res.status(200).json({
            message: "Posts fetched successfully",
            posts: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Something went wrong!",
            err
        })
    })

});

router.post("/", auth, (req, res, next) => {
    const { title, content } = req.body;
    const id = req.user;

    if(!title || !content){
        return res.status(400).json({
            status: "fail",
            message: "Please provide title and content!"
        })
    }

    const post = new Post({
        title,
        content,
        creator: id,
    });

    post.save().then((result) => {
        res.status(201).json({
            message: "Post created successfully",
            post: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Something went wrong!",
            err
        })
    });

});

export default router;