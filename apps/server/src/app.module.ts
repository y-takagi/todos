import { Module } from '@nestjs/common';

import { TodosController } from './controllers/todos.controller';
import { PrismaService } from './services/prisma.service';
import { TodoService } from './services/todo.service';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [PrismaService, TodoService],
})
export class AppModule {}
