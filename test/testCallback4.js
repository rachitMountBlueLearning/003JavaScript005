const callback4 = require('../callback4').callback4;

function getBoardInfo(boardID, boards) {
    return boards.filter(({id}) => id === boardID);
}

function getLists(boardID, lists) {
    return lists[boardID] === undefined ? [] : lists[boardID];
}

function getCards(listID, cards) {
    return cards[listID] === undefined ? [] : cards[listID];
}

callback4('mcu453ed', 'qwsa221', getBoardInfo, getLists, getCards);