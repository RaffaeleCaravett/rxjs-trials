import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

array:number[]=
[
  1,2,3,4,5,6,7,8,9,10
]
  constructor(private service:ServiceService){
this.service.observabl.subscribe((data:boolean)=>{
    console.log('received')
        console.log(data)
      })
var a = 2;

a=3;


  }

    ngOnInit():void{
    }

}
