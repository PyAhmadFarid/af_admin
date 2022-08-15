import { useEffect, useState, useRef } from "react";


const useClickOutside = (handeler) => {
    const comp = useRef();

    useEffect(() => {
        const down = (event) => {
            if (!comp.current.contains(event.target)) {
                handeler();
            }
        };

        document.addEventListener("click", down);

        return () => {
            document.removeEventListener("click", down);
        };
    }, []);

    return comp;
};


export default useClickOutside;