import { Controller, Get, Query } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('mailer')
export class MailerController {
  constructor(private mailerService: MailerService) {}

  @Get('plain-text-email')
  async plainTextEmail() {
    return await this.mailerService.sendMail({
      to: 'souji_933@mail.ru',
      from: 'nani.bommidi93@gmail.com',
      subject: 'Plain Text Email ✔',
      html: '<b>put your hands up</b>',
    });
  }
}
