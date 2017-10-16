import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

/**
 * Generated class for the AddSnippetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-snippet',
  templateUrl: 'add-snippet.html',
})
export class AddSnippetPage {

  loading: any;
  regData = { title:'', code:'', linenos:false, language:'abap',style:'abap' };

  constructor(private remoteServiceProvider : RemoteServiceProvider, public navCtrl: NavController, public navParams: NavParams, public AlertCont: AlertController  ) {
  }

  showAlert() {
    let alert = this.AlertCont.create({
      title: 'New Friend!',
      subTitle: this.regData.code,
      buttons: ['OK']
    });
    alert.present();
  }

  Insert(){
	  this.remoteServiceProvider.addSnippet(this.regData).then((result) => {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSnippetPage');
  }

}
