import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./config/db.config.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import castyAgencyRoutes from './routes/casty-agency.route.js'
import redisClient from "./service/redis.service.js";

dotenv.config();
const app = express();

(async () => {
    try{
        await redisClient.connect();
    }
    catch(err){
        console.log(err);
    }
})();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        author: "kubilaycakmak",
    });
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use('/casty-agency', castyAgencyRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT + "...");
});