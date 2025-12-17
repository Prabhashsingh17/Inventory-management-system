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

const store = {
  all() {
    const d = readData();
    return d.inventory;
  },
  insert(name, quantity) {
    const d = readData();
    const item = { id: d.nextId++, name, quantity };
    d.inventory.push(item);
    writeData(d);
    return item;
  },
  get(id) {
    const d = readData();
    return d.inventory.find((i) => i.id === id);
  },
  update(id, name, quantity) {
    const d = readData();
    const idx = d.inventory.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    d.inventory[idx] = { id, name, quantity };
    writeData(d);
    return d.inventory[idx];
  },
  remove(id) {
    const d = readData();
    d.inventory = d.inventory.filter((i) => i.id !== id);
    writeData(d);
  }
};

module.exports = store;
