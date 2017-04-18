import {Component,EventEmitter,Input} from '@angular/core';

@Component({
    selector:'counter',
    outputs:['counterChange'],
    inputs:['CounterValue'],
    template:`<div><button id="btndec" (click)="decCounter()">-</button>{{CounterValue}}<button id="btnInc" (click)="incCounter()">+</button>
    </div>
    `,
    styles:[]
})
export class AppCounter{
	counterChange:EventEmitter<number>;
    @Input() CounterValue:number;
    constructor()
    {
        this.counterChange = new EventEmitter();
    }
incCounter()
{
    this.CounterValue+=1;
    this.counterChange.emit(this.CounterValue);
}
decCounter()
{
    this.CounterValue-=1;
    this.counterChange.emit(this.CounterValue);
}
}