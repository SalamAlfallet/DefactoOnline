import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
@Component({
  selector: 'app-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.css']
})
export class BabyListComponent implements OnInit {

  productBaby=[];
  constructor(private manageService :ManageService) { }

  ngOnInit() {
   
       this.manageService.getProduct().subscribe(pro => this.productBaby=pro);
  }

}
