# How to use the SDK


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
client.getOrCreateUser({"localId": "Alice"}).
then(function(result){console.log(result)},
function(error){console.log("error is: ", error)});
```


# getOrCreateUser(options)

#### options
```json
    {
        "localId": "desired username"
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
        "creationContent":"Is an object adding extra properties",
        "historyVisibility": "The desired history visibility of the room.",
        "joinRule": "The room.public room will use the 'open' join rule while a private room will user 'invite'",
        "guestAccessRule": "The desired guest access rule of the room"
    }
```

#### Example
```javascript
    client.createRoom({"creation_content": {
              "cctRoomType": "some.meeting"},
            "initial_state": [{
              "type": "m.room.join_rules",
              "content": {
                "join_rule": "invite"
              }
            }, {
              "type": "some.customer.dialog",
              "content": {
                "dialog": null,
                "params": {}
              }
            }, {
              "type": "m.room.power_levels",
              "content": {
                "users": {
                  "@user-service:user": 100
                },
                "users_default": 0,
                "events": {
                  "m.room.name": 100,
                  "m.room.power_levels": 100,
                  "m.room.history_visibility": 100,
                  "m.room.canonical_alias": 100,
                  "m.room.avatar": 100,
                  "m.room.join_rule": 100,
                  "seb.customer.dialog": 0
                },
                "events_default": 0,
                "state_default": 100,
                "kick": 50,
                "redact": 50,
                "invite": 100
              }
            }],
            "visibility": "private",
            "invite": ["@localId:asAuth"],
            "room_alias_name": "myRoom"
          }).
        then(function(result){console.log(result)},
         function(error){console.log("error is: ", error)})
```


#### Returns
```json
    {
        "roomId": "!sefiuhWgwghwWgh:example.com"
    }
```
or


error


