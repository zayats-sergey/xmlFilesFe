import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parallax-show',
  templateUrl: './parallax-show.component.html',
  styleUrls: ['./parallax-show.component.css']
})
export class ParallaxShowComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['header/home']);
  }

  

}
