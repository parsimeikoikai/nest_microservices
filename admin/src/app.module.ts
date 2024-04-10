import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productProviders } from './product/product.providers';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'dbUser',
        password: 'dbUser@2024',
        database: 'nestMicroservices',
        entities: [],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];



@Module({
  imports: [
    ProductModule
  ],




  controllers: [AppController],
  providers: [AppService,...productProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
