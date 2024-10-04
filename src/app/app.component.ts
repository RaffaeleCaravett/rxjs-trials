import { Component, OnInit } from '@angular/core';
import { Observable, take, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rcxjguide';
  count:number=0

  ngOnInit():void{
    const foo = new Observable((subscriber) => {
      subscriber.next(this.count+=1)
      subscriber.next(this.count+this.count)
      subscriber.next(this.count+this.count+1)
    });

    console.log('before');
    foo.pipe(take(3)).subscribe({
      next:(x)=>{
        console.log(x)
      },
      complete:()=>{
        console.log('after')
      }
    });
  }

}
