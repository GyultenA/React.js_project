This is a web application for animal hotel (dogs and cats). The project was developed for the course ReactJS.

#USAGE
Consists of two main directories server and client side.
1. Open a terminal and navigate to the server directory using the command `cd server`.
2. Run the command `node server.js` to start the server. The server will run on http://localhost:3030
3. Open a new terminal and navigate to the client directory using the command `cd client`.
4. Run the command `npm install` to install the necessary dependencies.
5. Run the command `npm run dev` to start the client. 
When the client setup is complete you can open the following link in your web browser: http://localhost:5173 .

API Endpoints
Base URL http://localhost:3030. You make the requests to the following endpoints:
1.Login
 POST  /users/login
 Request:
 {
    "email": "string",
    "password": "string"
}

2. Register
Create a new user by sending a 
POST  /users/register
Request:
{
    "username": "string",
    "email": "string",
    "password": "string"
}

3. Logout
Send an authorized GET request to /users/logout.

4. Get User Details
Send an authorized GET request to /users/me.

5. Data management
  READ 
  An end point is revealed at /data, which grants access to information, stored on the service. GET requests to the service will return the following responses:

  GET /data/reviews - array of all entries in target collection; will return 404 if collection does not exist
  GET /data/reviews/:id - entry matching the given ID; will return 404 if collection or entry do not exist with appropriate message attached to response

  CREATE
  This request requires authorization.
  Send POST request to /data/reviews/create to create new entry. ID will be generated automatically.

  UPDATE
  This request requires authorization. Only the owner of the resource can edit it.
  Send PUT request to /data/reviews/:id/edit to update a single entry. Note that the existing entry will be replaced!

  DELETE
  This request requires authorization. Only the owner of the resource can delete it.
  Send DELETE request to /data/reviews/:id to delete a single entry.