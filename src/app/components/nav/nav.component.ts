import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

constructor(private service:ServiceService){

}

  operation(parameter:string){
    this.service.obs(parameter)
  }
}
