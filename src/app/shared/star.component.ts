import { Component, OnInit, OnChanges, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 100 /5 ;
    }

    onClick(): void {
        let str = `the rating ${this.rating} was clicked`;
        this.notify.emit(str);
    }
}

