import { Component, OnInit } from '@angular/core';
import { IHotel } from '../hote';
import { HotelListService } from '../../_services/hotel-list.service';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
      receivedRating?: string;
      public errMsg?:string;

      constructor(private hotelListService: HotelListService) {
        
   }

      ngOnInit(): void {
            this.hotelListService.getHotels().subscribe({
                  next: hotels => {
                        this.hotels = hotels;
                        this.filteredHotels = this.hotels
                  },
                  error: err => this.errMsg = err
        });
            this.hotelFilter="";
  }
  public title : string = 'La liste des Hotels';
  /**
   * hotels
   */
  public hotels: IHotel[] = [];
     
      public showBadge: boolean = true;

      public toggleBadgeIsNewBagdge(): void{
      this.showBadge=!this.showBadge;
      }

      /**
       * hotelFilter */
      private _hotelFilter = "";

      public filteredHotels: IHotel[] = [];
      public receiveRating!: string;

      public get hotelFilter(): string{
            return this._hotelFilter;
      }
      public set hotelFilter(filter: string) {
            this._hotelFilter = filter;
            this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) :this.hotels
      }

      public receiveRatingClicked(message: string): void{
            this.receivedRating = message;
}

      private filterHotels(criteria: string): IHotel[] {
            criteria = criteria.toLocaleLowerCase();

            const res = this.hotels.filter(
                  (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !==-1
            );
            return res;
      }


}
