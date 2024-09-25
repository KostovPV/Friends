import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT ||  3001;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Testing")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
