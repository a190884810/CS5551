import { Loading, LoadingController, ToastController, Toast } from "ionic-angular";
/**
 * UI 层所有公用方法的抽象类
 *
 * @export
 * @abstract
 * @class BaseUI
 */
export abstract class BaseUI{
    constructor(){

    }
/**
 *
 *
 * @protected
 * @param {LoadingController} loadingCtrl
 * @param {string} message
 * @returns {Loading}
 * @memberof BaseUI
 */
protected showLoading(loadingCtrl: LoadingController, 
                          message:string): Loading{
        let loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true
        });
        loader.present();
        return loader;
    }

/**
 *
 *
 * @protected
 * @param {ToastController} toastCtrl
 * @param {string} message
 * @returns {Toast}
 * @memberof BaseUI
 */
protected showToast(toastCtrl: ToastController, message: string): Toast{
        let toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    }
}