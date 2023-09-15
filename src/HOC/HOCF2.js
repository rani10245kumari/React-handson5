import React from "react";

const HOCTWO = (props) => {
    return (
        <>
            <div style={{ backgroundColor: 'violet' }}>{<props.val></props.val>}
                <h2 style={{ color: '#660000' }}>BENITITS OF USING HOC:</h2>
                <ol className="orderList">
                    <li>Reusability: HOCs allow you to encapsulate and reuse component logic across multiple components. Instead of duplicating code in multiple places, you can create a single HOC and apply it to different components as needed.</li>
                    <li> Separation of Concerns: HOCs promote the separation of concerns by isolating specific functionalities or behaviors in separate HOCs. This helps in maintaining clean, focused components that are easier to understand and maintain.</li>
                    <li>Code Modularity: HOCs encourage a modular code structure. You can break down complex logic into smaller, composable HOCs, making your codebase more organized and easier to manage.</li>
                    <li>Testing: HOCs make it easier to test component logic independently. Since HOCs are functions that take and return components, you can test the logic within HOCs separately from the components they enhance.</li>
                </ol>
            </div>

        </>
    )
}
export default HOCTWO