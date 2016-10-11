import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    template: `<p> Welcome {{name}}, You have mentioned your age as {{age}}
<button class="btn btn-default" (click) = "sendToParent()"> Call Parent </button> </p>
<div class="well">
    <div class="row">
        <div class="col-xs-6">
            <label for="empName"> Employee Name</label>
            <input [(ngModel)]="employee.empName">
        </div>
        <div class="col-xs-6">
            <label for="empNumber"> Employee Number </label>
            <input [(ngModel)]="employee.empNumber">
        </div>
    </div>
</div>

<div class="well">
    <div class="row">
        <div class="col-xs-6">
            <label for="empRole"> Consultant Name</label>
            <input [(ngModel)]="consultant.conName">
        </div>
        <div class="col-xs-6">
            <label for="empDept"> Consultant Number </label>
            <input [(ngModel)]="consultant.conNumber">
        </div>
    </div>
</div>

              `
})
export class ChildComponent implements OnInit {
    constructor() { }
    @Input() name: string;
    @Input() age: number;
    employee: any = { empName:'', empNumber:''};
    consultant: any = { conName:'', conNumber:''};
    @Output() greet = new EventEmitter<string>();
    
    ngOnInit() { }

    sendToParent() {
        this.greet.emit(`Child Welcomes ${this.name}, Your age is ${this.age}`);
    }

    getEmployeeDetails() {
        console.log('In child Component');
    }
}