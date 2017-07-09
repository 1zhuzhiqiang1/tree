"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by admin on 2017/7/8.
 */
var core_1 = require("@angular/core");
var DirtreeComponent = (function () {
    function DirtreeComponent() {
    }
    DirtreeComponent.prototype.ngOnInit = function () {
        return undefined;
    };
    // 点击动作
    DirtreeComponent.prototype.itemClick = function (i) {
        // 建立一个服务来接收这个值, 或者借助双向绑定, 处理动作
        i._open = i._open; // 本例只简单演示开关, 借助 treelists本身实现
        console.log(i);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DirtreeComponent.prototype, "treelists", void 0);
    DirtreeComponent = __decorate([
        core_1.Component({
            templateUrl: './dirtree.component.html',
            selector: 'dir-tree'
        }), 
        __metadata('design:paramtypes', [])
    ], DirtreeComponent);
    return DirtreeComponent;
}());
exports.DirtreeComponent = DirtreeComponent;
//# sourceMappingURL=dirtree.component.js.map