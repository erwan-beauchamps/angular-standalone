import { DetailsComponent } from './details/details.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent {

}
