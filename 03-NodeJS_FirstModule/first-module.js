let tempData = '';

module.exports = {
    put: function (d) {
        tempData = d;
    },
    get: function() {
      return tempData;  
    },
    doIt: function() {
        console.log('hello world');
    },
    doSomething: function() {
        console.log('Did Something!');
    },
    getItDone: function() {
        console.log('Got It Done!');
    }
}