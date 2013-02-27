var PeerIndexClient = require('../lib/peerindex.js');

var api = new PeerIndexClient('f183qza9k88mjynhtjfc56ce');

var query = {
    twitter_screen_name: 'mischatuffield'
};
var basic = api.actorBasic(query, function (actor, result) {
    console.log("Status code: " + result.statusCode, actor);
});