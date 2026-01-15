const express = require('express');

const app = express();
const PORT = 8001;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Anythink Market Server' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});