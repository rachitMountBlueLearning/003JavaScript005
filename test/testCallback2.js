const callback2 = require('../callback2').callback2;

callback2('mcu453ed')
    .then((lists) => console.log(lists))
    .catch((error) => console.log(error));