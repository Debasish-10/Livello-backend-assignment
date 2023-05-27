# Livello-backend-assignment

API Documentation
The project exposes the following APIs for performing CRUD operations:

USERS API

1. Create (HTTP POST): Create a new user.
   Endpoint: /users
   Request body: JSON object representing the new user

2. Read (HTTP GET): Retrieve all existing users.
   Endpoint: /users

3. Read (HTTP GET): Retrieve an existing user.
   Endpoint: /users/:id
   Parameters:
   :id - The unique identifier of the user

4. Update (HTTP PUT): Update an existing user.
   Endpoint: /users/:id
   Parameters:
   :id - The unique identifier of the user
   Request body: JSON object representing the updated user(name is an required field)

5. Delete (HTTP DELETE): Delete an existing user.
   Endpoint: /users/:id
   Parameters:
   :id - The unique identifier of the user

   Hobbies API

6. Create (HTTP POST): Create a new hobby.
   Endpoint: /hobbies
   Request body: JSON object representing the new hobby

7. Read (HTTP GET): Retrieve all existing hobbies.
   Endpoint: /hobbies

8. Read (HTTP GET): Retrieve an existing hobby.
   Endpoint: /hobbies/:id
   Parameters:
   :id - The unique identifier of the hobby

9. Update (HTTP PUT): Update an existing hobby.
   Endpoint: /hobbies/:id
   Parameters:
   :id - The unique identifier of the hobby
   Request body: JSON object representing the updated hobby(all fields are required)

10. Delete (HTTP DELETE): Delete an existing hobby.
    Endpoint: /hobbies/:id
    Parameters:
    :id - The unique identifier of the hobby

Running the Server

To run the NodeJS server, follow these steps:

Install dependencies: Open a terminal and navigate to the project directory. Run the following command to install the required dependencies:
--npm install

Start the server: After the dependencies are installed, run the following command to start the server:
--npm run dev

This will start the server on the default port (e.g., http://localhost:3000).

Running Tests

Run the tests: After the dependencies are installed, execute the following command to run the test files:

--npm run test:user - To run all user test suites
--npm run test:hobby - To run all hobby test suites
