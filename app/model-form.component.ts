import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './Employee';
//import { ValidationService } from '../shared/validation.service';
//import { Hero } from '../shared/hero';

@Component({
  moduleId: module.id,
  selector: 'model-form',
  templateUrl: 'model-form.component.html'
})
export class ModelFormComponent implements OnInit {
  modelForm: FormGroup;
  model: Employee;  
  powers: string[];
  technologies: string[];
  operatingSystems: string[];
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {                   
      this.technologies = ['Java', 'Groovy', 'Spring'];

    this.model = new Employee('Murali', 'Kathir', this.technologies[0], this.operatingSystems);
    this.operatingSystems = ['Mac', 'Windows', 'Linux'];               
      this.modelForm = this.formBuilder.group({
        firstName:     [this.model.firstName, Validators.required],
        lastName: [this.model.lastName, Validators.required],
        technology:    [this.model.technology, Validators.required],
        os:    [this.model.os, Validators.required]
      });
  }

  onSubmit()  {
    this.submitted = true;
  }
}