import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'library_2',
});
db.connect(err => {
    if (err) {
        console.error('Adatbázis kapcsolat hiba:', err);
    }
    else {
        console.log('Csatlakozás sikeres!');
    }
});
app.get('/api/search', (req, res) => {
    const query = req.query.q || '';
    const sql = `
    SELECT * FROM books 
    WHERE title LIKE ? OR author LIKE ?
  `;
    db.query(sql, [`%${query}%`, `%${query}%`], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Adatbázis hiba');
        }
        else {
            res.json(results);
        }
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Szerver fut a ${PORT} porton`);
});
