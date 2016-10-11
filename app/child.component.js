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
var core_1 = require('@angular/core');
var ChildComponent = (function () {
    function ChildComponent() {
        this.employee = { empName: '', empNumber: '' };
        this.consultant = { conName: '', conNumber: '' };
        this.greet = new core_1.EventEmitter();
    }
    ChildComponent.prototype.ngOnInit = function () { };
    ChildComponent.prototype.sendToParent = function () {
        this.greet.emit("Child Welcomes " + this.name + ", Your age is " + this.age);
    };
    ChildComponent.prototype.getEmployeeDetails = function () {
        console.log('In child Component');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ChildComponent.prototype, "age", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "greet", void 0);
    ChildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'child',
            template: "<p> Welcome {{name}}, You have mentioned your age as {{age}}\n<button (click) = \"sendToParent()\"> Call Parent </button> </p>\n<div class=\"well\">\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <label for=\"empName\"> Employee Name</label>\n            <input [(ngModel)]=\"employee.empName\">\n        </div>\n        <div class=\"col-xs-6\">\n            <label for=\"empNumber\"> Employee Number </label>\n            <input [(ngModel)]=\"employee.empNumber\">\n        </div>\n    </div>\n</div>\n\n<div class=\"well\">\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <label for=\"empRole\"> Consultant Name</label>\n            <input [(ngModel)]=\"consultant.conName\">\n        </div>\n        <div class=\"col-xs-6\">\n            <label for=\"empDept\"> Consultant Number </label>\n            <input [(ngModel)]=\"consultant.conNumber\">\n        </div>\n    </div>\n</div>\n\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map