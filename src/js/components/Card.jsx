import React from 'react';
import {Button} from 'react-bootstrap';

export default React.createClass({
  getInitialState() {
    return {
        front: true
    };
  },

  flip() {
      this.setState({
          front: !this.state.front
      });
  },

  render() {
      let text;
      if (this.state.front) {
          text = this.props.question;
      } else {
          text = this.props.answer;
      }
    return (
        <div>
            <p>{text}</p>

            <Button bsStyle="primary" onClick={this.flip}>
                Flip
            </Button>
        </div>
    );
  }
});
