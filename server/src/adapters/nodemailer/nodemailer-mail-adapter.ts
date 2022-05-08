import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3d01fbd78cbe5d",
      pass: "c6d463066a2493"
    }
  });

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'julio cesar <juliocsscl@gmail.com>',
            subject,
            html: body,
        })
    }
}