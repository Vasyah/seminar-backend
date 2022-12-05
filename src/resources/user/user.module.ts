import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MailModule } from '../../mailer/mail.module';

@Module({
  imports: [MailModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
