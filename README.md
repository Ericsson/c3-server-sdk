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
client = new Client({"secret": "The secret token provided by server", "serverUrl": "https://apServer"});
```


```javascript
client.getOrCreateUser({"localId": "Alice",  "accessTokenDurationSeconds": 100}).
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)});
```


# getOrCreateUser(options)

#### options
```json
    {
        "localId": "desired username",
        "serverUrl": "the url to the server"
    }
```

#### Returns

```json
    {
        "accessToken": "abc123",
        "userId": "@id:serverName",
    }
```
or

error

# createRoom(options)
create a new room.

#### options
The options contains room properties. All of the parameters are optional.

```json
    {
        "invite": "A single or list of users to invite when creating the room.",
        "name": "The display name of the room.",
        "type": "The type that should be assigned to the room.",
        "alias": "A local alias for the room id.",
        "state": {
                    "type": "The type of the state.",
                    "stateKey": "An optional state key",
                    "content": "The content of the state."
                    },
        "creationContent":"Is an object adding extra properties"
        "historyVisibility": "The desired history visibility of the room.",
        "joinRule": "The desired join rule of the room.public room will use the 'open' join rule while a private room will user 'invite'"
    }
```

#### Returns
```json
{"roomId": "!sefiuhWgwghwWgh:example.com"}
```
or

error


