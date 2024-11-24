# Car Store B4A2V3

## Project Overview
This Car Store Management API allows users to manage cars. The API supports operations like adding, updating, deleting, and gettin car lists, as well as placing orders, calculating total prices, and adjusting stock.

## Technologies Used
- Node.js: JavaScript runtime environment.
- Express: Web framework for building RESTful APIs.
- MongoDB: NoSQL database for storing car and order data.
- Mongoose: ODM for MongoDB that helps in modeling data and enforcing schema validation.
- TypeScript: Superset of JavaScript that adds static typing for better development experience.
- dotenv: Loads environment variables from a .env file to manage configuration.

  
## Features
- Car CRUD Operations: Add, read, update, and delete car data.
- Order Management: Place orders and calculate the total price based on the car's price and quantity.
- Stock Management: Automatically reduce car stock upon placing an order.
- Car Search: Search for cars by category, brand, or model.
- Validation: Custom validation to ensure that fields like price and quantity are valid.
- Error Handling: Detailed error responses with proper status codes.

  
## Installation Instructions
### Prerequisites
#### Before starting, ensure you have the following installed:

- Node.js (v14.x or higher)
- MongoDB (Local or cloud instance, like MongoDB Atlas)

### Setup
1. Clone the Repository: First, clone this repository to your local machine:
   ```bash
   https://github.com/rakibul4516/batch-4-assignment-2-rakibul4516.git
   cd batch-4-assignment-2-rakibul4516
   ```

2. Install Dependencies:
```bash
  npm init -y
  npm install express
  npm install mongoose --save
  npm install typescript --save-dev
  npm install cors
  npm install dotenv
```
3. Create the **.env** file:
```bash
  PORT= 5000
  DATABASE_URL= mongodb+srv://username:password@cluster0.tracz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

## Endpoints
### Car Routes
- GET /api/cars - Get all the car data
- GET /api/cars/:carId - Get a single car
- POST /api/cars/create-car - Create a car
- PUT /api/cars/:carId - Update a car
- DELETE /api/cars/:carId - Delete a car
  
#### Example Request Body for Car POST method:
```json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024,
  "price": 25000,
  "category": "Sedan",
  "description": "A reliable family sedan with modern features.",
  "quantity": 50,
  "inStock": true
}
```

#### Example Request Body for Order POST method:
```json
{
  "email": "customer@example.com",
  "id": "6740f04ff5c81e36766f72ea",
  "quantity": 2,
  "totalPrice": 50000
}
```

## Running the Project
### To run the project locally, follow these steps:

```bash
npm run dev
```
