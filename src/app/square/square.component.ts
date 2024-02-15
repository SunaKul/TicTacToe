/*import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {

     @Input() value: string= 'X';

      constructor() {
    if (this.value !== 'X' && this.value !== 'O') {
      throw new Error('Input value must be either "X" or "O"');
    }
  }
     


}*/


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {

  @Input() value: string= 'X';

  constructor() {
if (this.value !== 'X' && this.value !== 'O') {
  throw new Error('Input value must be either "X" or "O"');
}
}} 