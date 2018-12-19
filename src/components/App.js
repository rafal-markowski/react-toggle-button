import React from 'react';
import ToggleButton from './ToggleButton';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleState: 'off'
        }
    }

    onToggleChange = toggleOn => {
        this.setState({
            toggleState: toggleOn ? 'on' : 'off'
        });
    }
    
    render = () => (
        <div>
            <ToggleButton onToggleChange={this.onToggleChange} />
            <p>Button: {this.state.toggleState}</p>
        </div>
    );
}