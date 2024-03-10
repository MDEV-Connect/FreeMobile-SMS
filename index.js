fetch = require('node-fetch-commonjs');
module.exports.sendMessage = async function (msg, user, apikey) {
    var response = await fetch("https://smsapi.free-mobile.fr/sendmsg?user="+user+"&pass="+apikey+"&msg=" + msg);
    const body = await response.text();
    return JSON.parse(body);
}