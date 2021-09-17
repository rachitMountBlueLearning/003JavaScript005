
// Problem 5: Write a function that will use the previously written functions to get the following information.
// You do not need to pass control back to the code that called it.

// Get information from the Thanos boards
// Get all the lists for the Thanos board
// Get all cards for the Mind and Space lists simultaneously


module.exports.callback5 = (boardID, listIDs) => {
    const callback1 = require('./callback1').callback1;
    const callback2 = require('./callback2').callback2;
    const callback3 = require('./callback3').callback3;

    setTimeout(() => {
        callback1(boardID)
            .then((boardInfo) => console.log(boardInfo))
            .catch((error) => console.log(error));
    }, 0);
    setTimeout(() => {
        callback2(boardID)
            .then((lists) => console.log(lists))
            .catch((error) => console.log(error));
    }, 0);
    setTimeout(() => {
        listIDs
            .forEach(listID => {
                callback3(listID)
                    .then((cards) => console.log(cards))
                    .catch((error) => console.log(error));
            });
    }, 0);
}