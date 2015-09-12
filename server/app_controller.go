package main

import "github.com/unrolled/render"

// AppController is base for all controllers
type AppController struct {
	*render.Render
}

// NewAppController create new AppController
func NewAppController() AppController {
	return AppController{
		render.New(),
	}
}
