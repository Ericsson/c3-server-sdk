
var request = require("request");


class Client {
    constructor({secret, serverUrl}) {
        this.secret = secret
        this.serverUrl = serverUrl
    }

    getOrCreateUser({localId}){
        let serverUrl = this.serverUrl
        let secret = this.secret
        return new Promise(function(resolve, reject){
            request({url: serverUrl + "/v1/upsertUser",
                method: "POST",
                headers: {"astoken": secret},
                json: true,
                body: {localId}
                },
                function (error, response, body){
                if (error) {
                    return reject(error);
                }
                return resolve(response.body)
            });
        })
    }


    createRoom({options}) {
        let serverUrl = this.serverUrl
        let secret = this.secret
        return new Promise(function(resolve, reject){
        request({url: serverUrl + "/v1/createRoom",
            method: "POST",
            headers: {"astoken": secret},
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
}
module.exports = Client;
