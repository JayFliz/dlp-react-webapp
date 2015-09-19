import React from 'react';
import Card from './Card.jsx';

export default React.createClass({
  render() {
    return (
      <div>
          <Card
              question="When was Harvard founded?"
              answer="1636" />
      </div>
    );
  }
});
