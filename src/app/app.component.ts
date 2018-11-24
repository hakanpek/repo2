import { Component, OnInit} from '@angular/core';
import { UserService } from '../Providers/user.provider';
import { Http, Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]

})
export class AppComponent implements OnInit {
  title = 'my application test';
  posts = [];


   constructor(public _userService: UserService, private _http: Http){

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
           });


  }
}
