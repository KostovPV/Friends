import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebaseConfig'; // Import Firebase storage configuration

export default function Upload() {
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const uploadImage = async () => {
        if (imageFile) {
            const storageRef = ref(storage, `images/${imageFile.name}`);
            try {
                // Upload image to Firebase storage
                await uploadBytes(storageRef, imageFile);
                const downloadUrl = await getDownloadURL(storageRef);
                setImageUrl(downloadUrl);

                
                const response = await fetch('http://localhost:3000/api/upload', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        url: downloadUrl,
                        fileName: imageFile.name
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                console.log('File available at:', downloadUrl);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            console.error('No file selected');
        }
    };

    return (
        <div>
            <h2>Upload an Image</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadImage}>Upload</button>
            {imageUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageUrl} alt="Uploaded file" width="200" />
                </div>
            )}
        </div>
    );
}
