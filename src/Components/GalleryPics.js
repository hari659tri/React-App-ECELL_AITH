import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init();
    }, []);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-container" style={{ position: 'relative', maxWidth: '90vw', height: 'auto' }}>
            <div className="carousel-image" data-aos="zoom-in-left" data-aos-offset="-20">
                <img
                    src={images[currentIndex]}
                    alt="Ecell aith"
                    style={{ maxWidth: "800px", maxHeight: "600px", width: "100%", height: 'auto', borderRadius: '10px',objectFit: "contain"}}
                />
            </div>
            <button 
                onClick={goToPrevious} 
                style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '10px', 
                    transform: 'translateY(-50%)', 
                    background: 'rgba(0,0,0,0.5)', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '50%', 
                    padding: '10px', 
                    cursor: 'pointer' 
                }}
            >
                ❮
            </button>
            <button 
                onClick={goToNext} 
                style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    right: '10px', 
                    transform: 'translateY(-50%)', 
                    background: 'rgba(0,0,0,0.5)', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '50%', 
                    padding: '10px', 
                    cursor: 'pointer' 
                }}
            >
                ❯
            </button>
        </div>
    );
}

function GalleryPics() {
    const images = [
        '/assets/Gallery/ecell.jpg',
        '/assets/Gallery/ecell3.jpg',
		'/assets/Gallery/ecell4.jpg',
		'/assets/Gallery/ecell5.jpg',
		'/assets/Gallery/ecell6.jpg',

    ];

    return (
        <div id="GalleryPics" className="d-flex gal">
            <Carousel images={images} />
        </div>
    );
}

export default GalleryPics;
