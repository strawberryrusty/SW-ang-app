import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [StarWarService]
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{ name: string, side: string}>();
  swService : StarWarService

  constructor(swService : StarWarService) {
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({ name: this.character.name, side: side});
    this.swService.onSideChosen({name: this.character.name, side: side});
  }
}
