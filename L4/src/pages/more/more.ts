import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  public notlogin : boolean = true;
  public logined : boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage) {
  }

  showModal(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }


  ionViewDidEnter() {
    this.loadUserPage();
  }

  loadUserPage(){
      this.storage.get('UserId').then((val)=>{
        console.log(val);
        if(val!=null)
        {
          this.notlogin = false;
          this.logined = true;
        }
        else{
          this.notlogin = true;
          this.logined = false;
        }
      })
  }
}
