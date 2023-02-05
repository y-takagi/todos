import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class ApiService {
  readonly http = inject(HttpClient);

  getTodos(): Promise<Todo[]> {
    const path = 'todos';
    return lastValueFrom(this.http.get<Todo[]>(path));
  }

  createTodo(params: Prisma.TodoCreateInput): Promise<Todo> {
    const path = 'todos';
    return lastValueFrom(this.http.post<Todo>(path, params));
  }
}
