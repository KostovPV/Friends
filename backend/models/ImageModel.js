import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

// Model is tied to the 'gallery' collection in the 'friends-data' database
const Image = mongoose.model('Image', imageSchema, 'gallery');

export default Image;
