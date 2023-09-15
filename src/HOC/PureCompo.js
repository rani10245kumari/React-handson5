import React, { PureComponent } from "react";

export class PureCom extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "COLLEGE DEKHO",
        };
    }
    updateNAME() {
        this.setState({
            name: "CAR DEKHO",
        });
    }
    render() {
        return (
            <div style={{ backgroundColor: '#94b8b8' }}>
                <h1 style={{ color: '#004d4d' }}>PURE COMPONENT</h1>
                <p style={{ fontSize: '24px', color: '#4d1a00' }}>React pure components are the components that do not re-render when the value of props and state has been updated with the same values. Since these components do not cause re-rendering when the same values are passed thus they improve performance.</p>
                <h2 className=" " style={{ color: '#330000', fontSize: '30px' }}>{this.state.name}</h2>

                <button onClick={() => this.updateNAME()} className="purebtn">Update</button>
                <h2 style={{ color: '#00111a', fontSize: '32px' }}>Advantage of PureComponent:</h2>
                <ol className="pureol">
                    <li>Performance optimization: Pure components minimize re-renders by avoiding unnecessary rendering cycles when there are no changes in props or state. This is more helpful in cases where expensive calculations or API calls are involved.</li>
                    <li>Simplified code: Pure components simplify your code by reducing the need for manual checks and optimizations. React handles the comparison logic automatically</li>
                    <li>Easy integration: Pure components can replace regular components in your code. You can easily convert a component to a pure component by changing the base class from.</li>
                </ol>


            </div>
        );
    }
}

export default PureCom;