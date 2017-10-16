import { Component } from '@angular/core';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	postList: any;
  constructor(private remoteServiceProvider : RemoteServiceProvider) {
  	this.getPosts();
  }
      getPosts(){
        this.remoteServiceProvider.getUsers().subscribe((data)=>{
            this.postList = data;
        });
    	}

}
