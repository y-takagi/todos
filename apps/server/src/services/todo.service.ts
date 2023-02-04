import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  all(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  create(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }
}
