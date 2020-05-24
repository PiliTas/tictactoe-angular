import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cellgrid',
  templateUrl: './cellgrid.component.html',
  styleUrls: ['./cellgrid.component.scss']
})
export class CellgridComponent {

  //  rando;
  // constructor() {
  //   setInterval(()=>this.rando = Math.random(),500)
  // }

  @Input() value: 'X' | 'O'

}
