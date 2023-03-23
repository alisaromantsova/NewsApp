// renderMarkup(array)
// news__link
import {renderMarkup} from './render-markup'


class renderMarkupStorage {
  static KEY = "SELECTED_CARD";
#selectedCards = [];

#getCardsFromStorage() {
    try {
        this.#selectedCards = JSON.parse(localStorage.getItem(renderMarkupStorage.KEY)) || [];
    } catch (error) {
        this.#selectedCards = [];
    }
}

constructor() {
    this.#getCardsFromStorage();
}

add = (card) => {
    this.#selectedCards.push(card);
    localStorage.setItem(renderMarkupStorage.KEY, JSON.stringify(this.#selectedCards));
};

get selectedCards(){
    return this.#selectedCards;
}
}

const cardNewsStorage = new renderMarkupStorage();

const customCreator = (name, config = {}) => {
      const element = document.createElement(name);
    
      Object.entries(config).forEach(([key, value]) => {
        element[key] = value;
      });
    
      return element;
    };