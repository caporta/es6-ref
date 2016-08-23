'use strict'

function getData({url, method = 'POST'} = {}, callback) {
    callback(url, method);
}

getData({url: 'myPostUrl.com'}, function (url, method) {
    console.log(url, method);
});

getData({url: 'myPutUrl.com', method: 'PUT'}, function (url, method) {
    console.log(url, method);
});
