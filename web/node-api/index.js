const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const users = [
    { id: 1, lastname: '山田', firstname: '太郎', age: 20 },
    { id: 2, lastname: '鈴木', firstname: '二郎', age: 30 },
    { id: 3, lastname: '高橋', firstname: '三郎', age: 22 },
];

app.use(cors());
app.get('/users', (req, res) => {
    res.json(users);
});
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});