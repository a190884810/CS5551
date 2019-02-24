import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 *
 *
 * @export
 * @class RestProvider
 */
@Injectable()
export class RestProvider {

  constructor(public http: Http) {
    //console.log('Hello RestProvider Provider');
  }

  //feed
  private apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';

  //account
  private apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
  private apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
  private apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
  private apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';
  private apiGetUserQuestionList = "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";

  //question
  private apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
  private apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
  private apiUrlGetQuestion = "https://imoocqa.gugujiankong.com/api/question/get";
  private apiUrlGetQuestionWithUser = "https://imoocqa.gugujiankong.com/api/question/getwithuser";
  private apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
  private apiUrlSaveFavourite = "https://imoocqa.gugujiankong.com/api/question/savefavourite";

  //notification
  private apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";
  
  //UClassify
  private apiUclassify = "https://api.uclassify.com/v1/uClassify/Sentiment/classify/";

/**
 * 
 *
 * @param {*} mobile
 * @param {*} password
 * @returns {Observable<string[]>}
 * @memberof RestProvider
 */
login(mobile, password):Observable<string[]>{
  return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
}
/**
 * 注册请求
 * 安全性不考虑
 * 密码的传递应该在传递参数之前进行加密，并且服务器端也应该进行相应的处理
 * 
 * 
 * @param {*} mobile
 * @param {*} nickname
 * @param {*} password
 * @returns {Observable<string[]>}
 * @memberof RestProvider
 */
register(mobile, nickname, password):Observable<string[]>{
  return this.getUrlReturn(this.apiUrlRegister + "?mobile=" + mobile + "&nickname=" + nickname + "&password=" + password);
}

classify(apikey, text):Observable<string[]>{
  return this.getUrlReturn(this.apiUclassify + "?readKey=" + apikey + "&text=" + text);
}


/**
 * 全局获取 HTTP 请求方法
 * @ Tiancheng Xie
 * @private
 * @param {string} url
 * @returns {Observable<string[]>}
 * @memberof RestProvider
 */
  private getUrlReturn(url:string): Observable<string[]> {
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res:Response){
    let body = res.json();
    return JSON.parse(body) || {};
  }
/**
 * 处理请求中的错误
 *
 * @private
 * @param {(Response | any)} error
 * @returns
 * @memberof RestProvider
 */
private handleError(error:Response | any ){
    let errMsg:string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body)
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg)
  }
}