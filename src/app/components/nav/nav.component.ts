import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  operation(parameter:string){
    switch(parameter){
      case('a'):{

      }
      break;
      case('b'):{

      }
      break;
      case('c'):{

      }
      break;
      default:{
      console.log('default')
      }
    }
  }
}
