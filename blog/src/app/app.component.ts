import { Component, ComponentFactoryResolver } from '@angular/core';

// Basic form vid 23
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial Blog';
  data = 'Code step by step';
  data2 = 100;
  getValue()
  {
    return "Get function data"
  }

  // Function Call
  getName(name:string, secondName:string){
    alert(name);
    alert(secondName);
  }
  getNumber(){
    alert("Function Called 2")
  }

  // Important Events
  getData(val:string){
    console.warn(val);
  }

  // Get Input Box Value and Display
  displayVal:string='';
  getValue2(val:string){
    console.warn(val);
    this.displayVal=val
  }

  // Counter with Angular Example:
  count = 0;
  counter(type:string){
    type==='add' ?this.count++:this.count--;
    // this.count++;
  }

  // Property Binding Example
  name = "Peter";
  disable = false;

  // if else condition 
  // show=true;
  // show=false;
  show ="yes";
  // show ="no";

  // Multiple condition or else if
  // color="red";
  // color="green";
  color="blue";

  // Switch Case Vid 18
  // color1="red";
  // color1="green";
  // color1="blue";
  // color1="orange";
  // color1="skyblue";
  color1="xyz";

  // For loop Vid 19
  users=['Deeepak', 'Bhaskar', 'Sam', 'Peter', 'Shubham'];
  userDetails=[
    {name:'Deepak', email:'deepak@test.com', phone:'8888'},
    {name:'Bhaskar', email:'bhaskar@test.com', phone:'1111'},
    {name:'Sam', email:'sam@test.com', phone:'2222'},
    {name:'Peter', email:'peterk@test.com', phone:'4444'},
    {name:'Shubham', email:'shubham@test.com', phone:'6666'}
  ];

  // Nested loop Vid 20
  users1=[
    {name:'Deepak', phone:'1111', socialAccounts:['Facebook', 'Insta', 'Gmail']},
    {name:'Sam', phone:'2222', socialAccounts:['YouTube', 'Insta', 'Linkdin']},
    {name:'Bablu', phone:'3333', socialAccounts:['Yahoo', 'Snapchat', 'Gmail']},
    {name:'Banti', phone:'4444', socialAccounts:['Whatsap', 'Insta', 'Drive']}
  ]

  // Style Binding vid 21
  color2="red";
  bgColor="green";
  updateColor(){
    this.color2="blue";
    this.bgColor="red";
  }

  // Basic form vid 23
  userData:any={};
  getData1(data:NgForm){
    console.warn(data)
    this.userData=data
  }

  // Toggle Element Vid 24
  // display=false;
  display=true;
  toggle(){
    // this.display=false;
    this.display=!this.display;
  }

}
