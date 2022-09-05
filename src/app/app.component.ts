import { Component, OnInit } from '@angular/core';
import ToDo from './model/ToDo';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'test';
  // color = "btn btn-primary";

  // canClick = true;
  // msg = "Can click!"

  // products = [
  //   { id : 1 , name : "Apple" },
  //   { id : 2 , name : "Orange" }
  // ]

  // toggleClick():void {

  //   this.canClick = !this.canClick;

  //   this.canClick 
  //   ? this.msg = "Can click!"
  //   : this.msg = "Cannot!"

  // }

  todo! : string;

  todos : ToDo[] = [
    {
      id : 1,
      todo : "todo1",
      hasDone : false
    }
  ]

  addTodo( e : Event ): void {
  
    e.preventDefault();

    if( this.todo != "" ){
      let id = this.todos.length == 0 ? 1 : this.todos[this.todos.length - 1].id + 1;
      this.todos.push({
        id : id,
        todo  : this.todo,
        hasDone : false
      })
      this.todo = "";
    }

  }

  toggleHasDone( target : number ) : void {
    
    this.todos.forEach( todo => {
      if( todo.id == target ){
        todo.hasDone = !todo.hasDone;
      }
    })

  }

  handleDelete( target : number ) : void {

    this.todos  = this.todos.filter( todo => todo.id != target );

  }

  ngOnInit(): void {
      console.log("hello inited");
  }

  // ngAfterContentInit(){
  //   console.log("conted inited")
  // }

  // ngAfterContentChecked(){
  //   console.log("content checked")
  // }

  // ngOnChanges(){
  //   console.log("changed")
  // }

  // ngDoCheck(){
  //   console.log("checked")
  // }
  
}
