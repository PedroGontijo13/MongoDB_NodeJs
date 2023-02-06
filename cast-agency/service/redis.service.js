import redis from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = redis.createClient({
    host: "mongodb://127.0.0.1",
    port: '27017'
});

redisClient.on("connect", () => {
    console.log("Redis client connected");
});

redisClient.on("error", (err) =>  {
    console.log(`Something went wrong ${err}`);
})

export default redisClient;