import React from 'react';
import CardView from './CardView.jsx';
import CardList from './CardList.jsx';
import {Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  getInitialState() {
    return {
        cards: [
            {
                question: "When was Harvard founded?",
                answer: "1636"
            },
            {
                question: "What is the worst school on the planet?",
                answer: "Yale"
            }
        ],
        activeCardIndex: 1
    };
  },

  componentDidMount() {
  },

  render() {
      let activeCard = this.state.cards[this.state.activeCardIndex];
    return (
        <Grid>
            <Row>
                <Col xs={6}>
                    <CardList
                        cards={this.state.cards} />
                </Col>
                <Col xs={6}>
                    <CardView
                        card={activeCard} />
                </Col>
            </Row>
        </Grid>
    );
  }
});
