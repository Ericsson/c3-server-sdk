Install via git clone

```bash
$ git clone https://github.com/Ericsson/c3-server-sdk.git
$ cd c3-server-sdk/python-sdk
$ pip install -r requirements.txt
```

## Example

```python
client = new Client("The secret token provided by server", "https://apServer")
```


```python
client.get_or_create_user({"localId": "Alice",  "accessTokenDurationSeconds": 100})
```


# get_or_create_user(options)

#### options
```json
    {
        "localId": "desired username",
        "accessTokenDurationSeconds": "The duration which the access token should be valid"
    }
```

#### Returns

```json
    ({
        "accessToken": "abc123",
        "userId": "@id:serverName",
    }, 200)
```
or


error

# createRoom(options)
create a new room.



```python
client.create_room()
```
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

#### Returns
```json
    ({
        "roomId": "!sefiuhWgwghwWgh:example.com"
    }, 200)
```
or

error


