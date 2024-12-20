const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Docker Compose with Node.js!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});

