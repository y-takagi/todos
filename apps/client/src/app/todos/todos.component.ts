import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from '@prisma/client';
import { BehaviorSubject, map } from 'rxjs';

import { ApiService } from 'app/api/api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);
  private readonly todos$$ = new BehaviorSubject<Todo[]>([]);

  readonly state$ = this.todos$$.pipe(map((todos) => ({ todos })));
  readonly formGroup = this.fb.group({ title: [] });

  ngOnInit() {
    this.getTodos();
  }

  async onSubmit(): Promise<void> {
    const formValue = { ...this.formGroup.value };
    await this.api.createTodo(formValue);
    this.getTodos();
  }

  private async getTodos(): Promise<void> {
    const res = await this.api.getTodos();
    this.todos$$.next(res);
  }
}
