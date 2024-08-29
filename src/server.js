// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'aalfielindon@gmail.com',
//     pass: 'dsmd pypv dqsl rrzq',
//   },
// });

// // Route to handle form submission
// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: 'aalfielindon@gmail.com',
//     subject: `Contact Form Submission from ${name}`,
//     text: message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send({ success: false, error: error.message });
//     }
//     res.status(200).send({ success: true, message: 'Email sent successfully!' });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
