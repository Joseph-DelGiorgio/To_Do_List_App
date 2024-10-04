import React, {useEffect, useState} from "react";

function MyComponent() {

    const [width, setWidth] = useState(window.innerwidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");
        return () => {
            window.addEventListener("resize", handleResize);
            console.log("EVENT LISTENER removed!");
        }
    }, []);

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    
    </>);
}

export default MyComponent;