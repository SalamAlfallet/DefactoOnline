import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
@Component({
  selector: 'app-man-list',
  templateUrl: './man-list.component.html',
  styleUrls: ['./man-list.component.css']
})
export class ManListComponent implements OnInit {

 /* public Product =[
    {id :0 , name : "pman1" , type: "man" , description : " i am pman1"},
    {id :0 , name : "pman2" , type: "man" , description : " i am pman2"},
    {id :0 , name : "pman3" , type: "woman" , description : " i am pwoman1"},
    {id :0 , name : "pman4" , type: "man" , description : " i am pman3"},
    {id :0 , name : "pman4" , type: "baby" , description : " i am pbaby1"},

  ]
   */
  productMan=[];
  constructor(private manageService :ManageService) { }

  ngOnInit() {
   
       this.manageService.getProduct().subscribe(pro => this.productMan=pro);
 /*   for(let obj of this.Product){
      if(obj.type === "man"){
        this.productMan.push(obj);
    }   }*/
   
  }
  

}
