import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sibling',
    template: ` Message in Sibling : {{childMsg}}`
})
export class SiblingComponent implements OnInit {

    @Input() childMsg: string;
    constructor() { }

    ngOnInit() { }
}