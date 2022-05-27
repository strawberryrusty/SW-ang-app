import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Subject } from "rxjs";
import { HttpClient} from '@angular/common/http'

@Injectable()
export class StarWarService{
    private characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;

    constructor(logService: LogService, http: HttpClient) {
      this.logService = logService;
      this.http = http;
    }

    fetchCharacters() {
     this.http.get('https://swapi.dev/api/people').subscribe(
       (response : Response) => {
         console.log(response);
       }
     );
    //  this.http.post('https://swapi.dev/api/people', {})
    }

    getCharacters(chosenList ) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    })
  }

  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side; //here is where we are switch the side of a character and assigning it to the character
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side:' + charInfo.side);
  }

  addCharacter(name, side){
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side}
    this.characters.push(newChar);
  }
}
