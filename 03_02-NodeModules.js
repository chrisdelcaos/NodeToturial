/*
The require() function returns a log object because logging module exposes an object in Log.js 
using module.exports. So now you can use logging module as an object and call any of its function 
using dot notation e.g myLogModule.info() or myLogModule.warning() or myLogModule.error()
*/

var LogModule = require('./03_01-NodeModules.js');

LogModule.info('Node.js started');