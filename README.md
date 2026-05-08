# School Management API

A RESTful School Management API built using Node.js, Express.js, and MySQL.

This project allows users to:

- Add new schools
- Retrieve schools sorted by proximity to a user’s location
- Run MySQL using Docker
- Test APIs using Postman
- Access hosted API documentation

---

# Features

- Add School API
- List Schools by distance
- Input validation
- Distance calculation using Haversine Formula
- Dockerized MySQL database
- RESTful architecture
- Postman Collection included
- API Documentation included

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Docker
- Postman

---

# Project Structure

```bash
school-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── schoolController.js
│
├── routes/
│   └── schoolRoutes.js
│
├── utils/
│   └── distance.js
│
├── postman/
│   └── school-management-api.postman_collection.json
│
├── docker-compose.yml
├── init.sql
├── .env
├── app.js
├── package.json
└── README.md
````

---

# API Base URL

## Local

```bash
http://localhost:5000
```

## Production

```bash

```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/school-management-api.git
```

```bash
cd school-management
```

---

# Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3307
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=school_management
```

---

# Docker Setup (MySQL)

## Start MySQL Container

```bash
docker compose up -d
```

---

## Verify Running Containers

```bash
docker ps
```

---

## Stop Containers

```bash
docker compose down
```

---

# Run Application

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
node app.js
```

---

# Database Schema

## Schools Table

| Column    | Type              |
| --------- | ----------------- |
| id        | INT (Primary Key) |
| name      | VARCHAR           |
| address   | VARCHAR           |
| latitude  | FLOAT             |
| longitude | FLOAT             |

---

# API Endpoints

# 1. Add School

Adds a new school to the database.

## Endpoint

```http
POST /api/addSchool
```

---

## Request Body

```json
{
  "name": "Sunrise International School",
  "address": "Andheri West, Mumbai, Maharashtra",
  "latitude": 19.1368,
  "longitude": 72.8273
}
```

---

## Success Response

```json
{
  "success": true,
  "message": "School added successfully",
  "schoolId": 1
}
```

---

## Validation Rules

* name is required
* address is required
* latitude must be a number
* longitude must be a number

---

# 2. List Schools

Returns all schools sorted by nearest distance from the user's location.

## Endpoint

```http
GET /api/listSchools
```

---

## Query Parameters

| Parameter | Type  |
| --------- | ----- |
| latitude  | float |
| longitude | float |

---

## Example Request

```http
GET /api/listSchools?latitude=19.0760&longitude=72.8777
```

---

## Success Response

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Sunrise International School",
      "address": "Andheri West, Mumbai, Maharashtra",
      "latitude": 19.1368,
      "longitude": 72.8273,
      "distance": "8.25 KM"
    },
    {
      "id": 2,
      "name": "Green Valley School",
      "address": "Navi Mumbai, Maharashtra",
      "latitude": 19.0330,
      "longitude": 73.0297,
      "distance": "18.40 KM"
    }
  ]
}
```

---

# Distance Calculation

The API uses the Haversine Formula to calculate the geographical distance between:

* User coordinates
* School coordinates

Schools are returned sorted from nearest to farthest.

---

# Postman Collection

The exported Postman collection is available in:

```bash
/postman/school-management-api.postman_collection.json
```

Import this file into Postman to test the APIs.

---

# API Documentation

Public API documentation:

```bash
https://your-fern-docs-link.com
```

---

# Deployment

The API can be deployed using:

* Railway
* Render
* Vercel

---

# Sample Test Data

```json
{
  "name": "Delhi Public School",
  "address": "Navi Mumbai, Maharashtra",
  "latitude": 19.0330,
  "longitude": 73.0297
}
```

```json
{
  "name": "St. Xavier's High School",
  "address": "Borivali, Mumbai, Maharashtra",
  "latitude": 19.2307,
  "longitude": 72.8567
}
```

---

# Scripts

## Start Server

```bash
npm start
```

## Development Server

```bash
npm run dev
```

---

# Author

Sarakshi More
