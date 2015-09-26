import React from 'react';
import ActionCreator from '../actions/ActionCreator';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  /**
   * Change the active card being shown.
   */
  changeCard(card) {
    ActionCreator.changeCard(card);
  },

  render() {
    let list = this.props.cards.map(card => {
        let style = {
            fontWeight: card == this.props.activeCard ? "bold" : "normal"
        };

        return <p onClick={() => this.changeCard(card)} key={card.question}
                style={style}>
            {card.question}
        </p>
    });
    return (
        <div>
            {list}
        </div>
    );
  }
});
