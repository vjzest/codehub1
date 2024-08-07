const nodemailer = require("nodemailer");

async function mailSender(to, subject, html) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // or 465 for secure connections
    secure: false, // true for 465, false for other ports
    auth: {
      user: "vjzest9569@gmail.com",
      pass: "awgxmcjlonuvriyk",
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });

  const mailOptions = {
    from: "vjzest9569@gmail.com",
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

module.exports = mailSender;
