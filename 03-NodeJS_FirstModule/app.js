'use strict';

// const firstMod = require('./first-module');
// firstMod.doIt();

//const {doIt, doSomething: ds} = require('./first-module');
//doIt();
//ds();

const firstMod1 = require('./first-module');
const firstMod2 = require('./first-module');

console.log(firstMod1 === firstMod2);

firstMod1.put('test data!');
console.log(firstMod2.get());