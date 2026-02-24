import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  tasks: any = [];

ngOnInit(): void {
  this.taskService.getTasks().subscribe((data: any) => {
    console.log('Tasks aus API:', data);   // <- diese Zeile neu
    this.tasks = data;
  });
}
}
