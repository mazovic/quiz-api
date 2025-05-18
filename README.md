# OSSLoop Admin Backend

A backend administration service for the OSSLoop platform.

## Overview

This repository contains the backend API for the OSSLoop administration panel, built with Node.js, Express, TypeScript, and Sequelize ORM for MySQL database management.

## Prerequisites

- Node.js (v18 or higher recommended)
- MySQL 8.0+
- npm or yarn package manager

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js 5.x
- **ORM**: Sequelize 6.x
- **Database**: MySQL
- **Logging**: Winston
- **Security**: Helmet
- **Code Quality**: ESLint, Prettier, Husky, CommitLint

## Getting Started

### 1. Clone the repository

```bash
git clone https://gitlab.com/ossloop-admin-back/ossloop-admin-back.git
cd ossloop-admin-back
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file and set your configuration:

```bash
cp .env.example .env
```

> **Note:** Make sure to update the database connection settings to match your local or production database before running the application.

### 4. Set up the database

Create your MySQL database:

```bash
mysql -u root -p
```

```sql
CREATE DATABASE ossloop;
exit;
```

Run migrations to set up database tables:

```bash
npm run db:migrate
```

(Optional) Seed the database with initial data:

```bash
npm run db:seed
```

### 5. Start the development server

```bash
npm run dev
```

Your API should now be running at http://localhost:3050

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (compiled to JavaScript)
- `npm run start` - Run in production mode (requires build first)
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Run ESLint and fix issues
- `npm run db:migrate` - Run database migrations
- `npm run db:migrate:undo` - Undo the last migration
- `npm run db:seed` - Seed the database with sample data
- `npm run db:seed:undo` - Remove all seed data

## Database Migrations

This project uses Sequelize CLI for database migrations and seeding.

### Running Migrations and Seeds

The following npm scripts are available for database operations:

```bash
# Run migrations to create/update database tables
npm run db:migrate

# Undo the last migration
npm run db:migrate:undo

# Seed the database with initial data
npm run db:seed

# Remove all seed data
npm run db:seed:undo
```

### Creating New Migrations and Seeds

To create new migration or seed files:

```bash
# Create a new migration
npm run migrate:generate #Add name for the migration after it

# Create a new seeder
npm run seed:generate #Add name for the seed after it
```

## Commit Guidelines

This project follows conventional commit standards using commitlint:

```
type(scope): subject
```

Example commit messages:

- `feat: add user authentication`
- `fix(auth): resolve token validation issue`
- `docs: update API documentation`
- `chore: update dependencies`

## Development Practices

- Maintain code quality with ESLint and Prettier
- Write tests for new features
- Use clear and descriptive commit messages
- Follow conventional commit format
- Create branches for each feature or fix

## License

ISC License

## Support

For issues and feature requests, please use the [issue tracker](https://gitlab.com/ossloop-admin-back/ossloop-admin-back/issues).
