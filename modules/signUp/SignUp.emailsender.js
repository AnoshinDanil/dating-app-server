const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend")

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("danil.anoshin99@mail.ru", "Danil");

const sendEmail = async({email}) => {

    const recipients = [
        new Recipient(email, "Your Client")
      ];
      
      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("This is a Subject")
        .setHtml("<strong>This is the HTML content</strong>")
        .setText("This is the text content");
      
      await mailerSend.email.send(emailParams);

}

module.exports ={ sendEmail }