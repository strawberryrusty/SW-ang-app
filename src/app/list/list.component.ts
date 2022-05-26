import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarService;
  loadedSide = 'all';

  constructor(activatedRoute: ActivatedRoute, swService: StarWarService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
    (params) => {
      this.characters = this.swService.getCharacters(params.side);
      this.loadedSide = params.side;
     }
    );
    this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }
}
