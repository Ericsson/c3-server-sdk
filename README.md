How to use the SDK
===================


Install via git clone

```bash
$ git clone https://github.com/Ericsson/c3-server-sdk.git
$ cd c3-server-sdk
$ npm install
```

## Example

```javascript
client = new Client("The secret token provided by server", "ServerUrl");
```


```javascript
client.getOrCreateUser("Alice",  100).
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)});
```

