import { Component } from '@angular/core';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { NavController } from 'ionic-angular';
import { AddSnippetPage } from '../add-snippet/add-snippet';


@Component({
  selector: 'page-snippets',
  templateUrl: 'snippets.html'
})
export class SnippetsPage {

	postList: any;
  constructor(private remoteServiceProvider : RemoteServiceProvider, public navigate: NavController) {
  	this.getSnippets();
  }
      getSnippets(){
        this.remoteServiceProvider.getSnippets().subscribe((data)=>{
            this.postList = data;
        });
    	}

      NavigateToAddSnippet(){
        this.navigate.push(AddSnippetPage);
      }

}
