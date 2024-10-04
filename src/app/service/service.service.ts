import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  observable!:Observable<string>;
  observable1!:Observable<number>;
  observable2!:Observable<boolean>;

  constructor() { }


  obs(){
    this.observable=new Observable((sub)=>{
sub.next('1')
sub.next('2')
sub.next('3')
sub.next('4')
})
  }

  obs1(){
    this.observable1=new Observable((sub)=>{
sub.next(1)
sub.next(2)
sub.next(3)
sub.next(4)
})
  }

  obs2(){
    this.observable2=new Observable((sub)=>{
      let a:string = 'a'
      let b:string = 'b'
      let c:string = 'c'
sub.next(a==b)
sub.next(a===b)
sub.next(b==c)
sub.next(a===a)
})
  }
}
