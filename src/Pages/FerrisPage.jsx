import '../StyleSheets/FerrisPage.css'
import React, { useRef, useEffect, useState } from 'react';

function FerrisPage() {

    const textBoxRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update isVisible state based on whether the target element is in viewport
                setIsVisible(entry.isIntersecting);
            },
            {
                // Adjust the root margin as needed to trigger the animation slightly earlier or later
                rootMargin: '0px',
                threshold: 0.5, // Intersection observer triggers when 50% of the element is in view
            }
        );

        if (textBoxRef.current) {
            observer.observe(textBoxRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (textBoxRef.current) {
                observer.unobserve(textBoxRef.current);
            }
        };
    }, []);

    return (
        <div className='initalFerris'>
            <div className={`ferrisPage ${isVisible ? 'fadeIn' : ''}`} ref={textBoxRef}>
                <div className="ferrisContainer">
                    <h2>Check your stocks with my <br/>
                        <span style={{color: 'red'}}>starstruck</span> repository <a href="https://github.com/CerenAkyr/ZaraStockChecker/tree/v0.1.0" className='ferrisLink'>here</a>.</h2>
                </div>
            </div>
        </div>
    )
}

export default FerrisPage
