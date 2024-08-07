const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    res.sendFile(path.join(__dirname, 'views', 'search.html'), { searchTerm: searchTerm });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
