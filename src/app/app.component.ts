import { Component, OnInit} from '@angular/core';
import { UserService } from '../Providers/user.provider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]

})
export class AppComponent implements OnInit {
  title = 'my application test';
  posts = [];
  productObj= object = {};


   constructor(public _userService: UserService){

     }
     ngOnInit(){
            this. _userService.getPosts()
          .subscribe(res => this.posts= res)
    }


    createProduct = function(product){
        this.productObj= {
         "name": product.name
        }
           this.this._http.post("https://nodebackendtest.herokuapp.com/products/create", this.productObj)
           .subscribe((res:Response) => {
            console.log(res);
           };

                    
  }
