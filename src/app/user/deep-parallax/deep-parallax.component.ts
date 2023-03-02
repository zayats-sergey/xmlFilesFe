import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { CssSelector } from '@angular/compiler';
import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { Directive, Input, ElementRef} from '@angular/core';
import { ParallaxDirective } from 'src/app/parallax.directive';


@Component({
  selector: 'app-deep-parallax',
  templateUrl: './deep-parallax.component.html',
  styleUrls: ['./deep-parallax.component.css']
})



export class DeepParallaxComponent implements OnInit, OnChanges {

  constructor(
    public derectiva: ParallaxDirective
  ) { }

  ngOnInit() {
    this.bestFrm();
  }

  ngOnChanges(){
  }

   counter = 0;
  //  @HostListener('window:keydown.enter', ['$event'])
  //  handleKeyDown(event: KeyboardEvent) {
  //   this.counter++;
  // }
  // resetCounter() {
  //   this.counter = 0;
  // }

  // someClass = {'parallax__boat' : true, 'parallax__boat1' : false};
  // someHeight: any;
   @HostListener('window:scroll', ['$event'])
   handleKeyDown(event: KeyboardEvent) {
      // this.counter++;
      // let height = (window.innerHeight + this.counter);
      // this.someHeight = height + 'px';
      // // console.log(height + 'px');
      // this.someClass.parallax__boat = false;
      // this.someClass.parallax__boat1 = true;
    }

    resetCounter() {
        this.counter = 0;
      }

      transform(){
      // this.someClass.parallax__boat = false;
      // this.someClass.parallax__boat1 = true;
      }



      bestFrm(){
        this.derectiva
        .onWindowScroll()
        .subscribe((res)=>{
          console.log(res);
        })
      }


}
