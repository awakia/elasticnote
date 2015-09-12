package main

import (
	"net/http"

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
}

// Create creates new document
func (ctl *DocumentController) Create(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
}
