import { Injectable } from "@angular/core";
import { count } from "rxjs/operators";

@Injectable()
export class DataService{
  count=5;
  constructor(){

  }
}