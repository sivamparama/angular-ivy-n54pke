import { Component, VERSION } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(public dataService:DataService){

  }
  increaseCount(){
    this.dataService.count++
  }
}
