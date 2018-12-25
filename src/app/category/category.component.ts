import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public catgory =[
    {name: "Man Clothing" , im: "../assets/images/1.jpg"},
    {name: "Woman Clothing" , im : "../assets/images/2.jpg"},
    {name:"Baby Clothing" , im: "../assets/images/3.jpg"}
  ]

  constructor(private router :Router) { }

  ngOnInit() {
  }

  onSelectMan(){
    this.router.navigate(['/manlist']);
  }
  onSelectWoman(){
    this.router.navigate(['/womanlist']);
  }
  onSelectBaby(){

    this.router.navigate(['/babylist']);
  }
  
}
