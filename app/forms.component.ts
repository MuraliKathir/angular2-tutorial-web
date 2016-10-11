import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
    moduleId: module.id,
    selector: 'register-form',
    templateUrl: 'form.component.html'
})
export class Registration implements OnInit {
    constructor() { }

    ngOnInit() {}

    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    technologies = ['Java', 'Groovy', 'Spring'];

    model = new Employee('Murali', 'Kathir', this.technologies[0], this.operatingSystems);
    submitted = false;
    operatingSystems = ['Mac', 'Windows', 'Linux'];
  onSubmit() { this.submitted = true; }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newHero() {
    //this.model = new Employee(42, '', '','','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

    onChange(tech) {
        console.log('event ', tech);

    }
}