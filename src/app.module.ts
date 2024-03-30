import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UppercasePipe } from "./uppercase/uppercase.pipe";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UppercasePipe], // Подключение вашего pipe как провайдера
})
export class AppModule {}