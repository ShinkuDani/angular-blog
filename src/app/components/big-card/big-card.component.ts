import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
 @Input()
  pictureCover:string = "";
 @Input()
  cardTitle:string = "";
 @Input()
  cardDescription:string = "Era uma Vez um mundo que foi fragmentado e novamente reunido formado de duas partes";

  constructor() { }

  ngOnInit(): void {
  }

}
