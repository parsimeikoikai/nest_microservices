import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';


async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
    //   transport: Transport.RMQ,
    //   options: {
    //     urls: ['amqps://hwlphpce:NhpATJS0YaNErfe-eqdZarykuBExGeHt@rattlesnake.rmq.cloudamqp.com/hwlphpce'],
    //     queue: 'main_queue',
    //     queueOptions: {
    //       durable: false
    //     },
    //   },
    });

  await app.listen();
}
bootstrap();
