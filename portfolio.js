const http = require('http');
const sqlite3 = require('sqlite3').verbose();  // Corretto: chiama .verbose()
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// Configura il database SQLite
const dbPath = path.join(__dirname, 'database', 'db_portfolio.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Errore nell apertura del database:', err.message);
  } else {
    console.log('Connessione al database SQLite stabilita.');
    
    // Creazione della tabella users
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id_user INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      email TEXT UNIQUE,
      pswd TEXT,
      avatar TEXT
    )`, (err) => {
      if (err) {
        console.error('Errore nella creazione della tabella users:', err.message);
      } else {
        console.log('Tabella users creata correttamente.');
      }
    });

    // Creazione della tabella comments
    db.run(`CREATE TABLE IF NOT EXISTS comments (
      id_cmnt INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      comment TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('Errore nella creazione della tabella comments:', err.message);
      } else {
        console.log('Tabella comments creata correttamente.');
      }
    });
  }
});

// Rotta per registrare un nuovo utente
app.post('/api/form-contactme', (req, res) => {
  console.log(req.body);  // Verifica cosa arriva al server

  const { username, comment } = req.body;

  if (!username || !comment) {
    return res.status(400).send("Tutti i campi sono obbligatori.");
  }

  const query = `INSERT INTO comments (username, comment) VALUES (?, ?)`;
  db.run(query, [username, comment], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Errore nell'inserimento del commento");
    }
    res.status(200).json({ success: "Commento inserito correttamente!" });
  });
});



// Gestione della richiesta GET per la homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Avvio del server
app.listen(port, () => console.log(`App in ascolto sulla porta ${port}!`));
