
// Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed
// to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.


module.exports.callback1 = (boardID, getLists) => {
    setTimeout(() => {
        const LISTS = require('./data/lists.json');
        console.log(getLists(boardID, LISTS));
        return getLists(boardID, LISTS);
    }, 2 * 1000);
}