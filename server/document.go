package main

import (
	"log"
	"strconv"
	"time"

	"gopkg.in/redis.v3"
)

var documentID = 0

// Document represents each text file to be searched
type Document struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	Source    string    `json:"source"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func getDocumentID() int {
	client := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	defer client.Close()

	if documentID == 0 {
		docStr, err := client.Get("DocCount").Result()
		if err != nil {
			log.Println(err)
		}
		if docStr != "" {
			documentID, _ = strconv.Atoi(docStr)
		}
	}

	documentID++
	// TODO(awakia): consider using client.Incr("DocCount")
	client.Set("DocCount", documentID, 0)

	return documentID
}

// NewDocument create a new document.
func NewDocument(title, content, source string) Document {
	now := time.Now()
	return Document{
		getDocumentID(),
		title,
		content,
		source,
		now,
		now,
	}
}
