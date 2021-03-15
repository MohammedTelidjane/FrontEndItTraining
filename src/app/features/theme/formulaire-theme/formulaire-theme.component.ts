import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Theme } from 'src/app/models/Theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-formulaire-theme',
  templateUrl: './formulaire-theme.component.html',
  styleUrls: ['./formulaire-theme.component.css']
})
export class FormulaireThemeComponent implements OnInit {

  @Output() themeToSend = new EventEmitter();
  @Input() themes: Theme[];
  themeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private themeService: ThemeService) {
      this.themeForm = this.formBuilder.group({
        nom: ['']
      });
     }

  onSubmit(): void {
    this.themeService.create(this.themeForm.value)
    .subscribe();
    console.log(this.themeForm.value);
    this.themeToSend.emit(this.themeForm.value);
  }

  ngOnInit(): void {
  }

}
