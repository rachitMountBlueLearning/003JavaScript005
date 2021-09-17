
// Problem 1: Write a function that will return a particular board's information based on the boardID that is passed
// from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.


module.exports.callback1 = (boardID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const BOARDS = require('./data/boards.json');
            BOARDS ?
                resolve(BOARDS.filter(({id}) => id === boardID)) :
                reject('File is empty');
        }, 2 * 1000);
    });
}