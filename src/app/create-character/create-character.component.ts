import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [{display: 'None', value: ''},
                    {display: 'Light', value: 'light'},
                    {display: 'Dark', value: 'dark'}
                  ];
  swService: StarWarService;

  constructor(swService: StarWarService) {
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onSubmit(submittedForm) {
    // console.log(submittedForm.value);
    this.swService.addCharacter(submittedForm.value.name,submittedForm.value.side)
  }
}
