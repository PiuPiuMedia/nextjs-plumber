import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { name, email, number, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or use another provider
    auth: {
      user: process.env.EMAIL_USER, // Add to Vercel Environment Variables
      pass: process.env.EMAIL_PASS, // Add to Vercel Environment Variables
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Add to Vercel Environment Variables
    subject: `New Lead: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${number}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
