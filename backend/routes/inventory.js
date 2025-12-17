const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT id, name, quantity FROM inventory ORDER BY id').all();
  res.json(rows);
});

router.post('/', (req, res) => {
  const { name, quantity } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const q = Number(quantity) || 0;
  const stmt = db.prepare('INSERT INTO inventory (name, quantity) VALUES (?, ?)');
  const info = stmt.run(name, q);
  const item = db.prepare('SELECT id, name, quantity FROM inventory WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json(item);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const { name, quantity } = req.body;
  const stmt = db.prepare('UPDATE inventory SET name = ?, quantity = ? WHERE id = ?');
  stmt.run(name, Number(quantity) || 0, id);
  const item = db.prepare('SELECT id, name, quantity FROM inventory WHERE id = ?').get(id);
  res.json(item);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  db.prepare('DELETE FROM inventory WHERE id = ?').run(id);
  res.status(204).end();
});

module.exports = router;
