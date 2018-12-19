import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

export default class ToggleButton extends React.Component {
    static proTypes = {
        onToggleChange: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {
            toggleOn: false
        };
    }

    onToggleClick = e => {
        e.preventDefault();

        this.setState({
            toggleOn: !this.state.toggleOn
            }, () => {
                if (this.props.onToggleChange) {
                    this.props.onToggleChange(this.state.toggleOn);
                }
            }
        )
    }

    render() {
        const style = classNames({
            'is-off': this.state.toggleOn === false,
            'is-on': this.state.toggleOn
        });

        return (
            <a href="#" className={`o-toggle-button ${style}`} onClick={this.onToggleClick}>
                <div className="o-toggle-button__item"></div>
            </a>
        );
    }
}