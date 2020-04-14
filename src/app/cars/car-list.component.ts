import { Component } from "@angular/core";
import { ICar } from "./car";
import { CarService } from './car.service';

@Component({
    selector: 'cars',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
    title: string = "Car List2";
    imageWidth: number = 100;
    imageMargin:number = 2;
    showImage: boolean = false;
    //listFilter: string = 'mazda';
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter = value;
      this.filteredCars = this.listFilter? this.performaFilter(this.listFilter) : this.cars;
    }
    filteredCars: ICar[];
    cars: ICar[] ;

    private _carService;
    constructor(private carService: CarService) {
      this._carService = carService;
      
      //this.listFilter = 'mazda';

      //let svc = new MyService();
    }
    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    performaFilter(st: string): ICar[]{
      st = st.toLowerCase();
      return this.cars.filter((car:ICar)=> car.carName.toLowerCase().indexOf(st)!=-1);
    }

    onNotify(message: string):void {
      this.title = 'car list ' + message; 
    }

    ngOnInit() : void {
      this.cars = this.carService.getCars();
      this.filteredCars = this.cars;

    }

}