import { Component } from '@angular/core';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { AddSnippetPage } from '../add-snippet/add-snippet';
import { EditSnippetPage } from '../edit-snippet/edit-snippet';
import { snippets } from '../../models/snippets';
//import { Location } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'page-snippets',
  templateUrl: 'snippets.html'
})
export class SnippetsPage {

  selectedSnippet: snippets;
	postList: any;
  constructor(private remoteServiceProvider : RemoteServiceProvider, 
              public navCtrl: NavController, 
              private actionSheetCtr: ActionSheetController,
              public AlertCont: AlertController,
              //private locate: Location,
              public router: Router) {

  	this.getSnippets();
  }
      getSnippets(){
        this.remoteServiceProvider.getSnippets().subscribe((data)=>{
            this.postList = data;
        }); 
    	}

      NavigateToAddSnippet(){
        this.navCtrl.push(AddSnippetPage);
      }


      selectSnippetItem(snippet: snippets){
          /*
            Muestra una pantalla con las siguientes opciones:

            1. editar
            2. borrar
          */
          this.selectedSnippet = snippet;

          this.actionSheetCtr.create({
            title: `${snippet.title}`,
            
            buttons: [
              {
                text: 'Edit',
                handler: () => {
                  this.navCtrl.push(EditSnippetPage, {
                    id: snippet.id,
                    code: snippet.code,
                    title: snippet.title
                  });
                }
              },
              { 
                text: 'Delete',
                role: 'destructive',
                handler: () => {
                    this.remoteServiceProvider.removeSnippet(snippet);             
                }
              }
            ]
          }).present();

          //this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }

      showAlert() {
        let alert = this.AlertCont.create({
            title: 'New Friend!',
            subTitle: 'data',
            buttons: ['OK']
          });
        alert.present();
      }

}
