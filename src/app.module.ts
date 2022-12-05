import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resources/user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerController } from './mailer/mailer.controller';

@Module({
  imports: [
    UserModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'vgoidin93@gmail.com',
          pass: 'njieseaysmdoqfes',
        },
        from: 'Mailer Test <souji_933@mail.ru',
      },
    }),
  ],
  controllers: [AppController, MailerController],
  providers: [AppService],
})
export class AppModule {}
