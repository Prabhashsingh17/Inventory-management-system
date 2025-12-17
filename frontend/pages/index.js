import React, { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data: items, mutate } = useSWR('/api/inventory', fetcher, { fallbackData: [] });
  const [name, setName] = useState('');
  const [qty, setQty] = useState(1);

  async function add(e) {
    e.preventDefault();
    const res = await fetch('/api/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, quantity: Number(qty) })
    });
    if (res.ok) {
      await mutate();
      setName('');
      setQty(1);
    }
  }

  async function remove(id) {
    await fetch(`/api/inventory?id=${id}`, { method: 'DELETE' });
    await mutate();
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Inventory Management System</h1>
      <form onSubmit={add} style={{ marginBottom: 12 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" required />
        <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} min={1} style={{ width: 80, marginLeft: 8 }} />
        <button style={{ marginLeft: 8 }}>Add</button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map((it) => (
            <tr key={it.id}>
              <td>{it.id}</td>
              <td>{it.name}</td>
              <td>{it.quantity}</td>
              <td><button onClick={() => remove(it.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
