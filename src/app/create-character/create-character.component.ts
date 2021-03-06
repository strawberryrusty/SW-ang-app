import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-wars.service';
// import { FormsModule } from '@angular/forms';

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
  defaultName = 'Obi-Wan';

  constructor(swService: StarWarService) {
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    // console.log(submittedForm.value);
    // console.log(submittedForm);
    this.swService.addCharacter(submittedForm.value.name,submittedForm.value.side)
  }
}
