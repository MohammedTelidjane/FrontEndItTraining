import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Theme } from 'src/app/models/Theme';

@Component({
  selector: 'app-card-theme',
  templateUrl: './card-theme.component.html',
  styleUrls: ['./card-theme.component.css']
})
export class CardThemeComponent implements OnInit {

  @Input() theme: Theme;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  themeForm: FormGroup;

  constructor(private themeBuilder: FormBuilder) {
    this.themeForm = this.themeBuilder.group({
      nom: ['']
    });
   }

  ngOnInit(): void {
  }

  onUpdate() {
    this.update.emit();
  }

  onDelete() {
    this.delete.emit();
  }

}
