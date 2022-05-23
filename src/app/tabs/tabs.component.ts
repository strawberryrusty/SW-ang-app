import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
   const swService = new StarWarService();
   this.characters = swService.getCharacters(this.chosenList);
   return this.characters;
  }


}
