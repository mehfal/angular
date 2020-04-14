import { Injectable } from "@angular/core";
import { ICar } from "./car";

@Injectable({
  providedIn: 'root',
})    
export class CarService {
    getCars(): ICar[] {
       return [
        {
            "carId": 1,
            "carName": "Mazda CX-3",
            "carCode": "CAR-0011",
            "releaseDate": "March 19, 2019",
            "description": "amazing car from mazda",
            "price": 30000,
            "starRating": 3.2,
            "imageUrl": "assets/images/mazdacx3.jpg"
          },
          {
            "carId": 2,
            "carName": "Toyota RAV4",
            "carCode": "CAR-0023",
            "releaseDate": "March 18, 2019",
            "description": "rav4",
            "price": 35000,
            "starRating": 4.2,
            "imageUrl": "assets/images/rav4.jpeg"
          },
       ];  
    }
}