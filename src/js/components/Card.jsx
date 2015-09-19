import React from 'react';
import {Button} from 'react-bootstrap';

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

            <Button bsStyle="primary" onClick={this.flip}>
                Flip
            </Button>
        </div>
    );
  }
});
