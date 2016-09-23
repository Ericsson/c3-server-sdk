import requests
import json


class Client:
    def __init__(self, secret, serverUrl):
        self.secret = secret
        self.serverUrl = serverUrl

    def get_or_create_user(self, payload):
        headers = {'asToken': self.secret, 'content-type': 'application/json'}
        data = json.dumps(payload)
        r = requests.post(self.serverUrl + "v1/upsertUser", data=data, headers=headers)
        return r.json(), r.status_code

    def create_room(self, options={}):
        headers = {'asToken': self.secret, 'content-type': 'application/json'}
        data = json.dumps(options)
        r = requests.post(self.serverUrl + "v1/createRoom", data=data, headers=headers)
        return r.json(), r.status_code
