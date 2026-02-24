import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  // WICHTIG: exakt diese URL, mit /api/
  private apiUrl = 'http://127.0.0.1:8000/api/tasks/';

  getTasks() {
    return this.http.get(this.apiUrl);
  }
}