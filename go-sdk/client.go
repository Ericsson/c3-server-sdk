package main

import (
	"gorequest"
	"log"
	"strings"
)

type ASClient struct {
	secret  string
	baseURL string
}

func CreateClient(secret, baseURL string) *ASClient {
	client := new(ASClient)
	client.secret = secret
	client.baseURL = baseURL
	return client
}

func (c *ASClient) GetOrCreateUser(name string) (string, []error) {
	endpointUrl := strings.Join([]string{c.baseURL, "v1/upsertUser"}, "/")
	request := gorequest.New()
	_, body, err := request.Post(endpointUrl).
		Set("astoken", c.secret).
		Send(`{"localId":"` + name + `"}`).
		End()
	if err != nil {
		log.Panic("Error: ", err)
	}
	return body, err
}

func (c *ASClient) CreateRoom(options string) (string, []error) {
	endpointUrl := strings.Join([]string{c.baseURL, "v1/createRoom"}, "/")
	request := gorequest.New()
	_, body, err := request.Post(endpointUrl).
		Set("astoken", c.secret).
		Send(options).
		End()
	if err != nil {
		log.Panic("Error: ", err)
	}
	return body, err
}
