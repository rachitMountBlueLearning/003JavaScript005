const callback3 = require('../callback3').callback3;

callback3('qwsa221')
    .then((cards) => console.log(cards))
    .catch((error) => console.log(error));