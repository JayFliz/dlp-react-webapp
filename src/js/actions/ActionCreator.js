import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
    /**
     * Called when the active card has been changed.
     */
      changeCard(card) {
          console.log("Changing card to \"" + card.question + "\"");
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.CARD_CHANGED,
          card: card
        });
      },
};
