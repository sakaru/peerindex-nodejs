# PeerIndex JavaScript API Client

The PeerIndex API allows you to tie the functionality of PeerIndex to your own application.

## Usage

Get an API key from here: http://developers.peerindex.com/

See examples/example.js for some sample usage, but essentially:
```javascript
var PeerIndexClient = require('./lib/peerindex.js');
var api = new PeerIndexClient('f183qza9k88mjynhtjfc56ce');
var query = {
    twitter_screen_name: 'mischatuffield'
};
api.actorBasic(query, function (actor, result) {
    // Deal with the resulting actor object
    // Or deal with the 'result' HTTP Response
});

```

