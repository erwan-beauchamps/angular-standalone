import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  constructor() {
  };

}
