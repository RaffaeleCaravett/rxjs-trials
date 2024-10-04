import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  constructor(private service:ServiceService){
this.service.observabl.subscribe((data:boolean)=>{
    console.log('received')
        console.log(data)
      })
  }

    ngOnInit():void{

    }

}
