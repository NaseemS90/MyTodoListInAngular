import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'addtodo', component: AddTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
