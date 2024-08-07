const nodemailer = require("nodemailer");

async function mailSender(to, subject, html) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: "vjzest9569@gmail.com",
      pass: "awgxmcjlonuvriyk", // Use an App Password
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
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

module.exports = mailSender;
