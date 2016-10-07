# Introduction

C3 server sdk is responsible for giving access to some of our server side APIs. The sdks are available in node, python and GO languages. Here there will be examples on how to use the sdks but for more information on how to install them please navigate to the corresponding directory.


#### First install the SDK


Install via git clone

```bash
$ git clone https://github.com/Ericsson/c3-server-sdk.git
$ cd c3-server-sdk
$ npm install
```


### node
Here is an example on how to create/get a user.

```javascript
    const  Client = require("./client")

    client = new Client({"secret": "Secret token provided by server", "serverUrl": "https://apServer"})


```javascript
client.getOrCreateUser({"localId": "Alice").
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)});
```
