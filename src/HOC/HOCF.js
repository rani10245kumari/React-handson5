import React from "react";
const HOC = (props) => {
    return (
        <>
            <div style={{ background: 'pink' }}>{<props.val></props.val>}
                <p style={{ color: '#006666', textAlign: 'center', fontSize: '30px' }}>Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component logic across multiple components. In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.</p>
            </div>

        </>
    )
}
export default HOC