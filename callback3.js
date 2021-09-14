
// Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed
// to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.


module.exports.callback3 = (listID, getCards) => {
    setTimeout(() => {
        const CARDS = require('./data/cards.json');
        console.log(getCards(listID, CARDS));
        return getCards(listID, CARDS);
    }, 2 * 1000);
}