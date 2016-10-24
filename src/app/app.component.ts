import { Component, NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [TodosComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app works!';
}
