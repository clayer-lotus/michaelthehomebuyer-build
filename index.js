const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist/app-name')));

// Catch all other routes and return the 'index.html' file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/app-name/index.html'));
});

// Start the Express server
const port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
