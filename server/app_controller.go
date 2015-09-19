package main

import (
	"log"

	"github.com/unrolled/render"
	"gopkg.in/redis.v3"
)

// AppController is base for all controllers
type AppController struct {
	*render.Render
	redis *redis.Client
}

// NewAppController create new AppController
func NewAppController() AppController {
	client := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	_, err := client.Ping().Result()
	if err != nil {
		log.Println(err)
	}
	return AppController{
		render.New(),
		client,
	}
}
