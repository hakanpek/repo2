import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
 export class UserService{
    private _url: string = 'https://front-end-test.azurewebsites.net/api/todo';


    constructor(private _http: Http){
    }

    getPosts(){
       return this._http.get(this._url)
                .map((res: Response) => res.json());

     }
    }
