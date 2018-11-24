import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response, Jsonp} from '@angular/http';

@Injectable()
 export class UserService{
    private _url: string = 'https://nodebackendtest.herokuapp.com/products/all';
    private baseUrl: string = 'https://nodebackendtest.herokuapp.com/products/create';

    constructor(private _http: Http){
    }

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    getPosts(){
       return this._http.get(this._url)
                .map((res: Response) => res.json());

     }


     createProduct(name: string, price:number){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
       var data = `{ Name: "${name}", Color:"${price}"}`;
       return this._http.post(`${this.baseUrl}`, data, this.options)
      .map((res: Response) => res.json());
  }

  }
