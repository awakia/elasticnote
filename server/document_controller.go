package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

// DocumentController is controller of documents
type DocumentController struct {
	AppController
}

// NewDocumentController creates DocumentController
func NewDocumentController() DocumentController {
	return DocumentController{
		NewAppController(),
	}
}

// Index returns list of documents
func (ctl *DocumentController) Index(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	documents := []Document{
		NewDocument("title", "content\ncontent", "souce"),
	}
	ctl.JSON(w, http.StatusOK, documents)
}

// Show returns the document
func (ctl *DocumentController) Show(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	log.Print(id)
	document, err := ctl.redis.Get("doc" + id).Result()
	if err != nil {
		log.Println(err)
	}
	ctl.JSON(w, http.StatusOK, document)
}

// Create creates new document
func (ctl *DocumentController) Create(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	title := r.FormValue("title")
	content := r.FormValue("content")
	source := r.FormValue("source")
	document := NewDocument(title, content, source)
	err := ctl.redis.Set("doc"+strconv.Itoa(document.ID), document, 0).Err()
	if err != nil {
		log.Println(err)
	}
	ctl.JSON(w, http.StatusOK, document)
}
