This project provides a basic user authentication system using the MERN stack (MongoDB, Express, React, Node.js). Users can register, log in, log out, and access a protected user profile page.

Getting Started:

Prerequisites:

Node.js and npm (or yarn) installed on your system.
A code editor or IDE of your choice.
Clone the Repository:

Bash
git clone https://github.com/Abhishek-76/user-auth-MERN.git
cd mern-auth
Use code with caution.
content_copy
Replace your-username/mern-auth.git with the actual repository URL if you're cloning from a remote repository.

Install Dependencies:

Bash
npm install  # or yarn install
Use code with caution.
content_copy
This will install all the required dependencies for both the backend and frontend.

Running the Application:

Start the Backend Server:

Bash
npm run server:start  # or yarn start:server
Use code with caution.
content_copy
This will start the Node.js server and connect to the MongoDB database (local by default).

Start the React Development Server:

Bash
npm run client:start  # or yarn start:client
Use code with caution.
content_copy
This will start the React development server and open the application in your default browser, usually at http://localhost:3000.

Features:

User registration with name, email, and password.
Login functionality with JWT-based authentication.
Protected user profile page accessible only to logged-in users.
Basic error handling.
