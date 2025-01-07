const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId (optional, depending on your database)
  if (!/^[0-9]+$/.test(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.json(results[0]);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));