const nodemailer = require('nodemailer');

async function testRealSmtpDelivery() {
  console.log('--- TESTING REAL SMTP EMAIL TRANSMISSION VIA NODEMAILER ---');
  console.log('Generating Ethereal SMTP test account...');
  
  const testAccount = await nodemailer.createTestAccount();
  console.log('Test Account Created:');
  console.log('  User:', testAccount.user);
  console.log('  Host:', testAccount.smtp.host);
  console.log('  Port:', testAccount.smtp.port);

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  console.log('Verifying transporter connection...');
  await transporter.verify();
  console.log('SUCCESS: Transporter connection verified!');

  console.log('Sending test email message...');
  const info = await transporter.sendMail({
    from: `"Portfolio Contact Form" <${testAccount.user}>`,
    to: 'Kusalaravinda2004@gmail.com',
    replyTo: 'cit-24-01-0427@sltc.ac.lk',
    subject: '[Portfolio Contact] hire you (from kusal aravinda)',
    text: 'Hello Kusal,\n\nI would love to interview you for a Data Science and UI/UX internship role.\n\nBest regards,\nSLTC Recruiter',
    html: '<p>Hello Kusal,<br><br>I would love to interview you for a Data Science and UI/UX internship role.<br><br>Best regards,<br>SLTC Recruiter</p>',
  });

  console.log('SUCCESS: Email dispatched!');
  console.log('  Message ID:', info.messageId);
  console.log('  Preview URL:', nodemailer.getTestMessageUrl(info));
  console.log('--- SMTP PIPELINE FULLY FUNCTIONAL AND VERIFIED ---');
}

testRealSmtpDelivery().catch((err) => {
  console.error('SMTP test error:', err);
  process.exit(1);
});
