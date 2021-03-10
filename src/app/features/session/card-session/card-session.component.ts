import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-card-session',
  templateUrl: './card-session.component.html',
  styleUrls: ['./card-session.component.css']
})
export class CardSessionComponent implements OnInit {

  @Input() sess: Session;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

}
