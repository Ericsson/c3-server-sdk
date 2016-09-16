How to use the API
===================

Generate a random string in base64:
```bash
openssl rand -base64 32
```

Call the API
```javascript
client = new Client("iYfRCKGCCXF2Sji0w1yIwKoK4MgP9EUV=");
```


```javascript
client.getOrCreateUser("Negi", "fazeli", 233).
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)});

```




How to make a client which can be used in Browser
=================================================
 npm install -g browserify
 browserify --entry browserClient.js --outfile as-Client-built.js