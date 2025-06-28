const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, language } = req.body;

  if (!name || !email || !phone || !service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // SMTP налаштування згідно cPanel
  const transporter = nodemailer.createTransport({
    host: 'server361.web-hosting.com',
    port: 465,
    secure: true,
    auth: {
      user: 'roman@ab-calgary-landscaping.com',
      pass: 'Stalkerbed2149',
    }
  });

  // Визначаємо мову для логування
  const languageInfo = language ? ` (Language: ${language.toUpperCase()})` : '';

  const mailOptions = {
    from: 'Landscaping Service <roman@ab-calgary-landscaping.com>',
    to: 'romanpiddubnyi620@gmail.com',
    replyTo: email,
    subject: `New Service Request from Website: ${service}${languageInfo}`,
    text: `You have received a new service request from the website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}${languageInfo}`,
    html: `
      <h2>New Service Request from Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      ${language ? `<p><strong>Language:</strong> ${language.toUpperCase()}</p>` : ''}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message || error 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 