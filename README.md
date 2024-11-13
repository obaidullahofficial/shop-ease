# Microservices Project with Docker

This project demonstrates a **Microservices Architecture** where various services (Users, Products, Orders) are encapsulated in individual Docker containers. The project includes both **backend microservices** and a **frontend** to interact with them.

## Features

- **Microservices** for Users, Products, and Orders, each with APIs for CRUD operations.
- **Frontend** built with HTML, CSS, and JavaScript that allows interaction with the microservices.
- Containerized using **Docker** and orchestrated with **Docker Compose**.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)

---

## Setup & Run Instructions

Follow the steps below to get the project up and running.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/microservices-project.git
cd microservices-project
```
### 2. Build and Start Containers
You can now build and run all services using Docker Compose. This will automatically download the necessary images, build the containers, and start the services.
To build the services and run them in detached mode (-d):
```
docker-compose up --build -d
--build forces Docker Compose to rebuild the images.
-d runs the containers in the background (detached mode).
```
### 3. Verify the Setup
After running the above command, Docker Compose will start the following services:
Frontend: Accessible on http://localhost:80
User Service: Accessible on http://localhost:5001/users
Product Service: Accessible on http://localhost:5002/products
Order Service: Accessible on http://localhost:5003/orders
You can open your browser and visit http://localhost:80 to see the frontend application interacting with the microservices.

### 4. Stop the Containers
If you want to stop the containers, use the following command:
```
docker-compose down
```
This stops and removes all running containers defined in the docker-compose.yml file.

Services API
Each of the microservices exposes the following APIs:
User Service (http://localhost:5001)
GET /users: Get all users.
POST /users: Add a new user.
DELETE /users/{id}: Remove a user by ID.
Product Service (http://localhost:5002)
GET /products: Get all products.
POST /products: Add a new product.
DELETE /products/{id}: Remove a product by ID.
Order Service (http://localhost:5003)
GET /orders: Get all orders.
POST /orders: Add a new order.
DELETE /orders/{id}: Remove an order by ID.

Frontend
The frontend is built using HTML, CSS, and JavaScript. It interacts with the backend services via the following endpoints:
Get Users: GET /users
Add User: POST /users
Remove User: DELETE /users/{id}
Get Products: GET /products
Add Product: POST /products
Remove Product: DELETE /products/{id}
Get Orders: GET /orders
Add Order: POST /orders
Remove Order: DELETE /orders/{id}
You can add, remove, and fetch data for users, products, and orders from the frontend, and it will be reflected in the backend microservices.

Notes
The frontend is served by the frontend container, and it interacts with the microservices via their internal Docker network using the service names as hostnames.
If you need to change the port mappings, you can adjust them in the docker-compose.yml file.
The microservices use simple JSON responses to demonstrate the basic functionality of a RESTful API.

Troubleshooting
CORS Issues: If you encounter any CORS errors in the browser, ensure that the backend services allow cross-origin requests from the frontend.
API Not Accessible: Check if the containers are running using docker-compose ps. If not, check the logs with docker-compose logs for errors.

License
This project is licensed under the MIT License - see the LICENSE file for details.
```
