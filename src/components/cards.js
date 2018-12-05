import React, { Component } from 'react';
import Card from '../containers/card';
import '../styles/cardStyles.less';

class Cards extends Component {
    createCard = (card, index) => {
        return <li key={index}><Card id={index} title={card.title} /></li>
    };

    addCard = () => {
        const randomValue = Math.floor(Math.random() * Math.floor(9)); // USE THIS ONLY FOR TESTING
        this.props.addCard({
           title: `Supplier - ${randomValue}` // TODO: Remove default values
        });
    };

    render() {
        const { cards } = this.props;
        const cardList = cards.map(this.createCard);
        return  <div>
                    <ul className="card-list no-ul-bullet">
                        {cardList}
                    </ul>
                    <button onClick={() => this.addCard()}>Add Card</button>
                </div>


    }
}

export default Cards;