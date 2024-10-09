import { useEffect, useState } from 'react';

export default function Gallery() {
    const [images, setImages] = useState([]);

    // Fetch the images from the backend
    useEffect(() => {
        const fetchImages = async () => {
            try {
              const response = await fetch('http://localhost:3000/api/images');

                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h2>Gallery</h2>
            <div className="image-grid">
                {images.length > 0 ? (
                    images.map((image) => (
                        <div key={image._id} className="image-item">
                            <img src={image.url} alt={image.fileName} width="200" />
                        </div>
                    ))
                ) : (
                    <p>No images found</p>
                )}
            </div>
        </div>
    );
}

