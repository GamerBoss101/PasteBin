# PASTEBIN 

## Description
This is a simple pastebin written in Svelte. It uses mongodb to store the pastes.

## Installation


```bash
npm install 
// or 
pnpm install
```

### Requirements
- NodeJS
- MongoDB

## API

### POST /api/bin
- headers
  - Content-Type: application/json
  - `apiKey` : `string` (required)
- body 
  - `name` : `string`
  - `content` : `string`
  - `language` : `string` (txt/html/css/js/java/php/py/cpp)

### GET /api/bin/:id
- headers
  - Content-Type: application/json
  - `apiKey` : `string` (required)
- params
  - `id` : `string`

### PUT /api/bin/:id
- headers
  - Content-Type: application/json
  - `apiKey` : `string` (required)
- body 
  - `name` : `string`
  - `content` : `string`

### DELETE /api/bin/:id
- headers
  - `apiKey` : `string` (required)