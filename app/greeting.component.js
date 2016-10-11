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
var GreetingComponent = (function () {
    function GreetingComponent() {
    }
    GreetingComponent.prototype.ngOnInit = function () {
        this.greet = 'Welcome to Angular2 ';
        this.topics = ['Interpolation', 'Component Creation', 'Data Binding', 'Directives'];
    };
    GreetingComponent = __decorate([
        core_1.Component({
            selector: 'greeting',
            template: "<h3>{{greet}} Topics: </h3>\n                <li *ngFor = \"let topic of topics\">\n                    <a href=# >{{topic}}</a>\n                </li>\n                <p *ngIf = \"topics.length > 2\"> There are many topics </p>\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], GreetingComponent);
    return GreetingComponent;
}());
exports.GreetingComponent = GreetingComponent;
//# sourceMappingURL=greeting.component.js.map