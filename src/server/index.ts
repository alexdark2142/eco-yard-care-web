const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service } = req.body;

  if (!name || !email || !phone || !service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Налаштуйте свій SMTP тут (корпоративна пошта через cPanel)
  const transporter = nodemailer.createTransport({
    host: 'ab-calgary-landscaping.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: 'roman@ab-calgary-landscaping.com',
      pass: 'Stalkerbed2149',
    },
    authMethod: 'LOGIN',
  });

  const mailOptions = {
    from: 'roman@ab-calgary-landscaping.com',
    to: 'romanpiddubnyi620@gmail.com',
    replyTo: email,
    subject: `New Service Request: ${service}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 