import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';

import { TodoService } from '../services/todo.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.all();
  }

  @Post()
  create(@Body() postData: Prisma.TodoCreateInput) {
    return this.todoService.create(postData);
  }
}
