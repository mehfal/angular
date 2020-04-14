import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list.component';
import { ConvertToDashPipe } from './shared/convert-to-dash.pipe';
import { StarComponent } from './shared/star.component';
import { CarService } from './cars/car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    ConvertToDashPipe,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
