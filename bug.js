const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      // Missing proper error handling and response
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      // Missing handling for non-existent user
      res.status(404).send('User not found');
    } else {
      res.json(results[0]);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));