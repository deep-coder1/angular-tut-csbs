import { Component } from '@angular/core';

// Reactive Form in Angular Vid 39
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog2';

  list:any[]=[];
  addTask(item:string)
  {
    console.warn(item)
    this.list.push({id:this.list.length, name:item});
    console.warn(this.list)
  }

  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id)
  }

  // 'Send Data Child to Parent Component Vid 28'
  data = 10;

  updateChild()
  {
    // this.data = Math.random()
    this.data = Math.floor (Math.random()*10)
  }

  // Resuable Component Vid 29
  userDetails = [
    {name: 'Deepak Thakur', email: 'deepak@test.com'},
    {name: 'Bhaskar Thakur', email: 'bhaskar@test.com'},
    {name: 'Sam Thakur', email: 'sam@test.com'},
    {name: 'Peter Thakur', email: 'peter@test.com'},
  ]

  // Send Data Child to Parent Component vid 30
  data2 = "x";
  updateData(item:string)
  {
    console.warn(item)
    this.data2 = item;
  }

  // Two-way binding Vid 31
  name:any;

  // Template Reference Variable. vid 32
  // getVal(item:any)
  getVal(item:HTMLInputElement)
  {
    console.warn(item);
  }

  // Basic of TS for angular. Vid 33
  // data3 = "Hello";
  // data3 = 20;
  // data3:{name:string, phone:number} = {name:'deepak', phone:123};
  // item2:string[] = ["hello", "hi", "hey"]   // Array string define

  // getData(item:number | boolean)
  // getData(item:(item:{name:string, phone:number})   // Object

  // getData(item:number[])
  // getData(item:number | string)
  // {
  //   if(typeof item === "number")
  //   {
  //     return item*20;
  //   }
  // }

  // getItem()
  // {
  //   // this.gatData(22)  // Not allow
  //   this.gatData([22])
  // }

  // Pipes in Angular. Vid 34
  today = Date();
  capString(item:string)
  {
    return item.toUpperCase();
  }

  // Advance Pipes Vid 35
  user={
    name:'Deepak',
    age:23
  }

  // Template driven form Vid 38
  userLogin(item:any)
  {
    console.warn(item);
  }

  // Reactive Form in Angular Vid 39
  loginForm = new FormGroup({
    // user: new FormControl(''),
    user: new FormControl('Deepak'), // Default name show
    // password: new FormControl('')
    password: new FormControl('1234')  // Defaultr password show
  })
  loginUser()
  {
    console.warn(this.loginForm.value)
  }

  // Service in Angular Vid 43 // 16 Aug 24

  memberData=[
    {name: 'Deepak Thakur', email: 'deepak@test.com'},
    {name: 'Bhaskar Thakur', email: 'bhaskar@test.com'},
    {name: 'Sam Thakur', email: 'sam@test.com'},
    {name: 'Peter Thakur', email: 'peter@test.com'},
  ]

}

