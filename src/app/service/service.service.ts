import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public observabl:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  constructor() {
  }


  obs(s:string){
    this.observabl.next(false)
  }

}
