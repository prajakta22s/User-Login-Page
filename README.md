##User Login Page

This is a simple web application that allows users to sign up, log in, and upload images. It implements basic authentication and authorization mechanisms to ensure secure access to user data.

###Features
Users can create an account with a username, email, and password.
Users can log in with their email and password.
Users can upload images to their personal gallery.
Users can view, edit, and delete their own images.
Users can log out of the app.
###Technologies
The front-end is built with React and Bootstrap.
The back-end is built with Node.js and Express.
The database is MongoDB with Mongoose as the ODM.
The authentication and authorization are handled by Passport.js and JWT.
###Installation
To run this project locally, you need to have Node.js, MongoDB, and Git installed on your machine. Then follow these steps:

Clone this repository: git clone https://github.com/your-username/image-upload-web-app.git
Navigate to the project folder: cd image-upload-web-app
Install the dependencies: npm install
Create a .env file in the root folder and add the following variables:
PORT=3000
MONGO_URI=mongodb://localhost:27017/image-upload-web-app
JWT_SECRET=your-secret-key

Start the server: npm start
Open your browser and go to http://localhost:3000
###Demo
You can see a live demo of this project here: Image Upload Web App

###License
This project is licensed under the MIT License. See the LICENSE file for more details
