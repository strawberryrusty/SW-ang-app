import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [StarWarService]
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  swService: StarWarService;

    constructor(swService : StarWarService) {
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {

   this.characters = this.swService.getCharacters(this.chosenList);
   return this.characters;
  }

}
