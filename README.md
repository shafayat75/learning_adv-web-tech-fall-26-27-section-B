# NestJS Lab Task 1 – Product Management API

## Student Information

- **Name:** Md. Shafayat Hossain
- **ID:** 23-50276-1
- **Course:** Advance Web Technologies
- **Section:** B

---

## Project Overview

This project is developed for **Lab Task 1** of the Advance Web Technologies course.

The project implements RESTful CRUD APIs using:

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Postman

The application manages two types of records:

1. Products
2. Employees

All records are stored and retrieved from the PostgreSQL database.

---

## Technologies Used

- **NestJS**
- **TypeScript**
- **PostgreSQL**
- **TypeORM**
- **pnpm**
- **Postman**
- **pgAdmin 4**

---

# Database Setup

The project uses PostgreSQL as the database and TypeORM as the ORM.

### Database Name

```text
user_management
```

### Environment Configuration

Create a `.env` file in the project root:

```env
DB_CLIENT=postgres
DB_DATABASE=user_management
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432

PORT=5001
```

Replace `your_postgres_password` with your local PostgreSQL password.

The actual `.env` file should not be uploaded to GitHub.

---

# Installation

Install all project dependencies using:

```bash
pnpm install
```

---

# Database Migration

Run the database migrations using:

```bash
pnpm migration:run
```

This creates the required database tables.

---

# Run the Application

Start the NestJS development server:

```bash
pnpm start:dev
```

The application runs at:

```text
http://localhost:5001
```

---

# Product API

## Product Fields

| Field | Type |
|---|---|
| id | Generated Primary Key |
| name | String |
| category | String |
| price | Number |
| quantity | Integer |

## Product Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| PATCH | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

### Example Requests

```text
POST   http://localhost:5001/products
GET    http://localhost:5001/products
GET    http://localhost:5001/products/1
PATCH  http://localhost:5001/products/1
DELETE http://localhost:5001/products/1
```

---

# Employee API

## Employee Fields

| Field | Type |
|---|---|
| id | Generated Primary Key |
| name | String |
| email | String |
| phone | String |
| password | String |
| age | Integer |
| yearsOfWorking | Integer |

## Employee Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get employee by ID |
| PATCH | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

### Example Requests

```text
POST   http://localhost:5001/employees
GET    http://localhost:5001/employees
GET    http://localhost:5001/employees/1
PATCH  http://localhost:5001/employees/1
DELETE http://localhost:5001/employees/1
```

---

# Postman Testing

All API endpoints were tested using Postman.

## Required Product CRUD Screenshots

```text
screenshots/
├── 01-create.png
├── 02-get-all.png
├── 03-get-by-id.png
├── 04-update.png
├── 05-confirm-update.png
├── 06-delete.png
└── 07-confirm-delete.png
```

### Screenshot Details

| Screenshot | Description |
|---|---|
| `01-create.png` | Create and save a product using POST |
| `02-get-all.png` | Retrieve all products |
| `03-get-by-id.png` | Retrieve a product using its ID |
| `04-update.png` | Update product information using PATCH |
| `05-confirm-update.png` | Confirm the updated product information |
| `06-delete.png` | Delete a product |
| `07-confirm-delete.png` | Confirm that the deleted product is no longer present |

---

## Additional Product Testing Screenshots

An additional Product CRUD testing cycle was performed using a second product.

```text
screenshots/
├── 01create-second-product.png
├── 02second-product-get-all.png
├── 03second-product-get-by-id.png
├── 04-update-second-product.png
├── 05-confirm-update-second-product.png
├── 06-delete-second-product.png
└── 07-confirm-delete-second-product.png
```

---

# Employee CRUD Screenshots

Employee CRUD operations were also tested successfully using Postman.

```text
screenshots/
├── employee-01-create.png
├── employee-02-get-all.png
├── employee-03-get-by-id.png
├── employee-04-update.png
├── employee-05-confirm-update.png
├── employee-06-delete.png
└── employee-07-confirm-delete.png
```

### Employee Screenshot Details

| Screenshot | Description |
|---|---|
| `employee-01-create.png` | Create an employee using POST |
| `employee-02-get-all.png` | Retrieve all employees |
| `employee-03-get-by-id.png` | Retrieve employee by ID |
| `employee-04-update.png` | Update employee information |
| `employee-05-confirm-update.png` | Confirm updated employee information |
| `employee-06-delete.png` | Delete an employee |
| `employee-07-confirm-delete.png` | Confirm that the employee was deleted |

---

# CRUD Operations

## Product

The Product module supports:

- Create
- Read all
- Read by ID
- Update
- Delete

## Employee

The Employee module supports:

- Create
- Read all
- Read by ID
- Update
- Delete

Database operations are handled through the service layer and records are stored in PostgreSQL.

---

# Project Structure

```text
product-management-api/
│
├── src/
│   ├── config/
│   ├── database/
│   │   └── migrations/
│   │
│   ├── modules/
│   │   ├── product/
│   │   │   ├── entities/
│   │   │   ├── product.controller.ts
│   │   │   ├── product.service.ts
│   │   │   └── product.module.ts
│   │   │
│   │   └── employee/
│   │       ├── entities/
│   │       ├── employee.controller.ts
│   │       ├── employee.service.ts
│   │       └── employee.module.ts
│   │
│   ├── app.module.ts
│   └── main.ts
│
├── screenshots/
├── package.json
├── pnpm-lock.yaml
├── .env.example
├── .gitignore
└── README.md
```

---

# GitHub Submission Structure

```text
Main Repo
└── Mid
    └── Lab task 1
        └── product-management
            └── product-management-api
```

The `product-management-api` folder contains:

- `src/`
- `screenshots/`
- `README.md`
- `package.json`
- `pnpm-lock.yaml`
- `.gitignore`
- `.env.example`

The following files and folders should not be uploaded:

```text
node_modules/
dist/
.env
```

---

# Important Notes

- PostgreSQL is used for persistent data storage.
- TypeORM is used for database operations.
- Product and Employee data are stored in the actual database.
- The application does not use an in-memory array for CRUD operations.
- The actual `.env` file must not be committed to GitHub.
- Database passwords should not be included in screenshots.
- `node_modules` and `dist` should not be included in the GitHub submission.

---

# Author

**Md. Shafayat Hossain**  
**ID:** 23-50276-1  
**Course:** Advance Web Technologies  
**Section:** B
