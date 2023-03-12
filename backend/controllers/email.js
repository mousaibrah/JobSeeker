var nodemailer = require("nodemailer");

const emailForCompany = async (req, res) => {
  const { from, to, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 587,
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.PASSWORD}`,
    },
  });

  const msg = {
    from: `${from}`,
    to: `${to}`,
    subject: "CV applicate",
    text: `${message}`,
  };

  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.send("Email Sent!");
};
const reply = async (req, res) => {
  const { to, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 587,
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.PASSWORD}`,
    },
  });

  const msg = {
    from: `Admin@Jobseeker.app`,
    to: `${to}`,
    subject: "Your Email Sent",
    text: `${message}`,
  };

  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.send("Email Sent!");
};
module.exports = { emailForCompany, reply };
