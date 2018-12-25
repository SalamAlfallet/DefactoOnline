import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  data=[];
  id;
  // radio button
  collection: string[] = ['man', 'woman', 'baby'];
   constructor(private manageService :ManageService ,public router:ActivatedRoute) { }
  // reactive form way 
  editForm =new FormGroup({
    name:new FormControl(null),
    type:new FormControl(null),
    description:new FormControl(null)

  
  })
  
    ngOnInit() {
      this.id= parseInt(this.router.snapshot.paramMap.get('id'));
      this.manageService.getProductById(this.id).subscribe(res =>this.data = res )
    }

    editProduct(){
     console.log(this.id);
     let obj={name:this.editForm.value.name,type:this.editForm.value.type,description:this.editForm.value.description}
this.manageService.edit(this.id,obj).subscribe(re=> console.log(re));
console.log("sucsses edit");
//    for(let prod of this.data){
// if(this.id==prod.id){
 
//  prod.name= this.editForm.value.name;
//  prod.description=this.editForm.value.description;
//  prod.type=this.editForm.value.type;
// }
//  alert("edit sucsses")
//}


   }
}
