const express = require('express');
const cors = require('cors');
const path = require('path');
const { initializeDatabase } = require('./db/schema');
const config = require('./config');

initializeDatabase();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/routines', require('./routes/routines'));
app.get('/api/health', (req, res) => res.json({ status: 'ONLINE', application: 'CSE Routine Maker' }));

const distPath = path.join(__dirname, '..', 'dist');
if (require('fs').existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) return res.sendFile(path.join(distPath, 'index.html'));
    return next();
  });
}

app.use((err, req, res, next) => {
  console.error('[Routine Maker error]', err);
  res.status(err.status || 500).json({ error: 'The routine workspace could not complete this request.' });
});

const server = app.listen(config.PORT, () => {
  console.log(`CSE Routine Maker is running at http://localhost:${config.PORT}`);
});

module.exports = { app, server };
