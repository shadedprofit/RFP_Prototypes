import React, { Component } from 'react';
import CloseIcon from '../assets/close-icon.svg';

class Card extends Component {
    render() {
        const {
            title,
            children,
            id
        } = this.props;

        const titleElement = title
            ? <span className="card-header"><h4 className="title">{title}</h4></span>
            : <span></span>;

        return (
            <div className="card-container">
                <img src={CloseIcon} className="close-modal-button" onClick={() => this.props.closeCard(id)} />
                {titleElement}
                {children}
            </div>
        );
    }
}

export default Card;
