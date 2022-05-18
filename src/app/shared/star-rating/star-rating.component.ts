import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor() { }
  public starWidth?: number; 
  @Input()
  public rating :number = 2;

  ngOnInit() {
    this.starWidth = this.rating * 125 / 5;
  }

}
