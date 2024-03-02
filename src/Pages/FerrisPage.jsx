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
        <div className={`ferrisPage ${isVisible ? 'fadeIn' : ''}`} ref={textBoxRef}>
            <div className="ferrisContainer">
                <h2>PASSIONATE ABOUT WEB AND MOBILE <br/>
                    <span style={{color: 'red'}}>DEVELOPMENT</span>.</h2>
            </div>
        </div>
    )
}

export default FerrisPage
