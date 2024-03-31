import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.setGlobalPrefix('api');
//   app.enableCors({
//     origin: 'http://localhost:4200'
//   });
//   await app.listen(3501);
// }
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    });
  await app.listen();
}
bootstrap();
