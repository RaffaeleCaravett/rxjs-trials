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
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
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
