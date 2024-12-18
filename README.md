# **SMS Routing and Analytics Service**

This project is a **Node.js** backend application that routes incoming SMS messages to the appropriate carrier based on the destination country and message type. It follows a clean design pattern (Strategy Pattern) and is integrated with MongoDB to store SMS data.

---

## **Table of Contents**
- [Project Features](#project-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Running Unit Tests](#running-unit-tests)
- [Docker Setup](#docker-setup)
- [Design Choices](#design-choices)
- [Future Improvements](#future-improvements)

---

## **Project Features**

- Routes SMS messages to carriers based on message types (`OTP`, `PROMOTIONAL`).
- Uses **Strategy Pattern** for scalable and clean routing logic.
- Saves SMS metadata and delivery statuses in a **MongoDB** database.
- Containerized using **Docker** for easy deployment.
- Includes unit tests to verify routing logic.

---

## **Technologies Used**

- **Node.js** (Backend Framework)
- **Express.js** (API Management)
- **MongoDB** (Database for message storage)
- **Jest** (Unit Testing Framework)
- **Docker** (Containerization)
- **Design Patterns**: Strategy Pattern

---

## **Project Structure**

```
sms-routing-service/
├── src/
│   ├── config/          # Configuration files
│   ├── models/          # MongoDB Schemas
│   ├── services/        # SMS routing logic
│   ├── controllers/     # API controllers
│   ├── routes/          # API Routes
│   ├── tests/           # Unit Tests
│   └── app.js           # Express application
├── .env                 # Environment variables
├── Dockerfile           # Docker container setup
├── package.json         # Project metadata
├── README.md            # Documentation
└── server.js            # Entry point
```

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following tools installed:
1. **Node.js** and **npm**: Download [here](https://nodejs.org/).
2. **MongoDB**: Ensure MongoDB is running locally or use a cloud-hosted service (e.g., Atlas).
3. **Docker**: Required for containerized deployment ([Install Docker](https://www.docker.com/)).

---

### **Setup Instructions**

1. **Clone the Repository**

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Configure Environment**:
    Create a `.env` file in the root directory:
    ```
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/sms-routing-service
    ```

4. **Start the Server**:
    ```bash
    npm start
    ```

The server will start on `http://localhost:3000`.

---

## **API Endpoints**

| Method | Endpoint        | Description                       |
|--------|-----------------|-----------------------------------|
| POST   | `/api/sms/route` | Route an SMS to a carrier         |

### **Request Example**:
**POST** `/api/sms/route`

Request Body:
```json
{
  "sender": "+1234567890",
  "recipient": "+9876543210",
  "messageType": "OTP"
}
```

Response:
```json
{
  "message": "SMS routed",
  "sms": {
    "sender": "+1234567890",
    "recipient": "+9876543210",
    "messageType": "OTP",
    "carrier": "Carrier_A",
    "timestamp": "2024-01-01T12:00:00.000Z",
    "deliveryStatus": "PENDING"
  }
}
```

---

## **Running Unit Tests**

Unit tests ensure that routing logic works as expected.

To run the tests:
```bash
npx jest
```

---

## **Docker Setup**

1. **Build the Docker Image**:
    ```bash
    docker build -t sms-routing-service .
    ```

2. **Run the Container**:
    ```bash
    docker run -p 3000:3000 sms-routing-service
    ```

3. The app will be available at `http://localhost:3000`.

---

## **Design Choices**

1. **Strategy Pattern**:
   The SMS routing logic is implemented using the **Strategy Pattern**. Each `messageType` (e.g., `OTP`, `PROMOTIONAL`) has its own routing strategy, making the system easy to extend. (Because abstract classes are not available in JavaScript, the pattern is implemented using classes and inheritance. This affects the design slightly, but for the speed of development, I've chosen JavaScript instead of TypeScript, in which the Strategy Pattern would be easier to implement.)

2. **Express.js**:
   Express.js is used for API management. It provides a simple and flexible framework for building web applications.

---

## **Future Improvements**

- **Analytics Module**:
  - Track and aggregate SMS statistics (e.g., delivery success rates, performance by carrier).
  - Provide endpoints for viewing analytics data.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).