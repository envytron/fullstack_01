const express = require('express'); // Import Express framework or library, this is used to create a web server and handle HTTP requests and responses.
const db = require('./db'); // Import the database connection from the 'db.js' file, which is used to interact with the database.

const app = express(); // Create an instance of the Express application, which will be used to define routes
// The app is receiving all the requests and responses that are coming to the server.

app.get('/api/tasks/', async (req, res) => { // Define a route for handling GET requests to the '/api/tasks' endpoint. The callback function is asynchronous, allowing us to use await for database operations.
    try{
        const [tasks] = await db.query('SELECT * FROM tasks'); // MySQL2 returns [rows, fields]
        res.json(tasks); // Send a response back to the client with the tasks array.
    } catch (error) {
        res.status(500).json({ error: error.message });
    }     
});


// Get, post, put, delete are the HTTP methods that we can use to define routes in our Express application.

// For routes, 

app.listen(3000, () => { // Start the server and listen on port 3000. The callback function is executed once the server is up and running.
    console.log('Server is running on port 3000'); // Log a message to the console indicating that the server is running.
});

 


