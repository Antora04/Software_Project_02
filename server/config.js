const path = require('path');

module.exports = {
  PORT: Number(process.env.PORT || 5051),
  DB_PATH: process.env.ROUTINE_DB_PATH || path.join(__dirname, 'routine-maker.sqlite'),
  UPLOAD_DIR: process.env.ROUTINE_UPLOAD_DIR || path.join(__dirname, 'uploads'),
};
