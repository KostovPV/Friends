import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.VITE_PORT || 5173;

// Serve static files from the frontend dist folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.use(express.json());

// If no static files are found, respond with the built index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
