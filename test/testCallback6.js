const callback6 = require('../callback6').callback6;
const LISTS = require('../data/lists.json');

const LIST_IDS = Object.values(LISTS).reduce((ids, currentList) => {
    ids.push(...currentList.map(({id}) => id))
    return ids
}, []);

callback6('mcu453ed', LIST_IDS);