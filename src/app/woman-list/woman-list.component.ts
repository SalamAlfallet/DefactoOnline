import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.css']
})
export class WomanListComponent implements OnInit {

  productWoman=[];
  constructor(private manageService :ManageService) { }

  ngOnInit() {
   
       this.manageService.getProduct().subscribe(pro => this.productWoman=pro);}

}
