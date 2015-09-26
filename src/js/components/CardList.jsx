import React from 'react';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    let list = this.props.cards.map(card =>
        <p>
            {card.question}
        </p>
    );
    return (
        <div>
            {list}
        </div>
    );
  }
});
