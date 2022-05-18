import { Component, OnInit } from '@angular/core';
import { IHotel } from '../hote';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        this.filteredHotels = this.hotels;
  }
  public title : string = 'La liste des Hotels';
  /**
   * hotels
   */
  public hotels: IHotel[] = [
  {
        "hotelId": 1,
        "hotelName": "Buea sweet life",
        "description": "Belle vue au bord de la mer",
        "price": 230.5,
        "imageUrl": "assets/img/hotel-room.jpg",
        "rating": 3.5
  },
  {
        "hotelId": 2,
        "hotelName": "Marakech",
        "description": "Profitez de la vue sur les montagnes",
        "price": 145.5,
        "imageUrl": "assets/img/the-interior.jpg",
        "rating": 5
  },
  {
        "hotelId": 3,
        "hotelName": "Abudja new look palace",
        "description": "Séjour complet avec service de voitures",
        "price": 120.12,
        "imageUrl": "assets/img/indoors.jpg",
        "rating": 4
  },
  {
        "hotelId": 4,
        "hotelName": "Hotel Concorde",
        "description": "Magnifique cadre pour votre séjour à Paris",
        "price": 200,
        "imageUrl": "assets/img/Concorde.jpg",
        "rating": 5
  },
  {
        "hotelId": 5,
        "hotelName": "Bordeau en Province",
        "description": "Magnifique cadre pour votre en Province",
        "price": 155.12,
        "imageUrl": "assets/img/Bordeau.jpg",
        "rating": 4.5
    },
  {
        "hotelId": 6,
        "hotelName": "Merveille de Marseille",
        "description": "Cadre de vie idéal à Marseille",
        "price": 125.5,
        "imageUrl": "assets/img/Marseille.jpg",
        "rating": 5
  }
  ];
     
      public showBadge: boolean = true;

      public toggleBadgeIsNewBagdge(): void{
      this.showBadge=!this.showBadge;
      }

      /**
       * hotelFilter */
      private _hotelFilter = "";

      public filteredHotels: IHotel[] = [];

      public get hotelFilter(): string{
            return this._hotelFilter;
      }
      public set hotelFilter(filter: string) {
            this._hotelFilter = filter;
            this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) :this.hotels
      }


      private filterHotels(criteria: string): IHotel[] {
            criteria = criteria.toLocaleLowerCase();

            const res = this.hotels.filter(
                  (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !==-1
            );
            return res;
      }


}
