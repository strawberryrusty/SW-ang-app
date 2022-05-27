import { Component, OnInit,Input, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarService;
  loadedSide = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    this.swService.fetchCharacters();
    this.activatedRoute.params.subscribe(
    (params) => {
      this.characters = this.swService.getCharacters(params.side);
      this.loadedSide = params.side;
     }
    );
   this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
