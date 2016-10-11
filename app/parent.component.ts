import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    moduleId: module.id,
    selector: 'parent',
    template: `
                <div class="container">
                    <div class="well">
                        <h3> Inter Component Communication. </h3>
                        <child [name] = "myName"  [age] = "myAge" (greet) = "getGreeting($event)"> </child>
                        <button type="submit" class="btn btn-default" (click) = "getEmployeeDetails()" >Search</button>
                    </div>
                    <div class="well">
                        <div class="row"> {{greet}} </div>
                        <div class="row"> <sibling [childMsg] = "greet"> </sibling> </div>
                    </div>
                </div>
                
                `

})
export class ParentComponent implements OnInit {
    constructor() { }
    myName: string = 'Murali';
    myAge: number = 20;
    greet: string;
    @ViewChild(ChildComponent) child: ChildComponent;
    ngOnInit() { 
        
    }
    getGreeting(greetMsg: string) {
        this.greet = greetMsg;
    }

    getEmployeeDetails() {
        this.child.getEmployeeDetails();
        console.log('going to employee details', this.child);
    }

}