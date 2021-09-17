const callback1 = require('../callback1').callback1;

callback1('mcu453ed')
    .then((boardInfo) => console.log(boardInfo))
    .catch((error) => console.log(error));