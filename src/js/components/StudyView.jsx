import React from 'react';
import CardView from './CardView.jsx';
import CardList from './CardList.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import AppStore from '../stores/AppStore';

export default React.createClass({

  /**
   * Returns important data from the Store.
   */
  getStateFromStore() {
      return {
          cards: AppStore.getCards(),
          activeCard: AppStore.getActiveCard()
      };
  },

  /**
   * Called whenever the store is updated.
   */
  _onChange() {
      this.setState(this.getStateFromStore());
  },

  getInitialState() {
      return this.getStateFromStore();
  },

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
        <Grid>
            <Row>
                <Col xs={6}>
                    <CardList
                        cards={this.state.cards}
                        activeCard={this.state.activeCard} />
                </Col>
                <Col xs={6}>
                    <CardView
                        card={this.state.activeCard} />
                </Col>
            </Row>
        </Grid>
    );
  }
});
