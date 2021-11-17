import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-contact',
  templateUrl: './nav-contact.component.html',
  styleUrls: ['./nav-contact.component.css']
})
export class NavContactComponent implements OnInit {

  activeModal:Boolean = false;
  classModalActive:String = "";


  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(ventana:boolean) {
    this.activeModal = ventana;
  }

}
