import {Component,EventEmitter,Input} from '@angular/core';

@Component({
    selector:'counter',
    outputs:['counterChange'],
    //inputs:['CounterValue'],
    template:`<div><button id="btndec" (click)="decCounter()">-</button> {{CounterValue}} <button id="btnInc" (click)="incCounter()">+</button>
    </div>
    `,
    styles:['button{ color:gray,border : black}','p.blue { color:blue; }']
})
export class AppCounter{
    CounterValue:number;
    counterChange:EventEmitter<number>;
    @Input()
    set Counter(value:number){
        this.CounterValue=value||0;
    } 
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