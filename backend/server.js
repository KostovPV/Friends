import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.VITE_PORT ||  5173;

//for deployment
const __dirname = path.resolve();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Testing")
})

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res)=> {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
