var https = require('https');
var url = require('url');

var endpoint = 'api.peerindex.com';
var api_version = '1';
var key;

function PeerIndexClient(api_key) {
    key = api_key;
}

PeerIndexClient.prototype.actorBasic = function(query, cb) {
        doRequest('/actor/basic', query, cb);
}

PeerIndexClient.prototype.actorExtended = function(query, cb) {
        doRequest('/actor/basic', query, cb);
}

PeerIndexClient.prototype.actorTopic = function(query, cb) {
        doRequest('/actor/basic', query, cb);
}

PeerIndexClient.prototype.actorGraph = function(query, cb) {
        doRequest('/actor/basic', query, cb);
}



var doRequest = function(path, query, cb) {
    query.api_key = key;
    var uri = url.format({
        protocol: 'https:',
        host: endpoint,
        pathname: api_version + path,
        query: query
    });
    https.get(uri, function(res) {
        res.on('data', function(message) {
            console.log(message.toString());
            actor = null;
            try {
                var actor = JSON.parse(message.toString());
            } catch (e) {
                if (/Developer Inactive/.test(message)) {
                    var msg = 'Please double check your API key';
                }
                else {
                    var msg = "Something is borked :'(";
                }
                throw new Error(msg);
            }
            cb(actor, res);
        });
    });
}

module.exports = PeerIndexClient;
