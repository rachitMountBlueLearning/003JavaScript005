
// Problem 4: Write a function that will use the previously written functions to get the following information.
// You do not need to pass controlback to the code that called it.

// Get information from the Thanos boards
// Get all the lists for the Thanos board
// Get all cards for the Mind list simultaneously


module.exports.callback4 = (boardID, listID, getBoardInfo, getLists, getCards) => {
    const callback1 = require('./callback1').callback1;
    const callback2 = require('./callback2').callback2;
    const callback3 = require('./callback3').callback3;

    setTimeout(() => {callback1(boardID, getBoardInfo)}, 0);
    setTimeout(() => {callback2(boardID, getLists)}, 0);
    setTimeout(() => {callback3(listID, getCards)}, 0);
}