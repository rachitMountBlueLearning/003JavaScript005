const callback2 = require('../callback2').callback1;

function getLists(boardID, lists) {
    return lists[boardID] === undefined ? [] : lists[boardID];
}

callback2('mcu453ed', getLists);