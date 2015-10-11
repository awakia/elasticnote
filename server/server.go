package main

import (
	"github.com/codegangsta/negroni"
	"github.com/julienschmidt/httprouter"
	"github.com/unrolled/render"
)

var ren = render.New()

func main() {
	router := httprouter.New()

	documentCtrl := NewDocumentController()
	router.GET("/", documentCtrl.Index)
	router.GET("/documents", documentCtrl.Index)
	router.GET("/documents/:id", documentCtrl.Show)
	router.POST("/documents", documentCtrl.Create)

	n := negroni.Classic()
	n.UseHandler(router)
	n.Run(":8080")
}
