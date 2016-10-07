# Introduction

C3 server sdk is responsible for giving access to some of our server side APIs. The sdk is available in node, python and GO languages. Here there will be examples on how to use the sdks, for more information on how to install please navigate to the corresponding directory.


#### First install the SDK


Via git clone

```bash
$ git clone https://github.com/Ericsson/c3-server-sdk.git
$ cd c3-server-sdk/node-sdk
$ npm install
```


### node
Here is an example on how to create/get a user.

```javascript
    const  Client = require("./client")

    client = new Client({"secret": "Secret token provided by server", "serverUrl": "https://apServer"})
```

```javascript
client.getOrCreateUser({"localId": "Alice").
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)})
```
