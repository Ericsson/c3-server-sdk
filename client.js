
var request = require("request");

function Client(secret, serverUrl){
    this.secret = secret;
    this.baseUrl =  serverUrl
};


Client.prototype.getOrCreateUser = function(Name, accessTokenDurationHour){
    var that = this;
    return new Promise(function(resolve, reject){
    var payload = {
        "localId": Name,
        "accessTokenDurationHour": accessTokenDurationHour
    };
    request({url: that.baseUrl + "v1/upsertUser",
        method: "POST",
        headers: {"astoken": that.secret},
        json: true,
        body: payload
    }, function (error, response, body){
            if (error) {
                return reject(error);
            }
            return resolve(response.body)
        });
    })
}

Client.prototype.createRoom = function() {
    var that = this;
    return new Promise(function(resolve, reject){
    request({url: that.baseUrl + "v1/createRoom",
        method: "POST",
        headers: {"astoken": that.secret},
        json: true,
        body: payload
    }, function (error, response, body){
            if (error) {
                return reject(error);
            }
            return resolve(response.body)
        });
    })
};

module.exports = Client;


