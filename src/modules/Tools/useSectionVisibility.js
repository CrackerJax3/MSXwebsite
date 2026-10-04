import { useState, useEffect, useRef } from "react"

// Tracks which of a page's sections are on screen, so their text can slide in.
// Returns [isVisible, sectionRef]: pass sectionRef(index) as the ref of section `index`.
export default function useSectionVisibility(threshold = 0.3) {
    const [isVisible, setIsVisible] = useState([]);
    const elementsRef = useRef([]);

    useEffect(() => {
        const elements = elementsRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = elements.indexOf(entry.target);
                    if (index !== -1) {
                        setIsVisible((prev) => {
                            const updatedVisibility = [...prev];
                            updatedVisibility[index] = entry.isIntersecting;
                            return updatedVisibility;
                        });
                    }
                });
            },
            { threshold }
        );

        elements.forEach((element) => { if (element) observer.observe(element); });
        return () => observer.disconnect();
    }, [threshold]);

    const sectionRef = (index) => (el) => { elementsRef.current[index] = el; };
    return [isVisible, sectionRef];
}
