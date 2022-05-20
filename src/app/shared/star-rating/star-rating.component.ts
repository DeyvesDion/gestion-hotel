import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor() { }
  public starWidth?: number; 
  @Input()
  public rating: number = 2;
  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.starWidth = this.rating * 125 / 5;
  }
  public sendRating(): void{
this.starRatingClicked.emit(`La note est de ${this.rating}`);
  }

}
