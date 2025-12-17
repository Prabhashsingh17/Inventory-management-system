const fs = require('fs');
const path = require('path');

const DATA_FILE = path.resolve(__dirname, 'data.json');

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { inventory: [], nextId: 1 };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const items = readData().inventory;

  if (req.method === 'GET') {
    return res.status(200).json(items);
  }

  if (req.method === 'POST') {
    const { name, quantity } = req.body;
    if (!name) return res.status(400).json({ error: 'name required' });
    
    const d = readData();
    const item = { id: d.nextId++, name, quantity: Number(quantity) || 0 };
    d.inventory.push(item);
    writeData(d);
    
    return res.status(201).json(item);
  }

  if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, quantity } = req.body;
    
    const d = readData();
    const idx = d.inventory.findIndex((i) => i.id === Number(id));
    if (idx === -1) return res.status(404).json({ error: 'not found' });
    
    d.inventory[idx] = { id: Number(id), name, quantity: Number(quantity) || 0 };
    writeData(d);
    
    return res.json(d.inventory[idx]);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    const d = readData();
    d.inventory = d.inventory.filter((i) => i.id !== Number(id));
    writeData(d);
    
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
