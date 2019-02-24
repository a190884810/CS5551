import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from'../../common/baseui'
import { RestProvider } from'../../providers/rest/rest'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI{


  mobile: any;
  nickname: any;
  password: any;
  confirmPassword: any;
  errorMessage: any;

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public viewCtrl: ViewController,
            public loadingCtrl: LoadingController,
            public rest: RestProvider,
            public toastCtrl: ToastController) {
              super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  gotoLogin(){
    this.navCtrl.pop(); //nav导航到的子页面返回，像stack一样pop粗来
  }
/**
 * 前台一般不做校验
 * 错误的输入可以传递到后端做大数据存储，
 * 可以用于后期客户端可信度的部分依据
 * @memberof RegisterPage
 */
doRegister(){
    if(this.password != this.confirmPassword)
    {
      super.showToast(this.toastCtrl, "Confirmed passed should be the same as password!")
    }
    var loading = super.showLoading(this.loadingCtrl,"loading");
    this.rest.register(this.mobile, this.nickname, this.password)
    .subscribe(
      f=>{
        if(f["Status"]=="OK"){
          loading.dismiss();
          super.showToast(this.toastCtrl, "Success!")
          this.dismiss();
        }
        else{
          loading.dismiss();
          super.showToast(this.toastCtrl,f["StatusContent"]);
        }
      },
      error => this.errorMessage = <any>error);
    
  }

}
