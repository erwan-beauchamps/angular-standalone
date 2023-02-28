import { CounterService } from './../../counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  countValue = 0;

  constructor(private counter: CounterService) {
  };

  clickOnDetails(): void {
    this.counter.incrValue();
    this.countValue = this.counter.getValue();
  }

}
