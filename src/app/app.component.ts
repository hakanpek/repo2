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


   constructor(public _userService: UserService){

     }
     ngOnInit(){
            this. _userService.getPosts()
          .subscribe(res => this.posts= res)
    }


    createProduct(name: string, price: number) {
      this._userService.createProduct(name, price).subscribe(
        res => {
            this.posts.push(res);
         }
      );

    }
}

