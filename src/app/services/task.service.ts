import {Injectable} from '@angular/core'
import { Task } from '../models/task.model'



@Injectable({
    providedIn: 'root'

})
export class TaskService {
    private pendingTasks: Task[] = [];
    private completedTasks: string[] = [];
    private id:number = 0;

    getPendingTasks(): Task[]{
        return this.pendingTasks;
    }

    getCompletedTasks(): string[]{
        return this.completedTasks;
    }

    completeTask(task:string,id:number):void{
        this.pendingTasks = this.pendingTasks.filter(t=>t.id !== id);
        this.completedTasks.unshift(task);
    }

    completeAllTasks():void{
        this.pendingTasks.forEach(task=>this.completedTasks.unshift(task.taskName));
        this.pendingTasks = [];
    }

    clearHistory():void{
        this.completedTasks = [];
    }

    addTask(taskInput: HTMLInputElement, taskName:string){
        if(!taskName){
            return;
        }
        let match:any = this.pendingTasks.find((arr)=>arr.taskName.toLowerCase() == taskName.toLowerCase());
        if(match){
            taskInput.value = '';
            return;
        }
        this.pendingTasks.push({taskName: taskName,id: this.id});
        this.id++;
        taskInput.value='';
    }
}