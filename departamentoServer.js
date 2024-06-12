const express = require('express');
const fetch = require('node-fetch');  // Asegúrate de instalar node-fetch si usas Node.js
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/departamentos', async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/departamentos');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
