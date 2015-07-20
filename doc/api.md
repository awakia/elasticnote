# API
* [Document](#document)
 * [POST /documents](#post-documents)
 * [DELETE /documents/:id](#delete-documentsid)
 * [GET /documents/:id](#get-documentsid)
 * [GET /documents](#get-documents)
 * [PATCH /documents/:id](#patch-documentsid)

## Document
documents to search

### Properties
* created_at
 * when document was created
 * Example: `"2012-01-01T12:00:00Z"`
 * Type: string
 * Format: date-time
* id
 * unique identifier of document
 * Example: `"01234567-89ab-cdef-0123-456789abcdef"`
 * Type: integer
 * Format: uuid
 * ReadOnly: true
* name
 * title of document
 * Example: `"Great Title"`
 * Type: string
* updated_at
 * when document was updated
 * Example: `"2012-01-01T12:00:00Z"`
 * Type: string
 * Format: date-time

### POST /documents
Create a new document.


```
POST /documents HTTP/1.1
Host: api.example.com
```

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "Great Title",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### DELETE /documents/:id
Delete an existing document.

```
DELETE /documents/01234567-89ab-cdef-0123-456789abcdef HTTP/1.1
Host: api.example.com
```

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "Great Title",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### GET /documents/:id
Info for existing document.

```
GET /documents/01234567-89ab-cdef-0123-456789abcdef HTTP/1.1
Host: api.example.com
```

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "Great Title",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### GET /documents
List existing documents.

```
GET /documents HTTP/1.1
Host: api.example.com
```

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "Great Title",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### PATCH /documents/:id
Update an existing document.


```
PATCH /documents/01234567-89ab-cdef-0123-456789abcdef HTTP/1.1
Host: api.example.com
```

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "Great Title",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

