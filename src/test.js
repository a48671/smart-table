"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
exports.test = function () {
    var qwe = '';
    qwe = ' ';
    var propm = new Promise(function (resolve) {
        setTimeout(function () {
            var par = "'Hello' " + qwe;
            resolve(par);
        });
    });
    propm.then(console.log).catch(console.error);
};
