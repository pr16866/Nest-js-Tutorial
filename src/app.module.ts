import { Module } from '@nestjs/common';
import { userController } from './users.controller';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({

  controllers: [userController],

})
export class AppModule { }
