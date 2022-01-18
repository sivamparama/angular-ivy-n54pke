import { Component, Input } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}{{dataService.count}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers:[DataService]
})
export class HelloComponent  {
  @Input() name: string;
  constructor(public dataService:DataService){

  }
}
