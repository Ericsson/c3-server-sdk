
var request = require("request");

function Client({secret, serverUrl}){
    this.secret = secret;
    this.baseUrl =  serverUrl
};

Client.prototype.getOrCreateUser = function({Name, accessTokenDurationSeconds}){
    var that = this;
    return new Promise(function(resolve, reject){
    var payload = {
        "localId": Name,
        "accessTokenDurationSeconds": accessTokenDurationSeconds
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

Client.prototype.createRoom = function({options}) {
    var that = this;
    return new Promise(function(resolve, reject){
    request({url: that.baseUrl + "v1/createRoom",
        method: "POST",
        headers: {"astoken": that.secret},
        json: true,
        body: options
    }, function (error, response, body){
            if (error) {
                return reject(error);
            }
            return resolve(response.body)
        });
    })
};

module.exports = Client;
