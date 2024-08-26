<h1 align="center">ShelterMap Backend</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white">
  <img src="https://img.shields.io/badge/Knex.js-000000?style=for-the-badge&logo=knex&logoColor=white">
</p>

## Overview
**ShelterMap Backend** is the API service for the ShelterMap project, designed to manage shelters and connect them with individuals offering help. It handles user authentication, shelter data management, updates to shelter needs, category assignments, and user feedback. The backend supports shelter representatives in registering and managing their shelters, while providing the public with access to shelter information and upvoting capabilities.

## Technologies Used
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Knex.js](https://knexjs.org/)
- **Authentication**: [JWT (JSON Web Token)](https://jwt.io/)
- **Password Hashing**: [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Security**: [helmet](https://www.npmjs.com/package/helmet), [cors](https://www.npmjs.com/package/cors)

## Database Schema

### Tables
- **Users**: Stores user data for authentication and authorization.
- **Shelters**: Stores shelter information, including location and associated user.
- **Needs**: Stores predefined needs that shelters can select from.
- **Categories**: Stores different categories that can be associated with shelters.
- **Shelter Categories**: Associates shelters with specific categories.
- **Votes**: Tracks upvotes for shelters.

### Migrations
- **Create Users Table**: Defines the schema for storing user information.
- **Create Shelters Table**: Defines the schema for storing shelter information.
- **Create Needs Table**: Defines the schema for storing predefined needs.
- **Create Categories Table**: Defines the schema for storing categories.
- **Create Shelter Categories Table**: Defines the schema for associating shelters with categories.
- **Create Votes Table**: Defines the schema for storing user votes on shelters.

### Seeds
- **01_add_users**: Seeds initial user data.
- **02_add_shelters**: Seeds initial shelter data.
- **03_add_needs**: Seeds predefined needs.
- **04_add_categories**: Seeds initial categories.

## API Routes

### User Authentication
- **POST** `/api/register`  
  Register a new user.

- **POST** `/api/login`  
  Authenticate user and return JWT.

### Shelter Management
- **POST** `/api/shelters`  
  Add a new shelter (requires authentication).

- **GET** `/api/shelters`  
  Get a list of all shelters.

- **GET** `/api/shelters/:id`  
  Get detailed information about a specific shelter.

- **PUT** `/api/shelters/:id`  
  Update shelter details (requires authentication).

- **DELETE** `/api/shelters/:id`  
  Delete a shelter (requires authentication).

### Needs Management
- **POST** `/api/shelters/:id/needs`  
  Add needs to a shelter (requires authentication).

- **GET** `/api/needs`  
  Get a list of all predefined needs.

### Category Management
- **POST** `/api/categories`  
  Add a new category.

- **GET** `/api/categories`  
  Get a list of all categories.

- **POST** `/api/shelters/:id/categories`  
  Associate a shelter with categories (requires authentication).

- **DELETE** `/api/shelters/:id/categories/:categoryId`  
  Remove a category from a shelter (requires authentication).

### Feedback & Upvote System
- **POST** `/api/votes`  
  Upvote a shelter (requires authentication).

- **GET** `/api/votes`  
  Get the number of votes for a specific shelter.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MatheusCampagnolo/sheltermap-backend.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables by creating a `.env` file:**
   ```bash
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=sheltermaps
   JWT_SECRET=your_secret_key
   ```

4. **Run migrations:**
   ```bash
   npx knex migrate:latest
   ```

5. **Seed the database:**
   ```bash
   npx knex seed:run
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

## Testing

- **Testing Routes**: Use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test API routes and ensure they are functioning correctly.
- **Unit Testing**: Consider adding unit tests using a testing framework like [Jest](https://jestjs.io/) to ensure code reliability.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests for new features, bug fixes, and improvements.

## License

This project is licensed under the [MIT License](LICENSE).
