const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'ab-calgary-landscaping.com',
    port: 465,
    secure: true,
    auth: {
      user: '_mainaccount@ab-calgary-landscaping.com',
      pass: 'gi8oJz60vwxV',
    },
  });

  try {
    await transporter.sendMail({
      from: 'Eco Yard Care <_mainaccount@ab-calgary-landscaping.com>',
      to: 'stalkeralex2149@gmail.com',
      subject: `New Service Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 