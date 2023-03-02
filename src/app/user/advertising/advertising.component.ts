import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css']
})
export class AdvertisingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  positionOn = {'iconSantaClause': false, 'hidden1': false, };
  showAdvertising1(){
      this.positionOn2.pinusCembra = false ;
      this.positionOn.hidden1 = true;
  }

  positionOn2 = {'pinusCembra': false,  'hidden1': false, }; 
  showAdvertising2(){
    this.positionOn2.pinusCembra = true ;
    this.positionOn.hidden1 = false;
  }

  myThumbnail = "/assets/resized_400x500/resized_400x600/filifera_aurea_nana1-900x900.jpg";
  myFullresImage = "/assets/filifera_aurea_nana1-900x900.jpg";

}
