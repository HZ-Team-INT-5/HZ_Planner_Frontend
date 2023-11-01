const express = require('express');
const path = require('path'); // Import the path module
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname)); // Use __dirname to refer to the current directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve the index.html file
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
