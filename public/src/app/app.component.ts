import { Component , OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  onetask = [];
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got all tasks", data)
      this.tasks = data['task'];
    })
  }
  showTask(id) {
    let task = this._httpService.getOne(id);
    task.subscribe(data => {
      console.log("Got one task", data);
      this.onetask = data['task'];

    })


  }
 
}
