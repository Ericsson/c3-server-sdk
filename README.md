How to use the API
===================

Generate a random string in base64:
```bash
openssl rand -base64 32
```

Call the API
```javascript
client = new Client("1234", serverUrl);
```


```javascript
client.getOrCreateUser("Negi",  2).
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)});

```
