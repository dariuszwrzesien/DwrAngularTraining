import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  onClick(): void {
    this.ratingClicked.emit(`The ${this.rating} star(s) has been clicked!`);
    console.log(`The ${this.rating} star(s) has been clicked!`);
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
