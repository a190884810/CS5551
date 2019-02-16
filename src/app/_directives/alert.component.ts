import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// For observable function
import { AlertService } from '../_services';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
// OnInit: 一个生命周期钩子，它会在 Angular 初始化完了该指令的所有数据绑定属性之后调用。 定义 ngOnInit() 方法可以处理所有附加的初始化任务
// OnDestroy: 一个生命周期钩子，它会在指令、管道或服务被销毁时调用。 用于在实例被销毁时，执行一些自定义清理代码。
// export: export 语句用于从文件（或模块）中导出函数， 对象或者基础类型， 语法如下
export class AlertComponent implements OnInit , OnDestroy {
    private subscription: Subscription;
    message: any; // any: 在任意值上访问任何属性都是允许的：

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {  // 描述(subscribe)反正就是直接抓取对象的值
            this.message = message; 
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
