const nodemailer = require("nodemailer");
const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    servise: "gmail",
    auth: {
      user: process.env.Email_NAME,
      pass: process.env.Email_PASSWORD,
    },
  });
   const info = await transporter.sendMail({
    from: 'E-commerce.bd@gmail.com',
    to: email,
    subject: "Hello ✔",
    text: "Hello world?", // Plain-text version of the message
    html: "<b>Hello world?</b>", // HTML version of the message
  });
};

module.exports = sendEmail;
