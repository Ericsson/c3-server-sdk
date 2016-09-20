# Introduction

C3 server sdk is responsible for giving access to some of our server side APIs. The sdks are available in node, python and GO languages.


# Example

Here there will be examples on how to use the sdks but for more information on how to install them please navigate to the corresponding directory.


### node
Here is an example on how to create/get a user.

```javascript
client = new Client({"secret": "The secret token provided by server", "serverUrl": "https://apServer"});
```


```javascript
client.getOrCreateUser({"localId": "Alice",  "accessTokenDurationSeconds": 100}).
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)});
```
