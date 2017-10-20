import { Injectable } from '@angular/core';
import { Http ,Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { snippets } from '../../models/snippets'

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

Url : string = "http://localhost:8000/";

getUsersUrl : string = "http://localhost:8000/users/?format=json";
getSnippetsUrl : string = "http://localhost:8000/snippets/?format=json";

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
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

  getSnippets() {
	    return  this.http.get(this.Url+"snippets/?format=json")
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

  updateSnippet(data) {

    console.log(data.id);

    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic YWFuZ2VsZXM6VGhlcmMuMjg3Kg==');

        this.http.put(this.Url+"snippets/"+data.id+"/?format=json", JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  removeSnippet(snippets: snippets) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic YWFuZ2VsZXM6VGhlcmMuMjg3Kg==');

        this.http.delete(this.Url+"snippets/"+snippets.id, {headers: headers})
        .toPromise()
        .then(() => null)
        .catch();
    });
  }

}
