package main

import "time"

var documentID = 1

// Document represents each text file to be searched
type Document struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	Source    string    `json:"source"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// NewDocument create a new document.
func NewDocument(title, content, source string) Document {
	documentID++
	now := time.Now()
	return Document{
		documentID,
		title,
		content,
		source,
		now,
		now,
	}
}
