import { useState } from "react";
function HocData() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 style={{ color: '#4d004d' }}>High Order Component</h1>
            <h3 style={{ color: 'green', font: '30px' }}>Multiple of 5:{count}</h3>
            <button onClick={() => setCount(count + 5)} className="button">Increament</button>
        </>
    )
}
export default HocData;