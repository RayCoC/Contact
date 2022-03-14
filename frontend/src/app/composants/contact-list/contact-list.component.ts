import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contactModel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts : Contact[];
  constructor() { }

  ngOnInit() {
  }

}
