
var request = require("request");

function Client({secret, serverUrl}){
    input = {secret, serverUrl}
    this.secret = input.secret;
    this.baseUrl =  input.serverUrl
};

Client.prototype.getOrCreateUser = function({localId, accessTokenDurationSeconds}){
    var that = this;
    return new Promise(function(resolve, reject){

    request({url: that.baseUrl + "v1/upsertUser",
        method: "POST",
        headers: {"astoken": that.secret},
        json: true,
        body: {localId, accessTokenDurationSeconds}
    }, function (error, response, body){
            if (error) {
                return reject(error);
            }
            return resolve(response.body)
        });
    })
}


Client.prototype.createRoom = function({options}) {
    var that = this;
    return new Promise(function(resolve, reject){
    request({url: that.baseUrl + "v1/createRoom",
        method: "POST",
        headers: {"astoken": that.secret},
        json: true,
        body: {options}
    }, function (error, response, body){
            if (error) {
                return reject(error);
            }
            return resolve(response.body)
        });
    })
};

module.exports = Client;
