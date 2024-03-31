# Microservices Application with NestJS

## Overview

This project is a simple Microservices application developed using NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It demonstrates the implementation of an Event-Driven Architecture using RabbitMQ messaging broker.

## Microservices Structure

The application consists of two main Microservices:

1. **Admin Microservice**: Responsible for handling administrative tasks and operations.
2. **Main Microservice**: Handles main functionalities and operations.

Each microservice utilizes its own database:

- **Admin Microservice**: Utilizes a relational database (MySQL) for data storage.
- **Main Microservice**: Utilizes a NoSQL database (MongoDB) for data storage.

## Features

- Integration of NestJS framework for building microservices.
- Implementation of Event-Driven Architecture using RabbitMQ messaging broker.
- Demonstration of utilizing both Relational (MySQL) and NoSQL (MongoDB) databases with NestJS.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` in the root directory.
3. Ensure RabbitMQ is installed and running locally.
4. Configure database connections for both MySQL and MongoDB in the respective microservices.
5. Start both microservices by running `npm start` in their respective directories.

## Dependencies

- NestJS: A progressive Node.js framework.
- RabbitMQ: A messaging broker that implements the Advanced Message Queuing Protocol (AMQP).
- MySQL: A relational database management system.
- MongoDB: A NoSQL document-oriented database program.

