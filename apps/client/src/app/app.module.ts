import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ApiModule } from './api/api.module';
import { RootComponent } from './root/root.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [RootComponent, TodosComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, ApiModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
