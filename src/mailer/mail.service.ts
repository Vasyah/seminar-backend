import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: string) {
    // const url = `example.com/auth/confirm?token=${token}`;
    console.log('im trying to send email', user);
    await this.mailerService.sendMail({
      to: 'souji_933@mail.ru',
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './template', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: user,
      },
    });
  }
}
