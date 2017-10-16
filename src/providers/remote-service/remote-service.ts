import { Injectable } from '@angular/core';
import { Http ,Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

getUsersUrl : string = "http://172.16.200.163:8200/users/?format=json";
getSnippetsUrl : string = "http://172.16.200.163:8200/snippets/?format=json";

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getSnippets() {
	    return  this.http.get(this.getSnippetsUrl)
	            .do((res : Response ) => console.log(res.json()))
	            .map((res : Response ) => res.json())
	            .catch((err:any) =>{ 
			        console.log("Something is wrong..");
			        return Observable.of(undefined); 
			     });
	}

   getUsers() {
	    return  this.http.get(this.getUsersUrl)
	            .do((res : Response ) => console.log(res.json()))
	            .map((res : Response ) => res.json())
	            .catch((err:any) =>{ 
			        console.log("Something is wrong..");
			        return Observable.of(undefined); 
			     });
	}

	addSnippet(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic YWFuZ2VsZXM6VGhlcmMuMjg3Kg==');

        this.http.post(this.getSnippetsUrl, JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

}
