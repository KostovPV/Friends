import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import Image from './models/ImageModel.js';
import cors from 'cors';

// Load .env file from the root directory
dotenv.config(); // No path needed if in root

// Define __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.VITE_PORT || 3001;
// const PORT = 3001;
const mongoUri = process.env.VITE_MONGODB_URI;

// console.log('Mongo URI:', mongoUri); 

mongoose.connect(mongoUri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the frontend dist folder
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.post("/api/upload", async (req, res) => {
    const { url, fileName } = req.body;

    if (!url || !fileName) {
        return res.status(400).json({ message: "Image URL and file name are required." });
    }

    try {
        const newImage = new Image({ url, fileName });
        await newImage.save();
        res.status(201).json({ message: "Image uploaded successfully", image: newImage });
    } catch (error) {
        console.error("Error saving image:", error);
        res.status(500).json({ message: "Error uploading image", error });
    }
});
// GET route to fetch all images
app.get('/api/images', async (req, res) => {
    try {
        const images = await Image.find(); // Fetch all images from the 'gallery' collection
        res.status(200).json(images);
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ message: "Error fetching images", error });
    }
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
