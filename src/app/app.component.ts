import { Component, NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
