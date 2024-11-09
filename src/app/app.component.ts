import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navMenuBar } from './nav-menu/nav-menu.component';
import { pendingTasks } from './taskList/task-list.component';
import { TaskService } from './services/task.service';
import { completedTasks } from "./completedTasks/completed-tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    navMenuBar,
    pendingTasks, completedTasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TaskService],
})
export class AppComponent {
  title = 'componentTest';
}
