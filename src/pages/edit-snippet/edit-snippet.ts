import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

import { snippets } from '../../models/snippets';


/**
 * Generated class for the EditSnippetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-snippet',
  templateUrl: 'edit-snippet.html',
})
export class EditSnippetPage {

	public id;
	public code;
	public title;

	snippet: snippets;

	regData = { id:'', title: '', code: '', linenos:false, language:'abap',style:'abap' };

  constructor(public navCtrl: NavController, public params: NavParams, public remoteServiceProvider: RemoteServiceProvider, public AlertCont: AlertController) {

  	this.id = params.get("id");
  	this.code = params.get("code");
  	this.title = params.get("title");
  	//console.log(this.code);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditSnippetPage');
  }

  EditSnippet(){

  	this.regData.id = this.id;
  	this.regData.code = this.code;
  	this.regData.title = this.title;

	  this.remoteServiceProvider.updateSnippet(this.regData).then((result) => {
	      this.navCtrl.pop();
	    }, (err) => {
	      	let alert = this.AlertCont.create({
		      title: 'New Friend!',
		      subTitle: err,
		      buttons: ['OK']
		    });
		    alert.present();
	    });
  }

}
