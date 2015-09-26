import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let cards = [
    {
        question: "When was Harvard founded?",
        answer: "1636"
    },
    {
        question: "What is the worst school on the planet?",
        answer: "Yale"
    }
];
let activeCard = cards[0];

// add private functions to modify data

// Facebook style store creation.
const AppStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getCards() {
      return cards;
  },

  getActiveCard() {
      return activeCard;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.CARD_CHANGED:
        activeCard = action.card;
        AppStore.emitChange();
        break;
      // add more cases for other actionTypes...
    }
  })
});

export default AppStore;
