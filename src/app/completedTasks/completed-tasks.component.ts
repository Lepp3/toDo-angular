import { Component } from "@angular/core";
import { TaskService } from "../services/task.service";

@Component({
    selector: 'completed-tasks',
    standalone: true,
    imports: [],
    templateUrl: './completed-tasks.component.html',
    styleUrl: './completed-tasks.component.css',
})
export class completedTasks{
    completedTasks: string[] = [];
    constructor(private taskService: TaskService){
        this.completedTasks = this.taskService.getCompletedTasks();
    }

   clearCompleted():void{
    this.taskService.clearHistory();
    this.completedTasks = this.taskService.getCompletedTasks();
   }
}