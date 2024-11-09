import { TaskService } from "../services/task.service";
import { Component } from "@angular/core";
import { Task } from "../models/task.model";


@Component({
    selector: 'task-list',
    standalone: true,
    imports: [],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css'
})
export class pendingTasks{
    tasks: Task[];
    id:number = 0;
    completedTasks: string[] = [];

    constructor(private taskService: TaskService){
        this.tasks = this.taskService.getPendingTasks();
        this.completedTasks = this.taskService.getCompletedTasks();
    }

    taskAdd(taskInput: HTMLInputElement, taskName:string){
        this.taskService.addTask(taskInput,taskName);
        this.tasks = this.taskService.getPendingTasks();
    }

    taskComplete(task:string,id:number):void{
        this.taskService.completeTask(task,id);
        this.tasks = this.taskService.getPendingTasks();
        this.completedTasks = this.taskService.getCompletedTasks();
        
    }

    allTaskComplete():void{
        this.taskService.completeAllTasks();
        this.tasks = this.taskService.getPendingTasks();
    }
}