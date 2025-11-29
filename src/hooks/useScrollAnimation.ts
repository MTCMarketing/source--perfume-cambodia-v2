import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observerRef.current?.unobserve(entry.target); // Only animate once
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before bottom
            }
        );

        const elements = document.querySelectorAll('.animate-on-scroll, .fade-in');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []); // Run once on mount

    // Return a ref function if we wanted to target specific elements, 
    // but querying by class is easier for global application.
};
