const nodemailer = require("nodemailer");

const sendEmail = async (email,fullname, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD, // App Password
    },
  });

  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f6; font-family:Arial, sans-serif;">

<div style="max-width:600px; margin:30px auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 10px 20px rgba(0,0,0,0.08);">

<div style="background-color:#38b3ff; padding:24px; text-align:center;">
  <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:700;"> ${process.env.WEBSITE_NAME}</h1>
  <p style="margin-top:8px; color:#fee2e2; font-size:14px;">Items that fits your style</p>
</div>

<div style="padding:32px; color:#374151;">
  <h2 style="margin-top:0; font-size:20px; font-weight:600; color:#111827;">Hello 👋 ${fullname}</h2>
  <p style="font-size:15px; line-height:1.6; margin-top:12px;">Welcome to <strong>  ${process.env.WEBSITE_NAME}</strong>! Your account has been successfully created.</p>
  <p style="font-size:15px; line-height:1.6; margin-top:12px;">Please use the verification code below to verify your email address.</p>

  <div style="margin-top:24px; text-align:center;">
    <p style="font-size:14px; color:#374151; margin-bottom:10px;">Your verification code:</p>
    <div style="display:inline-block; padding:14px 26px; border:2px dashed #dc2626; border-radius:8px; background-color:#fef2f2; font-size:24px; font-weight:700; letter-spacing:6px; color:#dc2626;">
      ${otp}
    </div>
    <p style="margin-top:12px; font-size:13px; color:#6b7280;">This code will expire in 10 minutes.</p>
  </div>

  <p style="margin-top:30px; font-size:14px; color:#4b5563;">If you did not request this, please ignore this email.</p>

  <p style="margin-top:20px; font-size:14px;">Regards,<br/><strong> ${process.env.WEBSITE_NAME} Team</strong></p>
</div>

<div style="background-color:#f9fafb; padding:20px; text-align:center;">
  <p style="margin:0; font-size:12px; color:#6b7280;">© 2026  ${process.env.WEBSITE_NAME}. All rights reserved.</p>
  <p style="margin-top:6px; font-size:12px;"><a href="#" style="color:#dc2626; text-decoration:none;">Contact Support</a></p>
</div>

</div>
</body>
</html>`;

  await transporter.sendMail({
    from: `"HasselefreE-commerce" <${process.env.EMAIL_NAME}>`,
    to: email,
    subject: "Verify Your Email ✅",
    html: htmlTemplate,
  });
};

module.exports = sendEmail;
