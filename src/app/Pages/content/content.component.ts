import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/datafake'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  pictureCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";

  private id:string | null = "0";

  constructor(
    private rout:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe( value =>
      this.id = value.get("id")
       );

       this.setValuesToComponent(this.id)

  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    
    this.contentDescription = result.description;
    this.contentTitle = result.title;
    this.pictureCover = result.pictureCover;
  }

}
