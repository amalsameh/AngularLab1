import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App 1!';
  ComponentCounterValue:number=5;
  
  processedcounter(counter:number)
  {
      this.ComponentCounterValue=counter;
  }
}
