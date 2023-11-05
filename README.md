# PASTEBIN 

## Table of Contents 
- [PASTEBIN](#pastebin)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
    - [Requirements](#requirements)
    - [Environment Variables](#environment-variables)
  - [BIN API](#bin-api)
    - [POST /api/bin](#post-apibin)
    - [GET /api/bin/:id](#get-apibinid)
    - [PUT /api/bin/:id](#put-apibinid)
    - [DELETE /api/bin/:id](#delete-apibinid)
  - [IMAGE API](#image-api)
    - [POST /api/image](#post-apiimage)
    - [GET /api/image/:id](#get-apiimageid)
    - [DELETE /api/image/:id](#delete-apiimageid)

## Description
This is a simple pastebin written in Svelte. It uses mongodb to store the pastes.


## Installation

### Requirements
- NodeJS
- MongoDB


```bash
npm install 
// or 
pnpm install
```

### Environment Variables
- `PORT` : `number` (default: 3000)
- `DB_URI` : `string` (required)

## BIN API

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
-  params
  - `id` : `string`
- body 
  - `name` : `string`
  - `content` : `string`

### DELETE /api/bin/:id
- headers
  - `apiKey` : `string` (required)
- params
  - `id` : `string`

## IMAGE API

### POST /api/image
- headers
  - Content-Type: multipart/form-data
  - `apiKey` : `string` (required)
- body
  - `image` : `file` (required)
  - `name` : `string` (required)

### GET /api/image/:id
- headers
  - Content-Type: application/json
  - `apiKey` : `string` (required)
- params
  - `id` : `string` (required)
  
### DELETE /api/image/:id
- headers
  - `apiKey` : `string` (required)
- params
  - `id` : `string` (required)
  
