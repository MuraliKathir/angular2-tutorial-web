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
var forms_1 = require('@angular/forms');
var Employee_1 = require('./Employee');
//import { ValidationService } from '../shared/validation.service';
//import { Hero } from '../shared/hero';
var ModelFormComponent = (function () {
    function ModelFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ModelFormComponent.prototype.ngOnInit = function () {
        this.technologies = ['Java', 'Groovy', 'Spring'];
        this.model = new Employee_1.Employee('Murali', 'Kathir', this.technologies[0], this.operatingSystems);
        this.operatingSystems = ['Mac', 'Windows', 'Linux'];
        this.modelForm = this.formBuilder.group({
            firstName: [this.model.firstName, forms_1.Validators.required],
            lastName: [this.model.lastName, forms_1.Validators.required],
            technology: [this.model.technology, forms_1.Validators.required],
            os: [this.model.os, forms_1.Validators.required]
        });
    };
    ModelFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    ModelFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'model-form',
            templateUrl: 'model-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ModelFormComponent);
    return ModelFormComponent;
}());
exports.ModelFormComponent = ModelFormComponent;
//# sourceMappingURL=model-form.component.js.map