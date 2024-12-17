import { Component, OnInit } from '@angular/core';

// Dynamic Routing Vid 42 // Auto import when write ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // userId:string | null ='';
  userId:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.warn("user id is:", this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
