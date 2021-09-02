import { Module } from '@nestjs/common';
import { TodoModule } from 'src/todo/todo.module';
import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Tknjar@1.',
    database: 'mydb',
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"]
  }), TodoModule],
  controllers: []
})
export class AppModule { }
