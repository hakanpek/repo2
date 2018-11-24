import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Http, Response} from '@angular/http';

@Injectable()
 export class UserService{
    private _url: string = 'https://nodebackendtest.herokuapp.com/products/all';
    private baseUrl: string = 'https://nodebackendtest.herokuapp.com/products/create';

    constructor(private _http: Http){
    }

    getPosts(){
       return this._http.get(this._url)
                .map((res: Response) => res.json());

     }


     createProduct(name: string, price:number){

       var data = `{ Name: "${name}", Color:"${price}"}`;
      return this._http.post(`${this.baseUrl}}`, data)
      .map((res: Response) => res.json());
  }

  }
