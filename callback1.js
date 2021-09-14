
// Problem 1: Write a function that will return a particular board's information based on the boardID that is passed
// from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.


module.exports.callback1 = (boardID, getBoardInfo) => {
    setTimeout(() => {
        const BOARDS = require('./data/boards.json');
        console.log(getBoardInfo(boardID, BOARDS))
        return getBoardInfo(boardID, BOARDS);
    }, 2 * 1000);
}