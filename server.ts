import express from 'express';
import bodyParser from 'body-parser';
import mailchecker from 'mailchecker';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// API Endpoint for verifying emails
app.get('/verify', (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Use mailchecker's isValid method to check the email
  const isValid = mailchecker.isValid(String(email));

  return res.status(200).json({ email, isValid });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
