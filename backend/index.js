const express = require('express');
const cors = require('cors');
const inventory = require('./routes/inventory');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/inventory', inventory);

app.get('/', (req, res) => res.send('Inventory Backend Running'));

app.listen(PORT, () => console.log(`Inventory backend listening on ${PORT}`));
