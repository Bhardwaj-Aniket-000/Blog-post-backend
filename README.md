# Blog-post-backend
A lightweight and scalable backend for a tech-focused blog platform. Handles post management, user interactions, and API endpoints for dynamic content delivery.

This is the backend for the Tech & Productivity Blog, a modern blog platform focused on sharing tools, strategies, and insights to work smarter in the digital age.

The backend handles:
Blog post management (create, read, update, delete)
API routes for posts, tags, and categories
JSON responses for frontend integration

⚙️ Tech Stack
Node.js + Express
MongoDB with Mongoose (or PostgreSQL/SQLite if you prefer)
CORS + Helmet for security
Dotenv for environment config

//////////////////////////////////////////////////

How to access this Project...
Clone the Repository - git clone <repository-url>
Navigate to the Project Directory - cd server
Install the required dependencies - npm install
Set Up Environment Variables..
    MONGO_LOCAL_URL=mongodb://localhost:27017/blogDB
    CLOUD_NAME=your-cloudinary-cloud-name
    CLOUD_API_KEY=your-cloudinary-api-key
    CLOUD_SECRET_KEY=your-cloudinary-secret-key
    MONGO_URL=your-mongodb-cloud-url
    PORT=3000..

 Start the Backend Server - npm start
 server start on - http://localhost:3000