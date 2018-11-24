import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
 export class UserService{
    private _url: string = 'https://nodebackendtest.herokuapp.com/products/all';
    private baseUrl: string = 'https://nodebackendtest.herokuapp.com/products/create';

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    //let errMsg: string;
    //if (error instanceof Response) {
    //    const body = error.json() || '';
    //    const err = body.error || JSON.stringify(body);
    //    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //} else {
    //    errMsg = error.message ? error.message : error.toString();
    //}
    return Observable.throw(error.json() || 'Error');

}
    constructor(private _http: Http){
    }

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    getPosts(){
       return this._http.get(this._url)
                .map((res: Response) => res.json());

     }


     createProduct(name: string, price:number): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
           var data = `{ Name: "${name}", Color:"${price}"}`;
       return this._http.post(this.baseUrl, data,  this.options)
       .map(this.extractData)
       .catch(this.handleError);

  }

  }
