const express = require('express');
const http = require('http');
const app = express();

// स्टैटिक फाइल्स (जैसे HTML, CSS, JS) को सर्व करना
app.use(express.static('.'));  // इसी डायरेक्टरी से फाइलें लेंगी

// रूट हैंडलर: मुख्य पेज सर्व करना
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// सर्वर को चलाना
const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});