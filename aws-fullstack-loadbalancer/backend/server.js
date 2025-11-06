const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Hello from Node.js backend on AWS EC2!');
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Backend working through AWS Load Balancer 🚀' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
