import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'greeting',
    template: `<h3>{{greet}} Topics: </h3>
                <li *ngFor = "let topic of topics">
                    <a href=# >{{topic}}</a>
                </li>
              `
})
export class GreetingComponent implements OnInit {
    constructor() { }

    greet: string;
    topics:string[];
    ngOnInit() { 
        this.greet = 'Welcome to Angular2 ';
        this.topics = ['Interpolation', 'Component Creation', 'Data Binding', 'Directives'];
    }
}