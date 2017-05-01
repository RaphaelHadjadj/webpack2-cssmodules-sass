const path = require('path');
const express = require('express');

const app = express();

const outputPath = path.resolve(process.cwd(), 'build');

app.use('/', express.static(outputPath)); 

app.get('*', (req, res) => {
    res.sendFile(path.resolve(outputPath, 'index.html'));
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Start server
app.listen(port);

console.log(`Server is running on http://${host}:${port}`);