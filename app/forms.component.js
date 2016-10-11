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
var employee_1 = require('./employee');
var Registration = (function () {
    function Registration() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.technologies = ['Java', 'Groovy', 'Spring'];
        this.model = new employee_1.Employee('Murali', 'Kathir', this.technologies[0], this.operatingSystems);
        this.submitted = false;
        this.operatingSystems = ['Mac', 'Windows', 'Linux'];
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
    }
    Registration.prototype.ngOnInit = function () { };
    Registration.prototype.onSubmit = function () { this.submitted = true; };
    Registration.prototype.newHero = function () {
        var _this = this;
        //this.model = new Employee(42, '', '','','');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    Registration.prototype.onChange = function (tech) {
        console.log('event ', tech);
    };
    Registration = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-form',
            templateUrl: 'form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Registration);
    return Registration;
}());
exports.Registration = Registration;
//# sourceMappingURL=forms.component.js.map