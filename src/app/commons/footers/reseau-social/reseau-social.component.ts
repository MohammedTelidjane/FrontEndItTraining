import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reseau-social',
  templateUrl: './reseau-social.component.html',
  styleUrls: ['./reseau-social.component.css']
})
export class ReseauSocialComponent implements OnInit {

  @Input() lienHypertexte:string
  @Input() lienImageReseauSocial:string
  @Input() nomReseauSocial:string

  constructor() { }

  ngOnInit(): void {
  }

}
