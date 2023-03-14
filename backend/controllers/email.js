var nodemailer = require("nodemailer");
const userSchema = require("../models/users");
const emailForCompany = async (req, res) => {
  const { email, companyId, Url } = req.body;
  const companyEmail = await userSchema.findById({ _id: companyId });

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
    to: `${companyEmail.email}`,
    subject: "CV applicate",
    text: `JOB SEEKER ©️ Here Is A CV Link From ${email} on Your Post on Our Web Site${Url}`,
  };

  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.send(true);
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
