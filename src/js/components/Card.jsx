import React from 'react';

export default React.createClass({
  getInitialState() {
    return {};
  },

  flip() {
      // TODO
  },

  render() {
    return (
        <div>
            <p>{this.props.question}</p>

            <button onClick={this.flip}>
                Flip
            </button>
        </div>
    );
  }
});
