import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail.component';
import { RouterModule } from '@angular/router';

registerLocaleData(localeFr,"fr")
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent,
    HomeComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: "home", component: HomeComponent },
        { path: "", redirectTo: "home", pathMatch:"full" },
        { path: "hotels/:id", component: HotelDetailComponent },
        { path: "hotels", component: HotelListComponent },
        { path:"**", redirectTo: "home", pathMatch:"full" }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
