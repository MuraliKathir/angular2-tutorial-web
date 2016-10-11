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
var child_component_1 = require('./child.component');
var ParentComponent = (function () {
    function ParentComponent() {
        this.myName = 'Murali';
        this.myAge = 20;
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent.prototype.getGreeting = function (greetMsg) {
        this.greet = greetMsg;
    };
    ParentComponent.prototype.getEmployeeDetails = function () {
        this.child.getEmployeeDetails();
        console.log('going to employee details', this.child);
    };
    __decorate([
        core_1.ViewChild(child_component_1.ChildComponent), 
        __metadata('design:type', child_component_1.ChildComponent)
    ], ParentComponent.prototype, "child", void 0);
    ParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'parent',
            template: "\n                <div class=\"well\">\n                    <child [name] = \"myName\"  [age] = \"myAge\" (greet) = \"getGreeting($event)\"> </child>\n                    <button type=\"submit\" class=\"btn btn-default\" (click) = \"getEmployeeDetails()\" >Search</button>\n                </div>\n                {{greet}} <br>\n                <sibling [childMsg] = \"greet\"> </sibling>\n                \n                "
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map